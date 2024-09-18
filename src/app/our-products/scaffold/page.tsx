import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import model70 from "../../../../public/images/70.png";
import model80 from "../../../../public/images/80.png";
import model85 from "../../../../public/images/85.png";
import modelD85 from "../../../../public/images/D85.png";
import modelB85 from "../../../../public/images/B85.png";

const page = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          سقالات من الالومنيوم{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-5 ">
          <Link href="/our-products/scaffold/model-70">
            <div className="w-full md:w-[360px] bg-[#d1d1d9] h-[350px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[270px]">
                <Image
                  className="w-full h-[270px]"
                  src={model70}
                  alt="model70"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-medium text-[18px] mb-2">
                  سقالة الومنيوم قابلة للارتفاع والانخفاض{" "}
                </div>
              </div>
            </div>
          </Link>
          {/* ============================= */}
          <Link href="/our-products/scaffold/model-80">
            <div className="w-full md:w-[360px] bg-[#d1d1d9] h-[350px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[270px]">
                <Image
                  className="w-full h-[270px]"
                  src={model80}
                  alt="model40"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-medium text-[18px] mb-2">
                  سقالة الومنيوم للاستخدام الداخلي{" "}
                </div>
              </div>
            </div>
          </Link>
          {/* ============================= */}
          <Link href="/our-products/scaffold/model-85">
            <div className="w-full md:w-[360px] bg-[#d1d1d9] h-[350px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[270px]">
                <Image
                  className="w-full h-[270px]"
                  src={model85}
                  alt="model85"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-medium text-[18px] mb-2">
                  سقالة الومنيوم للاستخدام الداخلي{" "}
                </div>
              </div>
            </div>
          </Link>
          {/* ============================= */}
          <Link href="/our-products/scaffold/model-D85">
            <div className="w-full md:w-[360px] bg-[#d1d1d9] h-[350px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[270px]">
                <Image
                  className="w-full h-[270px]"
                  src={modelD85}
                  alt="modelD85"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-medium text-[18px] mb-2">
                  سقالة الومنيوم بسلالم داخلية ودرابزين{" "}
                </div>
              </div>
            </div>
          </Link>
          {/* ============================= */}
          <Link href="/our-products/scaffold/model-B85">
            <div className="w-full md:w-[360px] bg-[#d1d1d9] h-[350px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[270px]">
                <Image
                  className="w-full h-[270px]"
                  src={modelB85}
                  alt="model40"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-medium text-[18px] mb-2">
                  سقالة الومنيوم مواسير ذات الدعامات الخطافية{" "}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default page;
