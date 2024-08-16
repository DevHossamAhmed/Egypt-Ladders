import Container from "@/components/Container";
import Image from "next/image";
import plt1 from "../../../../../public/images/blt.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">باليت من الالومنيوم</h1>
        <Image src={plt1} alt="plt"  className="m-auto xl:m-0"/>
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>
              مصنوعه من سبيكة الومنيوم خاصة للاستحدام بمصانع الادوية والاغذية
            </li>
            <li>مصممة للعمل مع جميع انواع الرافعات</li>
            <li>حمولة تصل الي 500 كم</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">الارتفاع</th>
                  <th className="border-2 border-black p-2">العرض</th>
                  <th className="border-2 border-black p-2">الطول</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">0.15</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">PLT1</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">0.15</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">1.00</td>
                  <td className="border-2 border-black p-2">PLT2</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">0.15</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">1.20</td>
                  <td className="border-2 border-black p-2">PLT3</td>
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
