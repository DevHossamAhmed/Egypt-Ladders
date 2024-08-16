import Container from "@/components/Container";
import Image from "next/image";
import model48 from "../../../../../public/images/48.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">سلم الومنيوم مزدوج درج وقوف عريض من الجانبين   </h1>
        <Image src={model48} alt="plt"  className="m-auto xl:m-0"/>
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>درج عريض مانع للانزلاق</li>
            <li>يمكن استخدامه من الجانبين</li>
            <li>اقدام مطاطية مانعه للانزلاق</li>
            <li>مفصلات مجلفنة مانعه للصدأ</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">عدد الدرج</th>
                  <th className="border-2 border-black p-2">ارتفاع التشغيل بالعامل</th>
                  <th className="border-2 border-black p-2">المسافة بين الجانبين  </th>
                  <th className="border-2 border-black p-2">الارتفاع</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x2</td>
                  <td className="border-2 border-black p-2">1.60</td>
                  <td className="border-2 border-black p-2">0.70</td>
                  <td className="border-2 border-black p-2">0.50</td>
                  <td className="border-2 border-black p-2">48-02</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x3</td>
                  <td className="border-2 border-black p-2">1.85</td>
                  <td className="border-2 border-black p-2">0.70</td>
                  <td className="border-2 border-black p-2">0.75</td>
                  <td className="border-2 border-black p-2">48-03</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x4</td>
                  <td className="border-2 border-black p-2">2.10</td>
                  <td className="border-2 border-black p-2">0.80</td>
                  <td className="border-2 border-black p-2">1.00</td>
                  <td className="border-2 border-black p-2">48-04</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x5</td>
                  <td className="border-2 border-black p-2">2.35</td>
                  <td className="border-2 border-black p-2">1.06</td>
                  <td className="border-2 border-black p-2">1.25</td>
                  <td className="border-2 border-black p-2">48-05</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x6</td>
                  <td className="border-2 border-black p-2">2.60</td>
                  <td className="border-2 border-black p-2">1.24</td>
                  <td className="border-2 border-black p-2">1.50</td>
                  <td className="border-2 border-black p-2">48-06</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x7</td>
                  <td className="border-2 border-black p-2">2.85</td>
                  <td className="border-2 border-black p-2">1.42</td>
                  <td className="border-2 border-black p-2">1.75</td>
                  <td className="border-2 border-black p-2">48-07</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x8</td>
                  <td className="border-2 border-black p-2">3.10</td>
                  <td className="border-2 border-black p-2">1.60</td>
                  <td className="border-2 border-black p-2">2.00</td>
                  <td className="border-2 border-black p-2">48-08</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x10</td>
                  <td className="border-2 border-black p-2">3.60</td>
                  <td className="border-2 border-black p-2">1.96</td>
                  <td className="border-2 border-black p-2">2.50</td>
                  <td className="border-2 border-black p-2">48-10</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x12</td>
                  <td className="border-2 border-black p-2">4.10</td>
                  <td className="border-2 border-black p-2">2.36</td>
                  <td className="border-2 border-black p-2">3.00</td>
                  <td className="border-2 border-black p-2">48-12</td>
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
