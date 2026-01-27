import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import NetworkBackground from "../components/NetworkBackground";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center font-sans overflow-hidden">
      <NetworkBackground />
      <main className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <Header />
          <SearchBar />
        </div>
      </main>
    </div>
  );
}
