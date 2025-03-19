import HeroSection from "../../components/hero";
import Navbar from "../../components/navbar";
import ServicesSection from "../../components/services";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
    </main>
  );
}
