import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Product from "@/components/Products/page";
import ProductList from "@/components/Products/ProductList";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import TeamPage from "./team/page";

export const metadata: Metadata = {
  title: "Bolu Jadul Bali | Homemade Old Fashioned Cake",
  description: "Bolu Jadul Bali merupakan toko yang menjual berbagai macam kue tradisional yang memiliki khas citarasa bali, segera kunjungi dan order bersama Bolu Jadul Bali dan abadikan momen kelezatan anda.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <TeamPage/>
      <Pricing/>
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
