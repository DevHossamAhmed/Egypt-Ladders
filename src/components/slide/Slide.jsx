"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./slide.module.css";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import slide01 from "../../../public/images/slider01.png";
import slide02 from "../../../public/images/slider02.png";

import slide05 from "../../../public/images/home-about.jpg";

const Slide = () => {
  return (
    <div className="pt-[100px]" dir="rtl">
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 3000,
          direction: 'rtl',
          pagination: false,
          arrows: true,
        }}
      >
        <SplideSlide className={styles.firPic}>
          <Image src={slide01} alt="Image 1" className={styles.imgeSlide}/>
        </SplideSlide>
        <SplideSlide className={styles.secPic}>
          <Image src={slide02} alt="Image 2" className={styles.imgeSlide}/>
        </SplideSlide>
        <SplideSlide className={styles.fivPic}>
          <Image src={slide05} alt="Image 5" className={styles.imgeSlide}/>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slide;
