import Container from "@/components/Container";
import Image from "next/image";
import modelK74 from "../../../../../public/images/K47.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          سلم الومنيوم ثلاث وصلات
        </h1>
        <Image src={modelK74} alt="plt" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>سلم مزدوج تنزلق عليه الوصلة الثالثة</li>
            <li>قابل للارتفاع والانخفاض</li>
            <li>السلم مزود بترابزين وطوق</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">عدد الدرج</th>
                  <th className="border-2 border-black p-2">ارتفاع التشغيل بالعامل</th>
                  <th className="border-2 border-black p-2">مزدوج ممتد</th>
                  <th className="border-2 border-black p-2">مزدوج</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x12</td>
                  <td className="border-2 border-black p-2">6.25</td>
                  <td className="border-2 border-black p-2">6.15</td>
                  <td className="border-2 border-black p-2">3.60</td>
                  <td className="border-2 border-black p-2">N43-12</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x14</td>
                  <td className="border-2 border-black p-2">8.35</td>
                  <td className="border-2 border-black p-2">7.25</td>
                  <td className="border-2 border-black p-2">4.15</td>
                  <td className="border-2 border-black p-2">N43-14</td>
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
