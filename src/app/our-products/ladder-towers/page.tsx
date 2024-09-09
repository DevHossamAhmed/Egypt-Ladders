import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import modeltw from "../../../../public/images/tw.png";


const page = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          سلالم الومنيوم ابراج{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
          <Link href="/our-products/ladder-towers/model-TW">
            <div className="w-full md:w-[250px] bg-[#e5e5ee] h-[300px]  rounded mb-5 overflow-hidden shadow-lg border-2">
              <div className="w-full h-[200px]">
                <Image
                  className="w-full h-[200px]"
                  src={modeltw}
                  alt="modeltw"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  سلالم الومنيوم ابراج{" "}
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
