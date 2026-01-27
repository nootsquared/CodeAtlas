(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/encrypted-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EncryptedText",
    ()=>EncryptedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEFAULT_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";
function generateRandomCharacter(charset) {
    const index = Math.floor(Math.random() * charset.length);
    return charset.charAt(index);
}
function generateGibberishPreservingSpaces(original, charset) {
    if (!original) return "";
    let result = "";
    for(let i = 0; i < original.length; i += 1){
        const ch = original[i];
        result += ch === " " ? " " : generateRandomCharacter(charset);
    }
    return result;
}
const EncryptedText = ({ text, className, revealDelayMs = 50, charset = DEFAULT_CHARSET, flipDelayMs = 50, encryptedClassName, revealedClassName })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const [hasMounted, setHasMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [revealCount, setRevealCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastFlipTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrambleCharsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Only initialize random characters after mount to avoid hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EncryptedText.useEffect": ()=>{
            scrambleCharsRef.current = text ? generateGibberishPreservingSpaces(text, charset).split("") : [];
            setHasMounted(true);
        }
    }["EncryptedText.useEffect"], [
        text,
        charset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EncryptedText.useEffect": ()=>{
            if (!isInView) return;
            // Reset state for a fresh animation whenever dependencies change
            const initial = text ? generateGibberishPreservingSpaces(text, charset) : "";
            scrambleCharsRef.current = initial.split("");
            startTimeRef.current = performance.now();
            lastFlipTimeRef.current = startTimeRef.current;
            setRevealCount(0);
            let isCancelled = false;
            const update = {
                "EncryptedText.useEffect.update": (now)=>{
                    if (isCancelled) return;
                    const elapsedMs = now - startTimeRef.current;
                    const totalLength = text.length;
                    const currentRevealCount = Math.min(totalLength, Math.floor(elapsedMs / Math.max(1, revealDelayMs)));
                    setRevealCount(currentRevealCount);
                    if (currentRevealCount >= totalLength) {
                        return;
                    }
                    // Re-randomize unrevealed scramble characters on an interval
                    const timeSinceLastFlip = now - lastFlipTimeRef.current;
                    if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
                        for(let index = 0; index < totalLength; index += 1){
                            if (index >= currentRevealCount) {
                                if (text[index] !== " ") {
                                    scrambleCharsRef.current[index] = generateRandomCharacter(charset);
                                } else {
                                    scrambleCharsRef.current[index] = " ";
                                }
                            }
                        }
                        lastFlipTimeRef.current = now;
                    }
                    animationFrameRef.current = requestAnimationFrame(update);
                }
            }["EncryptedText.useEffect.update"];
            animationFrameRef.current = requestAnimationFrame(update);
            return ({
                "EncryptedText.useEffect": ()=>{
                    isCancelled = true;
                    if (animationFrameRef.current !== null) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                }
            })["EncryptedText.useEffect"];
        }
    }["EncryptedText.useEffect"], [
        isInView,
        text,
        revealDelayMs,
        charset,
        flipDelayMs
    ]);
    if (!text) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        "aria-label": text,
        role: "text",
        children: text.split("").map((char, index)=>{
            const isRevealed = index < revealCount;
            // Before mounting, use deterministic placeholder to avoid hydration mismatch
            let displayChar;
            if (!hasMounted) {
                displayChar = char === " " ? " " : "█";
            } else if (isRevealed) {
                displayChar = char;
            } else if (char === " ") {
                displayChar = " ";
            } else {
                displayChar = scrambleCharsRef.current[index] ?? "█";
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isRevealed ? revealedClassName : encryptedClassName),
                children: displayChar
            }, index, false, {
                fileName: "[project]/src/components/ui/encrypted-text.tsx",
                lineNumber: 159,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/encrypted-text.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EncryptedText, "KrnJJLdAan5qLY9B59jXeJpqYBg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = EncryptedText;
var _c;
__turbopack_context__.k.register(_c, "EncryptedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$encrypted$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/encrypted-text.tsx [app-client] (ecmascript)");
"use client";
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -inset-8 rounded-3xl blur-3xl opacity-50 pointer-events-none",
                style: {
                    background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.25) 30%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl",
                style: {
                    transform: "translateY(8px) translateX(4px)",
                    background: "rgba(0, 0, 0, 0.5)",
                    filter: "blur(12px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl",
                style: {
                    transform: "translateY(4px) translateX(2px)",
                    background: "rgba(79, 70, 229, 0.15)",
                    filter: "blur(8px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-center justify-center gap-4 px-14 py-12 rounded-2xl backdrop-blur-md",
                style: {
                    background: "linear-gradient(145deg, rgba(25, 20, 40, 0.95) 0%, rgba(15, 12, 25, 0.98) 50%, rgba(10, 8, 18, 0.99) 100%)",
                    boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.6),
            0 12px 24px -8px rgba(0, 0, 0, 0.4),
            0 0 60px rgba(139, 92, 246, 0.15),
            0 0 30px rgba(168, 85, 247, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3),
            inset 1px 0 0 rgba(255, 255, 255, 0.03),
            inset -1px 0 0 rgba(0, 0, 0, 0.2)
          `,
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                    borderTop: "1px solid rgba(168, 85, 247, 0.3)",
                    borderBottom: "1px solid rgba(79, 70, 229, 0.15)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-[1px] rounded-2xl pointer-events-none",
                        style: {
                            background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.1) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-purple-400/50 rounded-tl-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-purple-400/50 rounded-tr-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-purple-400/50 rounded-bl-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-purple-400/50 rounded-br-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-5 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full",
                                style: {
                                    background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%)",
                                    boxShadow: "0 0 6px rgba(255, 107, 107, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full",
                                style: {
                                    background: "linear-gradient(135deg, #ffd93d 0%, #f0c929 100%)",
                                    boxShadow: "0 0 6px rgba(255, 217, 61, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full",
                                style: {
                                    background: "linear-gradient(135deg, #6bcf6b 0%, #5ac05a 100%)",
                                    boxShadow: "0 0 6px rgba(107, 207, 107, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "relative text-5xl font-bold tracking-tight mt-5",
                        style: {
                            fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace",
                            textShadow: "0 0 40px rgba(168, 85, 247, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-400/70 mr-2",
                                children: ">"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$encrypted$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedText"], {
                                text: "CodeAtlas",
                                encryptedClassName: "text-purple-400/50",
                                revealedClassName: "text-white",
                                revealDelayMs: 60
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block w-3 h-8 ml-1 animate-pulse rounded-sm",
                                style: {
                                    background: "linear-gradient(180deg, rgba(168, 85, 247, 0.9) 0%, rgba(139, 92, 246, 0.7) 100%)",
                                    boxShadow: "0 0 15px rgba(168, 85, 247, 0.6)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "relative text-base text-center max-w-md tracking-wide",
                        style: {
                            fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace",
                            textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 mr-2",
                                children: "//"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$encrypted$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedText"], {
                                text: "AI-Powered Code Visualization",
                                encryptedClassName: "text-gray-600",
                                revealedClassName: "text-gray-400",
                                revealDelayMs: 35
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function SearchBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-start justify-center w-full max-w-xl mt-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -inset-4 rounded-3xl blur-2xl opacity-40 pointer-events-none",
                style: {
                    background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4) 0%, rgba(99, 102, 241, 0.25) 40%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SearchBar.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl",
                style: {
                    transform: "translateY(6px) translateX(3px)",
                    background: "rgba(0, 0, 0, 0.4)",
                    filter: "blur(10px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SearchBar.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl",
                style: {
                    transform: "translateY(3px) translateX(1px)",
                    background: "rgba(79, 70, 229, 0.1)",
                    filter: "blur(6px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SearchBar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full rounded-2xl",
                style: {
                    background: "linear-gradient(145deg, rgba(25, 20, 40, 0.95) 0%, rgba(15, 12, 25, 0.98) 50%, rgba(10, 8, 18, 0.99) 100%)",
                    boxShadow: `
            0 20px 40px -10px rgba(0, 0, 0, 0.5),
            0 10px 20px -6px rgba(0, 0, 0, 0.35),
            0 0 40px rgba(139, 92, 246, 0.1),
            0 0 20px rgba(168, 85, 247, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -1px 0 rgba(0, 0, 0, 0.25),
            inset 1px 0 0 rgba(255, 255, 255, 0.03),
            inset -1px 0 0 rgba(0, 0, 0, 0.15)
          `,
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                    borderTop: "1px solid rgba(168, 85, 247, 0.25)",
                    borderBottom: "1px solid rgba(79, 70, 229, 0.12)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-[1px] rounded-2xl pointer-events-none",
                        style: {
                            background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.08) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchBar.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: "Enter a github link...",
                        rows: 1,
                        className: "relative w-full px-6 py-5 text-sm text-white placeholder-gray-500 bg-transparent rounded-2xl outline-none transition-all duration-200 focus:placeholder-gray-400 resize-none overflow-hidden",
                        style: {
                            minHeight: "56px",
                            maxHeight: "200px",
                            height: "56px",
                            lineHeight: "20px",
                            fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', 'Monaco', monospace",
                            textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                            boxSizing: "border-box"
                        },
                        onInput: (e)=>{
                            const target = e.target;
                            // If empty, reset to default size
                            if (target.value === "") {
                                target.style.height = "56px";
                                target.style.overflowY = "hidden";
                                return;
                            }
                            // Set height to auto to collapse it completely
                            target.style.height = "auto";
                            // Calculate new height based on content
                            const newHeight = Math.min(Math.max(56, target.scrollHeight), 200 // Max height
                            );
                            target.style.height = newHeight + "px";
                            // Enable scrolling only when max height is reached
                            if (newHeight >= 200) {
                                target.style.overflowY = "auto";
                            } else {
                                target.style.overflowY = "hidden";
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchBar.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer",
                        style: {
                            background: "linear-gradient(145deg, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.25) 50%, rgba(99, 102, 241, 0.2) 100%)",
                            boxShadow: `
              0 4px 12px rgba(139, 92, 246, 0.25),
              0 2px 4px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2)
            `,
                            border: "1px solid rgba(168, 85, 247, 0.3)",
                            borderTop: "1px solid rgba(168, 85, 247, 0.4)",
                            borderBottom: "1px solid rgba(79, 70, 229, 0.2)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors duration-300",
                            style: {
                                filter: "drop-shadow(0 0 4px rgba(168, 85, 247, 0.5))"
                            },
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M14 5l7 7m0 0l-7 7m7-7H3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchBar.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchBar.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchBar.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchBar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchBar.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NetworkBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NetworkBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function NetworkBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const connectionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1000,
        y: -1000
    });
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dprRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const rotationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.3,
        y: 0
    });
    const globeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        centerX: 0,
        centerY: 0,
        radius: 0
    });
    // Check if a point is on a "landmass"
    const isLandmass = (theta, phi)=>{
        const t = (theta % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
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
    const initGlobe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NetworkBackground.useCallback[initGlobe]": (width, height)=>{
            const nodes = [];
            const connections = [];
            const particles = [];
            const globeRadius = Math.min(width, height) * 0.36;
            const centerX = width / 2;
            const centerY = height / 2;
            globeRef.current = {
                centerX,
                centerY,
                radius: globeRadius
            };
            // === BASE GLOBE LAYER (complete sphere) ===
            const goldenRatio = (1 + Math.sqrt(5)) / 2;
            const baseNodeCount = 400; // More nodes for complete coverage
            for(let i = 0; i < baseNodeCount; i++){
                const theta = 2 * Math.PI * i / goldenRatio;
                const phi = Math.acos(1 - 2 * (i + 0.5) / baseNodeCount);
                // All base nodes are visible - this forms the solid sphere
                nodes.push({
                    theta,
                    phi,
                    baseRadius: globeRadius,
                    heightOffset: 0,
                    x: 0,
                    y: 0,
                    z: 0,
                    visible: true,
                    size: 1.5,
                    pulsePhase: i * 0.05,
                    brightness: 0.6 + Math.random() * 0.15,
                    isLand: false
                });
            }
            // === ELEVATED LAND LAYER (3D continents on top) ===
            const landNodeCount = 300;
            const landHeight = 15; // Elevation above base
            for(let i = 0; i < landNodeCount; i++){
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
                        x: 0,
                        y: 0,
                        z: 0,
                        visible: true,
                        size: 2 + mountainNoise * 1,
                        pulsePhase: i * 0.04,
                        brightness: 0.85 + mountainNoise * 0.15,
                        isLand: true
                    });
                }
            }
            // Create connections - separate for base and land
            const baseNodes = nodes.filter({
                "NetworkBackground.useCallback[initGlobe].baseNodes": (n)=>!n.isLand
            }["NetworkBackground.useCallback[initGlobe].baseNodes"]);
            const landNodes = nodes.filter({
                "NetworkBackground.useCallback[initGlobe].landNodes": (n)=>n.isLand
            }["NetworkBackground.useCallback[initGlobe].landNodes"]);
            // Base sphere mesh connections (denser for solid look)
            for(let i = 0; i < baseNodes.length; i++){
                const nodeA = baseNodes[i];
                const nodeAIdx = nodes.indexOf(nodeA);
                const distances = [];
                for(let j = 0; j < baseNodes.length; j++){
                    if (i === j) continue;
                    const nodeB = baseNodes[j];
                    const nodeBIdx = nodes.indexOf(nodeB);
                    const dx = Math.sin(nodeA.phi) * Math.cos(nodeA.theta) - Math.sin(nodeB.phi) * Math.cos(nodeB.theta);
                    const dy = Math.cos(nodeA.phi) - Math.cos(nodeB.phi);
                    const dz = Math.sin(nodeA.phi) * Math.sin(nodeA.theta) - Math.sin(nodeB.phi) * Math.sin(nodeB.theta);
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    distances.push({
                        idx: nodeBIdx,
                        dist
                    });
                }
                distances.sort({
                    "NetworkBackground.useCallback[initGlobe]": (a, b)=>a.dist - b.dist
                }["NetworkBackground.useCallback[initGlobe]"]);
                // More connections for solid look
                for(let k = 0; k < Math.min(5, distances.length); k++){
                    const exists = connections.some({
                        "NetworkBackground.useCallback[initGlobe].exists": (c)=>c.from === nodeAIdx && c.to === distances[k].idx || c.from === distances[k].idx && c.to === nodeAIdx
                    }["NetworkBackground.useCallback[initGlobe].exists"]);
                    if (!exists) {
                        connections.push({
                            from: nodeAIdx,
                            to: distances[k].idx
                        });
                    }
                }
            }
            // Land mesh connections (even denser)
            for(let i = 0; i < landNodes.length; i++){
                const nodeA = landNodes[i];
                const nodeAIdx = nodes.indexOf(nodeA);
                const distances = [];
                for(let j = 0; j < landNodes.length; j++){
                    if (i === j) continue;
                    const nodeB = landNodes[j];
                    const nodeBIdx = nodes.indexOf(nodeB);
                    const dx = Math.sin(nodeA.phi) * Math.cos(nodeA.theta) - Math.sin(nodeB.phi) * Math.cos(nodeB.theta);
                    const dy = Math.cos(nodeA.phi) - Math.cos(nodeB.phi);
                    const dz = Math.sin(nodeA.phi) * Math.sin(nodeA.theta) - Math.sin(nodeB.phi) * Math.sin(nodeB.theta);
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    distances.push({
                        idx: nodeBIdx,
                        dist
                    });
                }
                distances.sort({
                    "NetworkBackground.useCallback[initGlobe]": (a, b)=>a.dist - b.dist
                }["NetworkBackground.useCallback[initGlobe]"]);
                for(let k = 0; k < Math.min(6, distances.length); k++){
                    const exists = connections.some({
                        "NetworkBackground.useCallback[initGlobe].exists": (c)=>c.from === nodeAIdx && c.to === distances[k].idx || c.from === distances[k].idx && c.to === nodeAIdx
                    }["NetworkBackground.useCallback[initGlobe].exists"]);
                    if (!exists) {
                        connections.push({
                            from: nodeAIdx,
                            to: distances[k].idx
                        });
                    }
                }
            }
            // === FLOATING PARTICLES with MORE connections ===
            const allParticles = [];
            // Inner orbit ring
            for(let i = 0; i < 36; i++){
                const angle = i / 36 * Math.PI * 2;
                const orbitRadius = globeRadius * (1.12 + i % 3 * 0.06);
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
                    neighbors: []
                });
            }
            // Mid orbit
            for(let i = 0; i < 48; i++){
                const angle = i / 48 * Math.PI * 2 + 0.05;
                const orbitRadius = globeRadius * (1.45 + i % 4 * 0.1);
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
                    neighbors: []
                });
            }
            // Outer scattered
            for(let i = 0; i < 60; i++){
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
                    neighbors: []
                });
            }
            // Corner particles
            const corners = [
                {
                    x: width * 0.06,
                    y: height * 0.06
                },
                {
                    x: width * 0.94,
                    y: height * 0.06
                },
                {
                    x: width * 0.06,
                    y: height * 0.94
                },
                {
                    x: width * 0.94,
                    y: height * 0.94
                },
                {
                    x: width * 0.5,
                    y: height * 0.03
                },
                {
                    x: width * 0.5,
                    y: height * 0.97
                },
                {
                    x: width * 0.03,
                    y: height * 0.5
                },
                {
                    x: width * 0.97,
                    y: height * 0.5
                }
            ];
            for (const corner of corners){
                for(let i = 0; i < 6; i++){
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
                        neighbors: []
                    });
                }
            }
            // Pre-compute particle neighbors - MORE connections
            for(let i = 0; i < allParticles.length; i++){
                const p = allParticles[i];
                const distances = [];
                for(let j = 0; j < allParticles.length; j++){
                    if (i === j) continue;
                    const other = allParticles[j];
                    const px = p.orbitRadius > 0 ? centerX + Math.cos(p.orbitAngle) * p.orbitRadius : p.baseX;
                    const py = p.orbitRadius > 0 ? centerY + Math.sin(p.orbitAngle) * p.orbitRadius * 0.7 : p.baseY;
                    const ox = other.orbitRadius > 0 ? centerX + Math.cos(other.orbitAngle) * other.orbitRadius : other.baseX;
                    const oy = other.orbitRadius > 0 ? centerY + Math.sin(other.orbitAngle) * other.orbitRadius * 0.7 : other.baseY;
                    const dist = Math.sqrt((px - ox) ** 2 + (py - oy) ** 2);
                    distances.push({
                        idx: j,
                        dist
                    });
                }
                distances.sort({
                    "NetworkBackground.useCallback[initGlobe]": (a, b)=>a.dist - b.dist
                }["NetworkBackground.useCallback[initGlobe]"]);
                // Connect to 4-7 nearest neighbors (more connections)
                const connectCount = 4 + Math.floor(Math.random() * 4);
                for(let k = 0; k < Math.min(connectCount, distances.length); k++){
                    if (distances[k].dist < 300) {
                        p.neighbors.push(distances[k].idx);
                    }
                }
            }
            connectionsRef.current = connections;
            particlesRef.current = allParticles;
            return nodes;
        }
    }["NetworkBackground.useCallback[initGlobe]"], []);
    const projectNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NetworkBackground.useCallback[projectNode]": (node, rotX, rotY)=>{
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
        }
    }["NetworkBackground.useCallback[projectNode]"], []);
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NetworkBackground.useCallback[draw]": (ctx, width, height)=>{
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
                {
                    x: width * 0.1,
                    y: height * 0.15,
                    size: width * 0.5,
                    intensity: 0.08
                },
                {
                    x: width * 0.85,
                    y: height * 0.2,
                    size: width * 0.45,
                    intensity: 0.07
                },
                {
                    x: width * 0.15,
                    y: height * 0.85,
                    size: width * 0.4,
                    intensity: 0.06
                },
                {
                    x: width * 0.9,
                    y: height * 0.8,
                    size: width * 0.5,
                    intensity: 0.07
                }
            ];
            for(let i = 0; i < glowPoints.length; i++){
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
            const sphereGradient = ctx.createRadialGradient(centerX - radius * 0.2, centerY - radius * 0.2, 0, centerX, centerY, radius);
            sphereGradient.addColorStop(0, "rgba(79, 70, 229, 0.12)");
            sphereGradient.addColorStop(0.5, "rgba(67, 56, 202, 0.08)");
            sphereGradient.addColorStop(0.85, "rgba(55, 48, 163, 0.05)");
            sphereGradient.addColorStop(1, "rgba(49, 46, 129, 0.02)");
            ctx.fillStyle = sphereGradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fill();
            // Edge glow for sphere definition
            const edgeGlow = ctx.createRadialGradient(centerX, centerY, radius * 0.85, centerX, centerY, radius * 1.05);
            edgeGlow.addColorStop(0, "rgba(99, 102, 241, 0)");
            edgeGlow.addColorStop(0.5, "rgba(99, 102, 241, 0.15)");
            edgeGlow.addColorStop(1, "rgba(99, 102, 241, 0)");
            ctx.fillStyle = edgeGlow;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2);
            ctx.fill();
            // === UPDATE PARTICLES ===
            for (const particle of particles){
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
            for(let i = 0; i < particles.length; i++){
                const p = particles[i];
                for (const neighborIdx of p.neighbors){
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
            for (const particle of particles){
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
            for (const node of nodes){
                projectNode(node, rotation.x, rotation.y);
            }
            // Sort connections by depth
            const sortedConnections = [
                ...connections
            ].sort({
                "NetworkBackground.useCallback[draw].sortedConnections": (a, b)=>{
                    const aZ = (nodes[a.from].z + nodes[a.to].z) / 2;
                    const bZ = (nodes[b.from].z + nodes[b.to].z) / 2;
                    return aZ - bZ;
                }
            }["NetworkBackground.useCallback[draw].sortedConnections"]);
            // === DRAW GLOBE CONNECTIONS ===
            for (const conn of sortedConnections){
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
            const sortedIndices = nodes.map({
                "NetworkBackground.useCallback[draw].sortedIndices": (_, i)=>i
            }["NetworkBackground.useCallback[draw].sortedIndices"]).sort({
                "NetworkBackground.useCallback[draw].sortedIndices": (a, b)=>nodes[a].z - nodes[b].z
            }["NetworkBackground.useCallback[draw].sortedIndices"]);
            // === DRAW GLOBE NODES ===
            for (const idx of sortedIndices){
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
        }
    }["NetworkBackground.useCallback[draw]"], [
        projectNode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NetworkBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const resize = {
                "NetworkBackground.useEffect.resize": ()=>{
                    const dpr = window.devicePixelRatio || 1;
                    dprRef.current = dpr;
                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    canvas.width = width * dpr;
                    canvas.height = height * dpr;
                    canvas.style.width = `${width}px`;
                    canvas.style.height = `${height}px`;
                    nodesRef.current = initGlobe(width, height);
                }
            }["NetworkBackground.useEffect.resize"];
            const handleMouseMove = {
                "NetworkBackground.useEffect.handleMouseMove": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["NetworkBackground.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "NetworkBackground.useEffect.handleMouseLeave": ()=>{
                    mouseRef.current = {
                        x: -1000,
                        y: -1000
                    };
                }
            }["NetworkBackground.useEffect.handleMouseLeave"];
            resize();
            window.addEventListener("resize", resize);
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseleave", handleMouseLeave);
            const animate = {
                "NetworkBackground.useEffect.animate": ()=>{
                    timeRef.current += 16;
                    draw(ctx, window.innerWidth, window.innerHeight);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["NetworkBackground.useEffect.animate"];
            animate();
            return ({
                "NetworkBackground.useEffect": ()=>{
                    window.removeEventListener("resize", resize);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseleave", handleMouseLeave);
                    cancelAnimationFrame(animationRef.current);
                }
            })["NetworkBackground.useEffect"];
        }
    }["NetworkBackground.useEffect"], [
        initGlobe,
        draw
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    background: "radial-gradient(ellipse at 50% 50%, rgba(18, 12, 30, 1) 0%, rgba(10, 7, 18, 1) 40%, rgba(5, 3, 10, 1) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/NetworkBackground.tsx",
                lineNumber: 705,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/NetworkBackground.tsx",
                lineNumber: 717,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(NetworkBackground, "EuITOYahHHZ+UyV7GkQCeb7KLgA=");
_c = NetworkBackground;
var _c;
__turbopack_context__.k.register(_c, "NetworkBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_86143a48._.js.map