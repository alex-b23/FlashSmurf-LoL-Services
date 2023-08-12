import Benefits from "@/components/Benefits";
import Community from "@/components/Community";
import Companies from "@/components/Companies";
import ContantUs from "@/components/ContantUs";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import Tutorial from "@/components/Tutorial";

export default function Home() {
  return (
    <main className="bg-[#0f1014]">
      <div className="sm:bg-[url('/header-image.png')] bg-no-repeat bg-cover bg-fixed">
        <div>
          <Navbar />
          <Hero />
        </div>
      </div>
      <Features />
      <Community />
      <Benefits />
      <Tutorial />
      <FAQs />
      <ContantUs />
      <Companies />
      <Footer />
    </main>
  );
}
