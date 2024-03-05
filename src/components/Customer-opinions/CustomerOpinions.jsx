"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "./customer.module.css";
import Image from "next/image";
import pic1 from "../../../public/images/1.jpg"

const CustomerOpinions = () => {
  return (
    <div>
      <h1 className="text-[18px] md:text-2xl text-center font-medium mb-5">آراء عملائنا</h1>
      <div>
        <Splide>
          <SplideSlide className={styles.item1}>
            <div className="w-[70px] h-[70px] rounded-full bg-gray-300 text-center py-[20px] text-[14px] m-auto mt-3 mb-2">
              <Image src={pic1} alt="pic" className="w-full" />
            </div>
            
            <h2 className="text-center ">حسام الدين احمد </h2>
            <h3 className="text-center py-2 ">مطور واجهة امامية برمجية </h3>
            <h3 className="text-center ">من افضل الشركات تعامل ويوجد بها افضل جودة وافضل خدمة عملاء</h3>
          </SplideSlide>
          <SplideSlide className={styles.item2}>
            <div className="w-[70px] h-[70px] rounded-full bg-gray-300 text-center py-[20px] text-[14px] m-auto mt-3 mb-2">
              <Image src={pic1} alt="pic" className="w-full" />
            </div>
            <h2 className="text-center ">حسام الدين احمد </h2>
            <h3 className="text-center py-2 ">مطور واجهة امامية برمجية </h3>
            <h3 className="text-center ">من افضل الشركات تعامل ويوجد بها افضل جودة وافضل خدمة عملاء</h3>
          </SplideSlide>
          <SplideSlide className={styles.item3}>
            <div className="w-[70px] h-[70px] rounded-full bg-gray-300 text-center py-[20px] text-[14px] m-auto mt-3 mb-2">
              <Image src={pic1} alt="pic" className="w-full" />
            </div>
            <h2 className="text-center ">حسام الدين احمد </h2>
            <h3 className="text-center py-2 ">مطور واجهة امامية برمجية </h3>
            <h3 className="text-center ">من افضل الشركات تعامل ويوجد بها افضل جودة وافضل خدمة عملاء</h3>
          </SplideSlide>
          <SplideSlide className={styles.item4}>
            <div className="w-[70px] h-[70px] rounded-full bg-gray-300 text-center py-[20px] text-[14px] m-auto mt-3 mb-2">
              <Image src={pic1} alt="pic" className="w-full" />
            </div>
            <h2 className="text-center ">حسام الدين احمد </h2>
            <h3 className="text-center py-2 ">مطور واجهة امامية برمجية </h3>
            <h3 className="text-center ">من افضل الشركات تعامل ويوجد بها افضل جودة وافضل خدمة عملاء</h3>
          </SplideSlide>
          <SplideSlide className={styles.item5}>
            <div className="w-[70px] h-[70px] rounded-full bg-gray-300 text-center py-[20px] text-[14px] m-auto mt-3 mb-2">
              <Image src={pic1} alt="pic" className="w-full" />
            </div>
            <h2 className="text-center ">حسام الدين احمد </h2>
            <h3 className="text-center py-2 ">مطور واجهة امامية برمجية </h3>
            <h3 className="text-center ">من افضل الشركات تعامل ويوجد بها افضل جودة وافضل خدمة عملاء</h3>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default CustomerOpinions;
