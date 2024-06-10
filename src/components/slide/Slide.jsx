"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./slide.module.css";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import slide01 from "../../../public/images/311571751_104132715819610_3555219688868392360_n.jpg";
import slide02 from "../../../public/images/311571751_104132715819610_3555219688868392360_n.jpg";
import slide03 from "../../../public/images/407483866_316287071270839_1553674601491804216_n.jpg";
import slide04 from "../../../public/images/419169580_340351588864387_2396803983930841681_n.jpg";
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
        <SplideSlide className={styles.therPic}>
          <Image src={slide03} alt="Image 3" className={styles.imgeSlide}/>
        </SplideSlide>
        <SplideSlide className={styles.fourPic}>
          <Image src={slide04} alt="Image 4" className={styles.imgeSlide}/>
        </SplideSlide>
        <SplideSlide className={styles.fivPic}>
          <Image src={slide05} alt="Image 5" className={styles.imgeSlide}/>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slide;
