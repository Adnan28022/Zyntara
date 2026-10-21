import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A08] text-[#F5F7F2]">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <WhyUs />
    </main>
  );
}