"use client";

import { useEffect, useRef, useCallback } from "react";

interface GlobeNode {
  theta: number;
  phi: number;
  baseRadius: number;
  heightOffset: number;
  x: number;
  y: number;
  z: number;
  visible: boolean;
  size: number;
  pulsePhase: number;
  brightness: number;
  isLand: boolean;
}

interface FloatingParticle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  pulsePhase: number;
  brightness: number;
  orbitAngle: number;
  orbitSpeed: number;
  orbitRadius: number;
  driftPhase: number;
  neighbors: number[];
}

interface Connection {
  from: number;
  to: number;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<GlobeNode[]>([]);
  const particlesRef = useRef<FloatingParticle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const mouseRef = useRef<MousePosition>({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const dprRef = useRef<number>(1);
  const rotationRef = useRef({ x: 0.3, y: 0 });
  const globeRef = useRef({ centerX: 0, centerY: 0, radius: 0 });

  // Check if a point is on a "landmass"
  const isLandmass = (theta: number, phi: number): boolean => {
    const t = ((theta % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const p = phi / Math.PI; // 0 to 1
    
    // Create continent-like shapes
    const n1 = Math.sin(t * 2.5 + p * 3) * Math.cos(t * 1.5 + p * 2);
    const n2 = Math.sin(t * 4 + p * 2.5) * 0.5;
    const n3 = Math.cos(t * 3 + p * 4) * 0.3;
    const combined = n1 + n2 + n3;
    
    // North America region
    if (p > 0.2 && p < 0.45 && t > 3.5 && t < 5.5 && combined > -0.2) return true;
    // South America
    if (p > 0.45 && p < 0.75 && t > 4.2 && t < 5.3 && combined > 0) return true;
    // Europe
    if (p > 0.25 && p < 0.42 && t > 5.8 && (t < 6.28 || t < 0.8) && combined > -0.1) return true;
    // Africa
    if (p > 0.35 && p < 0.7 && t > 5.5 && t < 6.5 && combined > -0.15) return true;
    // Asia
    if (p > 0.2 && p < 0.55 && t > 0.5 && t < 2.5 && combined > -0.1) return true;
    // Australia
    if (p > 0.55 && p < 0.75 && t > 1.8 && t < 2.8 && combined > 0.1) return true;
    // Antarctica
    if (p > 0.85 && combined > 0.2) return true;
    
    return combined > 0.8;
  };

  const initGlobe = useCallback((width: number, height: number) => {
    const nodes: GlobeNode[] = [];
    const connections: Connection[] = [];
    const particles: FloatingParticle[] = [];
    const globeRadius = Math.min(width, height) * 0.36;
    const centerX = width / 2;
    const centerY = height / 2;
    
    globeRef.current = { centerX, centerY, radius: globeRadius };

    // === BASE GLOBE LAYER (complete sphere) ===
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const baseNodeCount = 400; // More nodes for complete coverage
    
    for (let i = 0; i < baseNodeCount; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / baseNodeCount);
      
      // All base nodes are visible - this forms the solid sphere
      nodes.push({
        theta,
        phi,
        baseRadius: globeRadius,
        heightOffset: 0,
        x: 0, y: 0, z: 0,
        visible: true,
        size: 1.5, // Consistent size for solid sphere look
        pulsePhase: i * 0.05,
        brightness: 0.6 + Math.random() * 0.15,
        isLand: false,
      });
    }

    // === ELEVATED LAND LAYER (3D continents on top) ===
    const landNodeCount = 300;
    const landHeight = 15; // Elevation above base
    
    for (let i = 0; i < landNodeCount; i++) {
      const theta = 2 * Math.PI * i / goldenRatio + 0.05;
      const phi = Math.acos(1 - 2 * (i + 0.5) / landNodeCount);
      
      if (isLandmass(theta, phi)) {
        // Vary height for mountains
        const mountainNoise = Math.sin(theta * 8 + phi * 6) * 0.5 + 0.5;
        const height = landHeight + mountainNoise * 10;
        
        nodes.push({
          theta,
          phi,
          baseRadius: globeRadius,
          heightOffset: height,
          x: 0, y: 0, z: 0,
          visible: true,
          size: 2 + mountainNoise * 1,
          pulsePhase: i * 0.04,
          brightness: 0.85 + mountainNoise * 0.15,
          isLand: true,
        });
      }
    }

    // Create connections - separate for base and land
    const baseNodes = nodes.filter(n => !n.isLand);
    const landNodes = nodes.filter(n => n.isLand);
    
    // Base sphere mesh connections (denser for solid look)
    for (let i = 0; i < baseNodes.length; i++) {
      const nodeA = baseNodes[i];
      const nodeAIdx = nodes.indexOf(nodeA);
      const distances: { idx: number; dist: number }[] = [];
      
      for (let j = 0; j < baseNodes.length; j++) {
        if (i === j) continue;
        const nodeB = baseNodes[j];
        const nodeBIdx = nodes.indexOf(nodeB);
        
        const dx = Math.sin(nodeA.phi) * Math.cos(nodeA.theta) - Math.sin(nodeB.phi) * Math.cos(nodeB.theta);
        const dy = Math.cos(nodeA.phi) - Math.cos(nodeB.phi);
        const dz = Math.sin(nodeA.phi) * Math.sin(nodeA.theta) - Math.sin(nodeB.phi) * Math.sin(nodeB.theta);
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        distances.push({ idx: nodeBIdx, dist });
      }
      
      distances.sort((a, b) => a.dist - b.dist);
      // More connections for solid look
      for (let k = 0; k < Math.min(5, distances.length); k++) {
        const exists = connections.some(c => 
          (c.from === nodeAIdx && c.to === distances[k].idx) || 
          (c.from === distances[k].idx && c.to === nodeAIdx)
        );
        if (!exists) {
          connections.push({ from: nodeAIdx, to: distances[k].idx });
        }
      }
    }
    
    // Land mesh connections (even denser)
    for (let i = 0; i < landNodes.length; i++) {
      const nodeA = landNodes[i];
      const nodeAIdx = nodes.indexOf(nodeA);
      const distances: { idx: number; dist: number }[] = [];
      
      for (let j = 0; j < landNodes.length; j++) {
        if (i === j) continue;
        const nodeB = landNodes[j];
        const nodeBIdx = nodes.indexOf(nodeB);
        
        const dx = Math.sin(nodeA.phi) * Math.cos(nodeA.theta) - Math.sin(nodeB.phi) * Math.cos(nodeB.theta);
        const dy = Math.cos(nodeA.phi) - Math.cos(nodeB.phi);
        const dz = Math.sin(nodeA.phi) * Math.sin(nodeA.theta) - Math.sin(nodeB.phi) * Math.sin(nodeB.theta);
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        distances.push({ idx: nodeBIdx, dist });
      }
      
      distances.sort((a, b) => a.dist - b.dist);
      for (let k = 0; k < Math.min(6, distances.length); k++) {
        const exists = connections.some(c => 
          (c.from === nodeAIdx && c.to === distances[k].idx) || 
          (c.from === distances[k].idx && c.to === nodeAIdx)
        );
        if (!exists) {
          connections.push({ from: nodeAIdx, to: distances[k].idx });
        }
      }
    }

    // === FLOATING PARTICLES with MORE connections ===
    const allParticles: FloatingParticle[] = [];
    
    // Inner orbit ring
    for (let i = 0; i < 36; i++) {
      const angle = (i / 36) * Math.PI * 2;
      const orbitRadius = globeRadius * (1.12 + (i % 3) * 0.06);
      
      allParticles.push({
        x: centerX + Math.cos(angle) * orbitRadius,
        y: centerY + Math.sin(angle) * orbitRadius,
        baseX: centerX,
        baseY: centerY,
        size: 1.4 + Math.random() * 0.8,
        pulsePhase: angle,
        brightness: 0.6 + Math.random() * 0.2,
        orbitAngle: angle,
        orbitSpeed: 0.00005 + Math.random() * 0.00006,
        orbitRadius,
        driftPhase: Math.random() * Math.PI * 2,
        neighbors: [],
      });
    }
    
    // Mid orbit
    for (let i = 0; i < 48; i++) {
      const angle = (i / 48) * Math.PI * 2 + 0.05;
      const orbitRadius = globeRadius * (1.45 + (i % 4) * 0.1);
      
      allParticles.push({
        x: centerX + Math.cos(angle) * orbitRadius,
        y: centerY + Math.sin(angle) * orbitRadius,
        baseX: centerX,
        baseY: centerY,
        size: 1.1 + Math.random() * 0.7,
        pulsePhase: angle,
        brightness: 0.45 + Math.random() * 0.2,
        orbitAngle: angle,
        orbitSpeed: 0.00003 + Math.random() * 0.00004,
        orbitRadius,
        driftPhase: Math.random() * Math.PI * 2,
        neighbors: [],
      });
    }
    
    // Outer scattered
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = globeRadius * (1.9 + Math.random() * 1.3);
      const bx = centerX + Math.cos(angle) * dist;
      const by = centerY + Math.sin(angle) * dist * 0.7;
      
      allParticles.push({
        x: bx,
        y: by,
        baseX: bx,
        baseY: by,
        size: 0.9 + Math.random() * 0.7,
        pulsePhase: Math.random() * Math.PI * 2,
        brightness: 0.35 + Math.random() * 0.2,
        orbitAngle: angle,
        orbitSpeed: 0.000015 + Math.random() * 0.00002,
        orbitRadius: dist,
        driftPhase: Math.random() * Math.PI * 2,
        neighbors: [],
      });
    }
    
    // Corner particles
    const corners = [
      { x: width * 0.06, y: height * 0.06 },
      { x: width * 0.94, y: height * 0.06 },
      { x: width * 0.06, y: height * 0.94 },
      { x: width * 0.94, y: height * 0.94 },
      { x: width * 0.5, y: height * 0.03 },
      { x: width * 0.5, y: height * 0.97 },
      { x: width * 0.03, y: height * 0.5 },
      { x: width * 0.97, y: height * 0.5 },
    ];
    
    for (const corner of corners) {
      for (let i = 0; i < 6; i++) {
        const spread = Math.min(width, height) * 0.1;
        const bx = corner.x + (Math.random() - 0.5) * spread;
        const by = corner.y + (Math.random() - 0.5) * spread;
        allParticles.push({
          x: bx,
          y: by,
          baseX: bx,
          baseY: by,
          size: 0.8 + Math.random() * 0.6,
          pulsePhase: Math.random() * Math.PI * 2,
          brightness: 0.3 + Math.random() * 0.15,
          orbitAngle: 0,
          orbitSpeed: 0,
          orbitRadius: 0,
          driftPhase: Math.random() * Math.PI * 2,
          neighbors: [],
        });
      }
    }
    
    // Pre-compute particle neighbors - MORE connections
    for (let i = 0; i < allParticles.length; i++) {
      const p = allParticles[i];
      const distances: { idx: number; dist: number }[] = [];
      
      for (let j = 0; j < allParticles.length; j++) {
        if (i === j) continue;
        const other = allParticles[j];
        
        const px = p.orbitRadius > 0 ? centerX + Math.cos(p.orbitAngle) * p.orbitRadius : p.baseX;
        const py = p.orbitRadius > 0 ? centerY + Math.sin(p.orbitAngle) * p.orbitRadius * 0.7 : p.baseY;
        const ox = other.orbitRadius > 0 ? centerX + Math.cos(other.orbitAngle) * other.orbitRadius : other.baseX;
        const oy = other.orbitRadius > 0 ? centerY + Math.sin(other.orbitAngle) * other.orbitRadius * 0.7 : other.baseY;
        const dist = Math.sqrt((px - ox) ** 2 + (py - oy) ** 2);
        distances.push({ idx: j, dist });
      }
      
      distances.sort((a, b) => a.dist - b.dist);
      // Connect to 4-7 nearest neighbors (more connections)
      const connectCount = 4 + Math.floor(Math.random() * 4);
      for (let k = 0; k < Math.min(connectCount, distances.length); k++) {
        if (distances[k].dist < 300) {
          p.neighbors.push(distances[k].idx);
        }
      }
    }

    connectionsRef.current = connections;
    particlesRef.current = allParticles;
    return nodes;
  }, []);

  const projectNode = useCallback((node: GlobeNode, rotX: number, rotY: number) => {
    const { centerX, centerY } = globeRef.current;
    const radius = node.baseRadius + node.heightOffset;
    
    let x = radius * Math.sin(node.phi) * Math.cos(node.theta);
    let y = radius * Math.cos(node.phi);
    let z = radius * Math.sin(node.phi) * Math.sin(node.theta);
    
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    let newX = x * cosY - z * sinY;
    let newZ = x * sinY + z * cosY;
    x = newX;
    z = newZ;
    
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const newY = y * cosX - z * sinX;
    const newZ2 = y * sinX + z * cosX;
    y = newY;
    z = newZ2;
    
    node.x = centerX + x;
    node.y = centerY + y;
    node.z = z;
    node.visible = z > -(node.baseRadius + node.heightOffset) * 0.1;
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const nodes = nodesRef.current;
    const connections = connectionsRef.current;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    const time = timeRef.current;
    const dpr = dprRef.current;
    const { centerX, centerY, radius } = globeRef.current;
    const rotation = rotationRef.current;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    
    // === AMBIENT BACKGROUND ===
    const pulse = Math.sin(time * 0.0004) * 0.5 + 0.5;
    const pulse2 = Math.sin(time * 0.0005 + 1) * 0.5 + 0.5;
    
    const glowPoints = [
      { x: width * 0.1, y: height * 0.15, size: width * 0.5, intensity: 0.08 },
      { x: width * 0.85, y: height * 0.2, size: width * 0.45, intensity: 0.07 },
      { x: width * 0.15, y: height * 0.85, size: width * 0.4, intensity: 0.06 },
      { x: width * 0.9, y: height * 0.8, size: width * 0.5, intensity: 0.07 },
    ];
    
    for (let i = 0; i < glowPoints.length; i++) {
      const gp = glowPoints[i];
      const p = i % 2 === 0 ? pulse : pulse2;
      const glow = ctx.createRadialGradient(gp.x, gp.y, 0, gp.x, gp.y, gp.size);
      glow.addColorStop(0, `rgba(139, 92, 246, ${gp.intensity + p * 0.03})`);
      glow.addColorStop(0.5, `rgba(99, 102, 241, ${gp.intensity * 0.5 + p * 0.015})`);
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    }
    
    const coreGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.8);
    coreGlow.addColorStop(0, `rgba(168, 85, 247, ${0.12 + pulse * 0.04})`);
    coreGlow.addColorStop(0.3, `rgba(139, 92, 246, ${0.07 + pulse * 0.02})`);
    coreGlow.addColorStop(0.6, `rgba(99, 102, 241, ${0.03 + pulse * 0.01})`);
    coreGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = coreGlow;
    ctx.fillRect(0, 0, width, height);

    // === MOUSE-BASED ROTATION ===
    if (mouse.x > 0 && mouse.y > 0) {
      const targetRotY = -((mouse.x - centerX) / width) * Math.PI * 0.8;
      const targetRotX = -((mouse.y - centerY) / height) * Math.PI * 0.5;
      rotation.y += (targetRotY - rotation.y) * 0.025;
      rotation.x += (targetRotX - rotation.x) * 0.025;
    }
    rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotation.x));
    
    // === DRAW GLOBE BASE SPHERE (subtle fill for solidity) ===
    const sphereGradient = ctx.createRadialGradient(
      centerX - radius * 0.2, centerY - radius * 0.2, 0,
      centerX, centerY, radius
    );
    sphereGradient.addColorStop(0, "rgba(79, 70, 229, 0.12)");
    sphereGradient.addColorStop(0.5, "rgba(67, 56, 202, 0.08)");
    sphereGradient.addColorStop(0.85, "rgba(55, 48, 163, 0.05)");
    sphereGradient.addColorStop(1, "rgba(49, 46, 129, 0.02)");
    ctx.fillStyle = sphereGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Edge glow for sphere definition
    const edgeGlow = ctx.createRadialGradient(
      centerX, centerY, radius * 0.85,
      centerX, centerY, radius * 1.05
    );
    edgeGlow.addColorStop(0, "rgba(99, 102, 241, 0)");
    edgeGlow.addColorStop(0.5, "rgba(99, 102, 241, 0.15)");
    edgeGlow.addColorStop(1, "rgba(99, 102, 241, 0)");
    ctx.fillStyle = edgeGlow;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2);
    ctx.fill();

