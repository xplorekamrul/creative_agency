import Footer from "../../components/footer";
import HeroSection from "../../components/hero";
import { Portfolio } from "../../components/portfolio";
import Navbar from "../../components/navbar";
import ServicesSection from "../../components/services";
import BlogGridDemo from "./blogs.tsx/page";
import { Teams } from "../../components/Teams";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <Portfolio/>
      <Teams/>
      <BlogGridDemo/>
      <Footer/>
    </main>
  );
}
