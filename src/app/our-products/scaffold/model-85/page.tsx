import Container from "@/components/Container";
import Image from "next/image";
import model85 from "../../../../../public/images/85.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          {" "}
          سقالة الومنيوم للاستخدام الداخلي{" "}
        </h1>
        <Image src={model85} alt="model85" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>مصممة للعمل علي ارتفاعات</li>
            <li>سهولة الصعود والهبوط من الجانبين</li>
            <li>مصنوعه من نوع سبيكة الومنيوم خاصة للاستخدام الصناعي الشاق</li>
            <li>منصة وقوف عريضة 200*60 غير قابلة للانزلاق</li>
            <li>مجهزة بـ 4 عجلات فرامل محورية لسهولة الحركة </li>
            <li>مجهزة بدرابزين من اعلي لزيادة الامان </li>
            <li>سهولة الفك والتركيب ولا تشغل حيز عند التخزين</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">العرض </th>
                  <th className="border-2 border-black p-2">العمق </th>
                  <th className="border-2 border-black p-2">
                    ارتفاع العامل بالتشغيل{" "}
                  </th>
                  <th className="border-2 border-black p-2">الارتفاع </th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2.00</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">5.00</td>
                  <td className="border-2 border-black p-2">3.20</td>
                  <td className="border-2 border-black p-2">85-05</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2.00</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">6.00</td>
                  <td className="border-2 border-black p-2">4.20</td>
                  <td className="border-2 border-black p-2">85-06</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2.40</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">7.00</td>
                  <td className="border-2 border-black p-2">5.20</td>
                  <td className="border-2 border-black p-2">85-07</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2.40</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">8.00</td>
                  <td className="border-2 border-black p-2">6.20</td>
                  <td className="border-2 border-black p-2">85-08</td>
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