    // === UPDATE PARTICLES ===
    for (const particle of particles) {
      if (particle.orbitRadius > 0) {
        particle.orbitAngle += particle.orbitSpeed * 16;
        const drift = Math.sin(time * 0.0003 + particle.driftPhase) * 10;
        particle.x = particle.baseX + Math.cos(particle.orbitAngle) * (particle.orbitRadius + drift);
        particle.y = particle.baseY + Math.sin(particle.orbitAngle) * (particle.orbitRadius * 0.7 + drift * 0.5);
      } else {
        const driftX = Math.sin(time * 0.00025 + particle.driftPhase) * 8;
        const driftY = Math.cos(time * 0.0002 + particle.driftPhase * 1.3) * 8;
        particle.x = particle.baseX + driftX;
        particle.y = particle.baseY + driftY;
      }
    }
    
    // === DRAW PARTICLE CONNECTIONS ===
    ctx.lineCap = "round";
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      for (const neighborIdx of p.neighbors) {
        if (neighborIdx <= i) continue;
        const neighbor = particles[neighborIdx];
        
        const dx = p.x - neighbor.x;
        const dy = p.y - neighbor.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 250) {
          const opacity = 0.22 * (1 - dist / 250) * Math.min(p.brightness, neighbor.brightness);
          const gradient = ctx.createLinearGradient(p.x, p.y, neighbor.x, neighbor.y);
          gradient.addColorStop(0, `rgba(147, 51, 234, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.8})`);
          gradient.addColorStop(1, `rgba(147, 51, 234, ${opacity})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(neighbor.x, neighbor.y);
          ctx.stroke();
        }
      }
    }
    
    // === DRAW PARTICLES ===
    for (const particle of particles) {
      const pPulse = Math.sin(time * 0.0012 + particle.pulsePhase) * 0.5 + 0.5;
      const size = particle.size * (1 + pPulse * 0.2);
      const brightness = particle.brightness * (0.85 + pPulse * 0.15);
      
      const glowSize = size * 4;
      const pGlow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowSize);
      pGlow.addColorStop(0, `rgba(147, 51, 234, ${0.3 * brightness})`);
      pGlow.addColorStop(0.5, `rgba(139, 92, 246, ${0.1 * brightness})`);
      pGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = pGlow;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = `rgba(168, 85, 247, ${brightness})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      ctx.fill();
      
      if (size > 0.9) {
        ctx.fillStyle = `rgba(255, 255, 255, ${0.45 * brightness})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Project globe nodes
    for (const node of nodes) {
      projectNode(node, rotation.x, rotation.y);
    }
    
    // Sort connections by depth
    const sortedConnections = [...connections].sort((a, b) => {
      const aZ = (nodes[a.from].z + nodes[a.to].z) / 2;
      const bZ = (nodes[b.from].z + nodes[b.to].z) / 2;
      return aZ - bZ;
    });

    // === DRAW GLOBE CONNECTIONS ===
    for (const conn of sortedConnections) {
      const nodeA = nodes[conn.from];
      const nodeB = nodes[conn.to];
      
      if (!nodeA || !nodeB) continue;
      if (!nodeA.visible && !nodeB.visible) continue;
      
      const avgZ = (nodeA.z + nodeB.z) / 2;
      const maxR = Math.max(nodeA.baseRadius + nodeA.heightOffset, nodeB.baseRadius + nodeB.heightOffset);
      const depthFade = Math.max(0, (avgZ + maxR) / (maxR * 2));
      
      if (depthFade < 0.05) continue;
      
      const isLandConn = nodeA.isLand && nodeB.isLand;
      const connPulse = Math.sin(time * 0.0008 + nodeA.pulsePhase) * 0.5 + 0.5;
      
      // Base connections more visible, land connections brightest
      const baseOp = isLandConn ? 0.5 : 0.35;
      const opacity = (baseOp + connPulse * 0.1) * depthFade;
      const lineWidth = (isLandConn ? 1.3 : 1) * depthFade;
      
      // Land = bright purple, Base = indigo
      const r = isLandConn ? 168 : 99;
      const g = isLandConn ? 85 : 102;
      const b = isLandConn ? 247 : 241;
      
      const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${opacity * 0.85})`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(nodeA.x, nodeA.y);
      ctx.lineTo(nodeB.x, nodeB.y);
      ctx.stroke();
    }

    // Sort nodes by z
    const sortedIndices = nodes.map((_, i) => i).sort((a, b) => nodes[a].z - nodes[b].z);

    // === DRAW GLOBE NODES ===
    for (const idx of sortedIndices) {
      const node = nodes[idx];
      if (!node.visible) continue;
      
      const nodeR = node.baseRadius + node.heightOffset;
      const depthFade = Math.max(0.08, (node.z + nodeR) / (nodeR * 2));
      if (depthFade < 0.1) continue;
      
      const nodePulse = Math.sin(time * 0.0012 + node.pulsePhase) * 0.5 + 0.5;
      const size = node.size * depthFade * (1 + nodePulse * 0.15);
      const brightness = node.brightness * depthFade;
      
      // Land = bright purple, Base = indigo (but still visible)
      const r = node.isLand ? 168 : 99;
      const g = node.isLand ? 85 : 102;
      const b = node.isLand ? 247 : 241;
      
      // Glow for all visible nodes
      if (depthFade > 0.15) {
        const glowSize = size * (node.isLand ? 3.5 : 2.5) * (1 + nodePulse * 0.4);
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize);
        glowGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${(node.isLand ? 0.55 : 0.4) * brightness})`);
        glowGradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${0.12 * brightness})`);
        glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Core - more visible for base layer
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${brightness * (node.isLand ? 1 : 0.9)})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Bright center for land nodes
      if (node.isLand && depthFade > 0.25) {
        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 * brightness})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Subtle center for base layer nodes too
      if (!node.isLand && depthFade > 0.4) {
        ctx.fillStyle = `rgba(199, 210, 254, ${0.35 * brightness})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Highlight
    const highlightX = centerX - radius * 0.3;
    const highlightY = centerY - radius * 0.3;
    const highlight = ctx.createRadialGradient(highlightX, highlightY, 0, highlightX, highlightY, radius * 0.6);
    highlight.addColorStop(0, "rgba(255, 255, 255, 0.02)");
    highlight.addColorStop(0.5, "rgba(255, 255, 255, 0.005)");
    highlight.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = highlight;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    
  }, [projectNode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      nodesRef.current = initGlobe(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      timeRef.current += 16;
      draw(ctx, window.innerWidth, window.innerHeight);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initGlobe, draw]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(18, 12, 30, 1) 0%, rgba(10, 7, 18, 1) 40%, rgba(5, 3, 10, 1) 100%)",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
    </>
  );
}
