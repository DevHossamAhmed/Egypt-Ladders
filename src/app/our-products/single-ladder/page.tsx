import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import model40 from "../../../../public/images/40.png";
import model49 from "../../../../public/images/49.png";
import model41 from "../../../../public/images/41.png";
import model46 from "../../../../public/images/46.png";
import model47 from "../../../../public/images/47.png";

const page = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          سلم الومنيوم مفرد{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-5 ">
          <Link href="/our-products/single-ladder/model-40">
            <div className="w-full md:w-[250px] bg-[#e5e5ee] h-[300px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[200px]">
                <Image
                  className="w-full h-[200px]"
                  src={model40}
                  alt="model40"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  سلم الومنيوم مفرد ذات وصلة واحدة{" "}
                </div>
              </div>
            </div>
          </Link>
          {/* ============================= */}
          <Link href="/our-products/single-ladder/model-49">
            <div className="w-full md:w-[250px] bg-[#e5e5ee] h-[300px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[200px]">
                <Image
                  className="w-full h-[200px]"
                  src={model49}
                  alt="model40"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  سلم الومنيوم مفرد درج وقوف عريض{" "}
                </div>
              </div>
            </div>
          </Link>
          {/* ============================= */}
          <Link href="/our-products/single-ladder/model-41">
            <div className="w-full md:w-[250px] bg-[#e5e5ee] h-[300px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[200px]">
                <Image
                  className="w-full h-[200px]"
                  src={model41}
                  alt="model40"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  سلم الومنيوم منزلق ذات وصلتين{" "}
                </div>
              </div>
            </div>
          </Link>
          {/* ============================= */}
          <Link href="/our-products/single-ladder/model-46">
            <div className="w-full md:w-[250px] bg-[#e5e5ee] h-[300px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[200px]">
                <Image
                  className="w-full h-[200px]"
                  src={model46}
                  alt="model40"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  سلم الومنيوم مفرد بحبل جزئين{" "}
                </div>
              </div>
            </div>
          </Link>
          {/* ============================= */}
          <Link href="/our-products/single-ladder/model-47">
            <div className="w-full md:w-[250px] bg-[#e5e5ee] h-[300px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[200px]">
                <Image
                  className="w-full h-[200px]"
                  src={model47}
                  alt="model40"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  سلم الومنيوم مفرد بحبل ثلاث اجزاء{" "}
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
