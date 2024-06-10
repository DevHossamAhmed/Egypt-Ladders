"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./customer.module.css";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import slide01 from "../../../public/images/1.jpg";
import slide02 from "../../../public/images/2.jpg";
import slide03 from "../../../public/images/3.jpg";

const CustomerOpinions = () => {
  return (
    <div className="pt-[100px]" dir="rtl">
      <h1 className="text-center pb-6">آراء عملائنا</h1>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 5000, // تغيير الزمن هنا إلى 5000 ميلي ثانية (5 ثواني)
          direction: 'rtl',
          pagination: false,
          arrows: true,
          pauseOnHover: false,
          resetProgress: false,
          speed: 1000, // سرعة التنقل بين الشرائح
        }}
      >
        <SplideSlide className={styles.item1}>
          <Image src={slide01} alt="Image 1" className="w-[70px] h-[70px] rounded-full m-auto my-3"/>
          <h1 className="text-center">حسام الدين احمد</h1>
          <p className="text-center">مهندس برمجيات</p>
          <p className="text-center">من افضل الشركات تعامل وخبره وجودة عالية </p>
        </SplideSlide>
        <SplideSlide className={styles.item2}>
          <Image src={slide02} alt="Image 2" className="w-[70px] h-[70px] rounded-full m-auto my-3"/>
          <h1 className="text-center">احمد علي</h1>
          <p className="text-center">مهندس اشراف لدي شركة ارامكس</p>
          <p className="text-center">من افضل الشركات تعامل وخبره وجودة عالية </p>
        </SplideSlide>
        <SplideSlide className={styles.item3}>
          <Image src={slide03} alt="Image 3" className="w-[70px] h-[70px] rounded-full m-auto my-3"/>
          <h1 className="text-center">السيد محمود الحكيم</h1>
          <p className="text-center">مهندس معماري</p>
          <p className="text-center">من افضل الشركات تعامل وخبره وجودة عالية </p>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default CustomerOpinions;
