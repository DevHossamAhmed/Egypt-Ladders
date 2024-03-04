"use client";
import Link from "next/link";
import { useState } from "react";

const Links = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      {/* Desktop menu */}
      <div className="hidden lg:block">
        <ul
          className="
                flex
                gap-x-6
                text-[14px]
                md:text-[18px]
                md:font-medium
            "
        >
          <li className="hover:text-bgbtn  text-textColor">
            <Link href="/">الرئيسية</Link>
          </li>
          <li className="hover:text-bgbtn  text-textColor">
            <Link href="/">من نحن</Link>
          </li>
          <li className="hover:text-bgbtn  text-textColor">
            <Link href="/">منتجاتنا </Link>
          </li>
          <li className="hover:text-bgbtn  text-textColor">
            <Link href="/"> اتصل بنا</Link>
          </li>
          <li className="pl-4">
            <button className="bg-bgbtn hover:bg-hoverbtn text-white pl-5 border-[1px] border-bgbtn text-center items-center px-4 h-[30px] rounded-md py-[1px] "> كتالوج</button>
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
    </>
  );
};

export default Links;
