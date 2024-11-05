import Card from "@/components/Card";
import Card2 from "@/components/Card2";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";

export default function Home() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <Category />
      <Card />
      <div className="flex">
      <div className="bg-white">
         <Card2  image="/images/Card2-Watch.png" title="Popular Products" description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."></Card2>
      </div>
      <div className="bg-[#F9F9F9]">
        <Card2 image="/images/Card2-Ipad.png" title="Ipad Pro" description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."></Card2>
      </div>
      <div className="bg-[#EAEAEA]">
      <Card2 image="/images/Card2-Galaxy.png" title="Samsung Galaxy" description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."></Card2>
      </div>
      <div className="bg-[#2C2C2C] text-white">
      <Card2 image="/images/Card2-Macbook.png" title="Macbook Pro" description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."></Card2>
      </div>
      </div>
    </div>
    );
}
