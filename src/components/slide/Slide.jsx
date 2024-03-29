"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./slide.module.css";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import slide01 from "../../../public/images/311571751_104132715819610_3555219688868392360_n.jpg";

const Slide = () => {

  return (
    <div className="pt-[100px]" dir="rtl">
      <Splide>
        <SplideSlide className={styles.firPic}>
        <Image src={slide01} alt="About Us"  />
        </SplideSlide>
        <SplideSlide className={styles.secPic}>
        <Image src={slide01} alt="About Us"  />
        </SplideSlide>
        <SplideSlide className={styles.therPic}>
        <Image src={slide01} alt="About Us"  />
        </SplideSlide>
        <SplideSlide className={styles.fourPic}>
        <Image src={slide01} alt="About Us"  />
        </SplideSlide>
        <SplideSlide className={styles.fivPic}>
        <Image src={slide01} alt="About Us"  />
        </SplideSlide>
      </Splide>
    </div>
  
  );
};

export default Slide;
