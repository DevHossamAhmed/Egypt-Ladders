import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-[40px] left-[40px] z-[1000]">
      <Link href="https://wa.link/535vow" target="_blank">
        <IoLogoWhatsapp className="w-[40px] h-[40px] text-green-600 bg-white rounded-full "/>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
