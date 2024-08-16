import Container from "@/components/Container";
import Image from "next/image";
import modelB85 from "../../../../../public/images/B85.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          {" "}
          سلالم الومنيوم ابراح{" "}
        </h1>
        <Image src={modelB85} alt="modelB85" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>مصنوعه من سبيكة الومنيوم خاصة للاستخدام الصناعي الشاق</li>
            <li>منصة وقوف عريضة غير قابلة للانزلاق</li>
            <li>مجهزة بـ 4 عجلات فرامل محورية لسهولة الحركة </li>
            <li>مجهزة بدرابزين لزيادة الامان</li>
            <li>سهولة الصعود والهبوط مع درج مانع للانزلاق</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">R </th>
                  <th className="border-2 border-black p-2">H </th>
                  <th className="border-2 border-black p-2">D</th>
                  <th className="border-2 border-black p-2">C </th>
                  <th className="border-2 border-black p-2">B</th>
                  <th className="border-2 border-black p-2">A</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">1.10</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">1.00</td>
                  <td className="border-2 border-black p-2">TW-3.00</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">1.25</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">1.25</td>
                  <td className="border-2 border-black p-2">TW-3.25</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">1.40</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">1.50</td>
                  <td className="border-2 border-black p-2">TW-3.75</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">1.70</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">2.00</td>
                  <td className="border-2 border-black p-2">TW-4.00</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2.00</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">2.50</td>
                  <td className="border-2 border-black p-2">TW-4.50</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2.20</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">3.00</td>
                  <td className="border-2 border-black p-2">TW-5.00</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2.75</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">0.60</td>
                  <td className="border-2 border-black p-2">4.00</td>
                  <td className="border-2 border-black p-2">TW-6.00</td>
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
