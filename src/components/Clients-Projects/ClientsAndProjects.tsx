"use client";
import { useState } from "react";
import Image from "next/image";
import mat01 from "../../../public/images/material01.png";
import mat02 from "../../../public/images/material02.png";
import mat03 from "../../../public/images/material03.png";
import mat04 from "../../../public/images/material04.png";
import mat05 from "../../../public/images/material05.png";
import mat06 from "../../../public/images/material06.png";

const ClientsAndProjects = () => {
  const images = [mat01, mat02, mat03, mat04, mat05, mat06];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="my-10 px-4">
      <h1 className="text-[18px] md:text-2xl text-center font-medium mb-5">
        شهاداتنا
      </h1>
      <div className="relative w-full max-w-4xl mx-auto">
        {/* عرض الصورة الحالية */}
        <div className="flex justify-center items-center h-[500px]">
          <Image
            src={images[currentIndex]}
            alt={`Material ${currentIndex + 1}`}
            className="w-full h-[500px]"
          />
        </div>

        {/* أزرار التنقل */}
        <button
          onClick={handleNext}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8250;
        </button>
        <button
          onClick={handlePrev}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8249;
        </button>
      </div>

    </div>
  );
};

export default ClientsAndProjects;
