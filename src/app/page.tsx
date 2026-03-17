import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
