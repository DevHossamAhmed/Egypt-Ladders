import Container from "@/components/Container";
import Image from "next/image";
import model41 from "../../../../../public/images/41.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          سلم الومنيوم منزلق ذات وصلتين{" "}
        </h1>
        <Image src={model41} alt="plt" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>سلم منزلق وصلتين</li>
            <li>يستخدم علي الحوائط والاعمدة</li>
            <li>يمكن فصل السلم واستخدامه كسلمين منفصلين</li>
            <li>يتم تثبيت الوصلة الثانية علي الاولي بواسطة هوك</li>
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
                  <td className="border-2 border-black p-2">2x6</td>
                  <td className="border-2 border-black p-2">4.10</td>
                  <td className="border-2 border-black p-2">3.00</td>
                  <td className="border-2 border-black p-2">1.98</td>
                  <td className="border-2 border-black p-2">K41-06</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x8</td>
                  <td className="border-2 border-black p-2">5.25</td>
                  <td className="border-2 border-black p-2">4.15</td>
                  <td className="border-2 border-black p-2">2.45</td>
                  <td className="border-2 border-black p-2">K41-08</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x10</td>
                  <td className="border-2 border-black p-2">6.40</td>
                  <td className="border-2 border-black p-2">5.30</td>
                  <td className="border-2 border-black p-2">3.10</td>
                  <td className="border-2 border-black p-2">K41-10</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x12</td>
                  <td className="border-2 border-black p-2">7.20</td>
                  <td className="border-2 border-black p-2">6.10</td>
                  <td className="border-2 border-black p-2">3.66</td>
                  <td className="border-2 border-black p-2">K41-12</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x14</td>
                  <td className="border-2 border-black p-2">8.35</td>
                  <td className="border-2 border-black p-2">7.25</td>
                  <td className="border-2 border-black p-2">4.22</td>
                  <td className="border-2 border-black p-2">K41-14</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x16</td>
                  <td className="border-2 border-black p-2">9.45</td>
                  <td className="border-2 border-black p-2">8.35</td>
                  <td className="border-2 border-black p-2">4.78</td>
                  <td className="border-2 border-black p-2">K41-16</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x18</td>
                  <td className="border-2 border-black p-2">10.6</td>
                  <td className="border-2 border-black p-2">9.50</td>
                  <td className="border-2 border-black p-2">5.38</td>
                  <td className="border-2 border-black p-2">K41-18</td>
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
