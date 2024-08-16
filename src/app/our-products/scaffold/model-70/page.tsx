import Container from "@/components/Container";
import Image from "next/image";
import model70 from "../../../../../public/images/70.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          {" "}
          سقالة الومنيوم قابلة للارتفاع والانخفاض{" "}
        </h1>
        <Image src={model70} alt="model70" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>مصنوعه من سبيكة خاصة للاستخدام الصناعي الشاق</li>
            <li>مصممة للعمل في الداخل والخارج</li>
            <li>منصة وقوف عريضة 200*60 غير قابلة للانزلاق</li>
            <li>مجهزة بـ 4 عجلات لسهولة الحركة</li>
            <li>سهولة الصعود والهبوط مع درج مانع للانزلاق</li>
            <li>يمكن استخدام الاجناب كسلمين ممتدين عند الاستخدام منفصلة</li>
            <li>سهولة الفك والتركيب لا تشغل خيز عند التخزين</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">ارتفاع التشغيل بالعامل من منصة الوقوف الثانية </th>
                  <th className="border-2 border-black p-2">
الارتفاع الي منصة الوقوف الثانية                  </th>
                  <th className="border-2 border-black p-2">الارتفاع الي منصة الوقوف الاولي</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">54</td>
                  <td className="border-2 border-black p-2">3.00 - 2.00</td>
                  <td className="border-2 border-black p-2">5.00</td>
                  <td className="border-2 border-black p-2">70-05</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">88</td>
                  <td className="border-2 border-black p-2">4.00 - 2.70</td>
                  <td className="border-2 border-black p-2">6.00</td>
                  <td className="border-2 border-black p-2">70-06</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">1.35</td>
                  <td className="border-2 border-black p-2">5.00 - 3.60</td>
                  <td className="border-2 border-black p-2">7.00</td>
                  <td className="border-2 border-black p-2">70-07</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">1.60</td>
                  <td className="border-2 border-black p-2">6.00 - 4.00</td>
                  <td className="border-2 border-black p-2">8.00</td>
                  <td className="border-2 border-black p-2">70-08</td>
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
