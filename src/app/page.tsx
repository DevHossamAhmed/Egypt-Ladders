import ClientsAndProjects from "@/components/Clients-Projects/ClientsAndProjects";
import CustomerOpinions from "@/components/Customer-opinions/CustomerOpinions";
import AboutMain from "@/components/about-main/AboutMain";
import Professional from "@/components/professional/Professional";
import Slide from "@/components/slide/Slide";

export default function Home() {
  return (
    <main>
      <Slide />
      <AboutMain />
      <Professional />
      <ClientsAndProjects />
      <CustomerOpinions/>
      
    </main>
  );
}
