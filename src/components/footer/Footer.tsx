import Link from "next/link";
import Container from "../Container";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
  return (
    <div className="w-full mt-10 px-4 py-5 bg-[#e7e4e4] text-black ">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex justify-center text-[18px] lg:justify-start gap-2">
            <Link href="/">من نحن</Link>
            <Link href="/">تواصل معنا </Link>
            <Link href="">سياسة الشركة</Link>
          </div>
          <p className="text-center text-[14px] lg:text-[19px] ">© إيجيبت لادرز جميع الحقوق محفوظة.</p>
          <div className="flex justify-center gap-8 mt-3 lg:mt-0 items-center">
            <Link href="https://www.facebook.com/EgyptLadder">
              <FaFacebook className="text-[20px]"/>
            </Link>
            {/* <Link href="/">
              <IoLogoLinkedin className="text-[20px]"/>
            </Link>
            <Link href="/">
              <FaTwitter className="text-[20px]"/>
            </Link> */}
            <Link href="https://www.instagram.com/egypt.ladders.officail/">
              <AiFillInstagram className="text-[20px]"/>
            </Link>
            <Link href="https://www.youtube.com/@egyptladders5935">
              <IoLogoYoutube className="text-[20px]"/>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
