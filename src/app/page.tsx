import Card from "@/components/Card";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <Category />
      <Card />
    </div>
    );
}
