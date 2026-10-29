import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import WhyUs from "@/components/WhyUs";
import Trainers from "@/components/Trainer";
import Memberships from "@/components/Memberships";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A08] text-[#F5F7F2]">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <WhyUs />
      <Trainers />
      <Memberships />
      <Testimonials />
      <Booking />
      <FAQ />
    </main>
  );
}