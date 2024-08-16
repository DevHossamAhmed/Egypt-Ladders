import Container from "@/components/Container";
import Image from "next/image";
import modelK74 from "../../../../../public/images/K47.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          سلم الومنيوم مفصلي متعدد الاستخدام
        </h1>
        <Image src={modelK74} alt="plt" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>سلم الومنيوم مفصلي متعدد الاستخدام</li>
            <li>سلم الومنيوم منفرد</li>
            <li>سلم الومنيوم مزدوج</li>
            <li>سلم الومنيوم كابولي</li>
            <li>سلم سقالة </li>
            <li>يمكن طية لسهولة التخزين</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">عدد الدرج</th>
                  <th className="border-2 border-black p-2">فردي</th>
                  <th className="border-2 border-black p-2">كابولي</th>
                  <th className="border-2 border-black p-2">مزدوج</th>
                  <th className="border-2 border-black p-2">سقالة</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">4x3</td>
                  <td className="border-2 border-black p-2">3.80</td>
                  <td className="border-2 border-black p-2">2.80</td>
                  <td className="border-2 border-black p-2">1.90</td>
                  <td className="border-2 border-black p-2">1.00</td>
                  <td className="border-2 border-black p-2">K74-12</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">4x4</td>
                  <td className="border-2 border-black p-2">4.90</td>
                  <td className="border-2 border-black p-2">3.60</td>
                  <td className="border-2 border-black p-2">2.40</td>
                  <td className="border-2 border-black p-2">1.30</td>
                  <td className="border-2 border-black p-2">K74-16</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">4x5</td>
                  <td className="border-2 border-black p-2">6.00</td>
                  <td className="border-2 border-black p-2">4.50</td>
                  <td className="border-2 border-black p-2">3.00</td>
                  <td className="border-2 border-black p-2">1.60</td>
                  <td className="border-2 border-black p-2">K74-20</td>
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
