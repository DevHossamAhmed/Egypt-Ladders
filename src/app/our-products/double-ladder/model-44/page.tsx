import Container from "@/components/Container";
import Image from "next/image";
import model44 from "../../../../../public/images/44.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          سلم الومنيوم قابل للتحويل جزئين
        </h1>
        <Image src={model44} alt="plt" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>ستخدم في وضعين مختلفين / فردي - مزدوج</li>
            <li>دعامة اسفل السلم لزيادة الاتزان</li>
            <li>اقدام مطاطية مناعه للانزلاق</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">عدد الدرج</th>
                  <th className="border-2 border-black p-2">
                    ارتفاع التشغيل بالعامل
                  </th>
                  <th className="border-2 border-black p-2">ارتفاع ممتد</th>
                  <th className="border-2 border-black p-2">ارتفاع مزدوج</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x10</td>
                  <td className="border-2 border-black p-2">6.35 - 4.20</td>
                  <td className="border-2 border-black p-2">5.25</td>
                  <td className="border-2 border-black p-2">3.10</td>
                  <td className="border-2 border-black p-2">44-10</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x12</td>
                  <td className="border-2 border-black p-2">7.20 - 4.76</td>
                  <td className="border-2 border-black p-2">6.10</td>
                  <td className="border-2 border-black p-2">3.66</td>
                  <td className="border-2 border-black p-2">44-12</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x14</td>
                  <td className="border-2 border-black p-2">8.35 - 5.32</td>
                  <td className="border-2 border-black p-2">7.25</td>
                  <td className="border-2 border-black p-2">4.22</td>
                  <td className="border-2 border-black p-2">44-14</td>
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
