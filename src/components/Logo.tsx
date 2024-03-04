"use client"
import Image from "next/image";;
import { useRouter } from "next/navigation";
const Logo = () => {
    const router = useRouter();
   
         return <Image src="/images/Logo.jpg" alt="logo" className=" cursor-pointer" height="80" width="80" onClick={() => router.push("/")} />;

}
 
export default Logo;