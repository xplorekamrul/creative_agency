import Footer from "../../components/footer";
import HeroSection from "../../components/hero";
import { Images } from "../../components/images";
import Navbar from "../../components/navbar";
import ServicesSection from "../../components/services";
import BlogGridDemo from "./blogs.tsx/page";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <Images/>
      <BlogGridDemo/>
      <Footer/>
    </main>
  );
}
