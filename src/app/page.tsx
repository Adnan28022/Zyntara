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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A08] text-[#F5F7F2] selection:bg-[#B7FF2B] selection:text-black">
      {/* 01. Sticky Responsive Navbar */}
      <Navbar />

      {/* 02. Cinematic Kinetic Hero */}
      <Hero />

      {/* 03. Performance Metrics Bar */}
      <Stats />

      {/* 04. Training Programs (Disciplines) */}
      <Programs />

      {/* 05. Why Choose ZYNTARA (Interactive Cockpit) */}
      <WhyUs />

      {/* 06. Expert Trainers (Kinetic Expandable Roster) */}
      <Trainers />

      {/* 07. Memberships (Olympic Barbell & Plate Loading Scroll) */}
      <Memberships />

      {/* 08. Athlete Transformation Vault (Before/After Telemetry) */}
      <Testimonials />

      {/* 09. 3-Day VIP Black Card Booking Terminal (Auto-Download PNG) */}
      <Booking />

      {/* 10. System Intelligence FAQ (Upper Half-Circle Dome Radar) */}
      <FAQ />

      {/* 11. Final CTA & Ultra-Luxury Footer */}
      <Footer />
    </main>
  );
}