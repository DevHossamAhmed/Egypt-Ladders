import Container from "@/components/Container";
import Image from "next/image";
import model49 from "../../../../../public/images/49.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">سلم الومنيوم مفرد درج وقوف عريض       </h1>
        <Image src={model49} alt="plt"  className="m-auto xl:m-0"/>
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>سلم من وصلة واحدة</li>
            <li>درج عريض مانع للانزلاق</li>
            <li>يستخدم علي الحوائط والاعمدة</li>
            <li>اقدام مطاطية مانعه للانزلاق</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">عدد الدرج</th>
                  <th className="border-2 border-black p-2">ارتفاع التشغيل بالعامل</th>
                  <th className="border-2 border-black p-2">الارتفاع</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>

                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">08</td>
                  <td className="border-2 border-black p-2">3.10</td>
                  <td className="border-2 border-black p-2">2.500</td>
                  <td className="border-2 border-black p-2">49-08</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">09</td>
                  <td className="border-2 border-black p-2">3.35</td>
                  <td className="border-2 border-black p-2">2.25</td>
                  <td className="border-2 border-black p-2">49-09</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">10</td>
                  <td className="border-2 border-black p-2">3.60</td>
                  <td className="border-2 border-black p-2">2.50</td>
                  <td className="border-2 border-black p-2">49-10</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">11</td>
                  <td className="border-2 border-black p-2">3.85</td>
                  <td className="border-2 border-black p-2">2.75</td>
                  <td className="border-2 border-black p-2">49-11</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">12</td>
                  <td className="border-2 border-black p-2">4.10</td>
                  <td className="border-2 border-black p-2">3.00</td>
                  <td className="border-2 border-black p-2">49-12</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">13</td>
                  <td className="border-2 border-black p-2">4.35</td>
                  <td className="border-2 border-black p-2">3.25</td>
                  <td className="border-2 border-black p-2">49-13</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">14</td>
                  <td className="border-2 border-black p-2">4.65</td>
                  <td className="border-2 border-black p-2">3.50</td>
                  <td className="border-2 border-black p-2">49-14</td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Plt;
