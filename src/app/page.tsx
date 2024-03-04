import AboutMain from "@/components/about-main/AboutMain";
import Professional from "@/components/professional/Professional";
import Slide from "@/components/slide/Slide";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slide/>
      <AboutMain/>
      <Professional/>
    </main>
  );
}
