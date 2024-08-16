import Container from "@/components/Container";
import Image from "next/image";
import modelK74 from "../../../../../public/images/K47.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          سلم الومنيوم ثلاث وصلات قابل للتحويل
        </h1>
        <Image src={modelK74} alt="plt" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>سلم مزدوج وسلم مفرد في ان واحد</li>
            <li>سلم مزدوج تنزلق عليه الوصلة الثالثة</li>
            <li>سلم مفرد مكون من ثلاث وصلات</li>
            <li>قابل للارتفاع والانخفاض</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">عدد الدرج</th>
                  <th className="border-2 border-black p-2">فردي</th>
                  <th className="border-2 border-black p-2">مزدوج ممتد</th>
                  <th className="border-2 border-black p-2">مزدوج</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x6</td>
                  <td className="border-2 border-black p-2">4.15</td>
                  <td className="border-2 border-black p-2">3.05</td>
                  <td className="border-2 border-black p-2">1.95</td>
                  <td className="border-2 border-black p-2">K43-06</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x7</td>
                  <td className="border-2 border-black p-2">5.00</td>
                  <td className="border-2 border-black p-2">3.60</td>
                  <td className="border-2 border-black p-2">2.20</td>
                  <td className="border-2 border-black p-2">K43-07</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x8</td>
                  <td className="border-2 border-black p-2">5.85</td>
                  <td className="border-2 border-black p-2">4.15</td>
                  <td className="border-2 border-black p-2">2.50</td>
                  <td className="border-2 border-black p-2">K43-08</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x9</td>
                  <td className="border-2 border-black p-2">6.70</td>
                  <td className="border-2 border-black p-2">4.75</td>
                  <td className="border-2 border-black p-2">2.75</td>
                  <td className="border-2 border-black p-2">K43-09</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x10</td>
                  <td className="border-2 border-black p-2">7.55</td>
                  <td className="border-2 border-black p-2">5.15</td>
                  <td className="border-2 border-black p-2">3.05</td>
                  <td className="border-2 border-black p-2">K43-10</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x12</td>
                  <td className="border-2 border-black p-2">8.65</td>
                  <td className="border-2 border-black p-2">6.16</td>
                  <td className="border-2 border-black p-2">3.60</td>
                  <td className="border-2 border-black p-2">K43-12</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x14</td>
                  <td className="border-2 border-black p-2">10.30</td>
                  <td className="border-2 border-black p-2">7.25</td>
                  <td className="border-2 border-black p-2">4.15</td>
                  <td className="border-2 border-black p-2">K43-14</td>
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
