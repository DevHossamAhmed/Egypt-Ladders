import Container from "@/components/Container";
import Image from "next/image";
import model46 from "../../../../../public/images/46.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          سلم الومنيوم مفرد بحبل جزئين{" "}
        </h1>
        <Image src={model46} alt="plt" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>يستخدم علي الحوائط والاعمدة</li>
            <li>عجل لسهولة الانزلاق علي الحوائط</li>
            <li>مزود بحبل وهوك اتوماتيك لزيادة الامان</li>
            <li>دعامة اسفل السلم لزيادة الاتزان</li>
            <li>درج مانع للانزلاق</li>
            <li>اقدام مطاطية مانعه للانزلاق</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">عدد الدرج</th>
                  <th className="border-2 border-black p-2">
                    ارتفاع التشغيل بالعامل
                  </th>
                  <th className="border-2 border-black p-2">ارتفاع التشغيل </th>
                  <th className="border-2 border-black p-2">الارتفاع</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x14</td>
                  <td className="border-2 border-black p-2">8.35</td>
                  <td className="border-2 border-black p-2">7.25</td>
                  <td className="border-2 border-black p-2">4.20</td>
                  <td className="border-2 border-black p-2">46-14</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x16</td>
                  <td className="border-2 border-black p-2">9.45</td>
                  <td className="border-2 border-black p-2">8.35</td>
                  <td className="border-2 border-black p-2">4.80</td>
                  <td className="border-2 border-black p-2">46-16</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x18</td>
                  <td className="border-2 border-black p-2">10.45</td>
                  <td className="border-2 border-black p-2">9.35</td>
                  <td className="border-2 border-black p-2">5.40</td>
                  <td className="border-2 border-black p-2">46-18</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x20</td>
                  <td className="border-2 border-black p-2">10.95</td>
                  <td className="border-2 border-black p-2">9.35</td>
                  <td className="border-2 border-black p-2">5.90</td>
                  <td className="border-2 border-black p-2">46-20</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x22</td>
                  <td className="border-2 border-black p-2">12.10</td>
                  <td className="border-2 border-black p-2">11.00</td>
                  <td className="border-2 border-black p-2">6.50</td>
                  <td className="border-2 border-black p-2">46-22</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x24</td>
                  <td className="border-2 border-black p-2">13.20</td>
                  <td className="border-2 border-black p-2">12.10</td>
                  <td className="border-2 border-black p-2">7.00</td>
                  <td className="border-2 border-black p-2">46-24</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x26</td>
                  <td className="border-2 border-black p-2">14.10</td>
                  <td className="border-2 border-black p-2">13.00</td>
                  <td className="border-2 border-black p-2">7.60</td>
                  <td className="border-2 border-black p-2">46-26</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x28</td>
                  <td className="border-2 border-black p-2">15.10</td>
                  <td className="border-2 border-black p-2">14.00</td>
                  <td className="border-2 border-black p-2">8.20</td>
                  <td className="border-2 border-black p-2">46-28</td>
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
