import AboutMain from "@/components/about-main/AboutMain";
import OurCertificates from "@/components/our-certificates/OurCertificates";
import Professional from "@/components/professional/Professional";
import Slide from "@/components/slide/Slide";

export default function Home() {
  return (
    <main>
      <Slide />
      <AboutMain />
      <Professional />
      <OurCertificates />
    </main>
  );
}
