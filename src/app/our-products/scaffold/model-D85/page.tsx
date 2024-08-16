import Container from "@/components/Container";
import Image from "next/image";
import modelD85 from "../../../../../public/images/D85.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          {" "}
          سقالة الومنيوم للاستخدام الداخلي{" "}
        </h1>
        <Image src={modelD85} alt="modelD85" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>مصنوعه من  سبيكة الومنيوم خاصة للاستخدام الصناعي الشاق</li>
            <li>مصممة للعمل علي ارتفاعات</li>
            <li>منصة وقوف عريضة غير قابلة للانزلاق</li>
            <li>اكثر من قاعدة وقوف عريضة لحرية الحركة</li>
            <li>مجهزة بـ 4 عجلات فرامل محورية لسهولة الحركة </li>
            <li>   درج عريض مانع للانزلاق مع درابزين داخلي لسهولة الصعود والهبوط</li>
            <li>مجهزة بدرابزين من الاعلي لزيادة الامان</li>
            <li>سهولة الفك والتركيب     </li>
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
                  <td className="border-2 border-black p-2">2.40</td>
                  <td className="border-2 border-black p-2">1.34</td>
                  <td className="border-2 border-black p-2">8.00</td>
                  <td className="border-2 border-black p-2">6.30</td>
                  <td className="border-2 border-black p-2">D85-08</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2.40</td>
                  <td className="border-2 border-black p-2">1.34</td>
                  <td className="border-2 border-black p-2">10.00</td>
                  <td className="border-2 border-black p-2">8.30</td>
                  <td className="border-2 border-black p-2">D85-10</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2.40</td>
                  <td className="border-2 border-black p-2">1.34</td>
                  <td className="border-2 border-black p-2">12.00</td>
                  <td className="border-2 border-black p-2">10.30</td>
                  <td className="border-2 border-black p-2">D85-12</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2.40</td>
                  <td className="border-2 border-black p-2">1.34</td>
                  <td className="border-2 border-black p-2">14.00</td>
                  <td className="border-2 border-black p-2">12.30</td>
                  <td className="border-2 border-black p-2">D85-14</td>
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
