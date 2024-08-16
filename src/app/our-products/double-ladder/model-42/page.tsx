import Container from "@/components/Container";
import Image from "next/image";
import model42 from "../../../../../public/images/42.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">سلم الومنيوم مزدوج درج وقوف  من الجانبين   </h1>
        <Image src={model42} alt="model42"  className="m-auto xl:m-0"/>
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>سلم الومنيوم مزدوج للاستخدام الصناعي الشاق</li>
            <li>درج السلم مانع للانزلاق</li>
            <li>مزود بكاوتش من الاسفل يساعد علي الاتزان</li>
            <li>يمكن الصعود من الجانبين</li>
            <li>مفصلات مجلفنة مانعه للصدأ</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">عدد الدرج</th>
                  <th className="border-2 border-black p-2">ارتفاع التشغيل بالعامل</th>
                  <th className="border-2 border-black p-2">الارتفاع</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x6</td>
                  <td className="border-2 border-black p-2">3.06</td>
                  <td className="border-2 border-black p-2">1.96</td>
                  <td className="border-2 border-black p-2">42-06</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x7</td>
                  <td className="border-2 border-black p-2">3.35</td>
                  <td className="border-2 border-black p-2">2.26</td>
                  <td className="border-2 border-black p-2">42-07</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x8</td>
                  <td className="border-2 border-black p-2">3.62</td>
                  <td className="border-2 border-black p-2">2.52</td>
                  <td className="border-2 border-black p-2">42-08</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x9</td>
                  <td className="border-2 border-black p-2">3.96</td>
                  <td className="border-2 border-black p-2">2.86</td>
                  <td className="border-2 border-black p-2">42-09</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x10</td>
                  <td className="border-2 border-black p-2">4.26</td>
                  <td className="border-2 border-black p-2">3.16</td>
                  <td className="border-2 border-black p-2">42-10</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x11</td>
                  <td className="border-2 border-black p-2">4.56</td>
                  <td className="border-2 border-black p-2">3.46</td>
                  <td className="border-2 border-black p-2">42-11</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x12</td>
                  <td className="border-2 border-black p-2">4.86</td>
                  <td className="border-2 border-black p-2">3.76</td>
                  <td className="border-2 border-black p-2">42-12</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x13</td>
                  <td className="border-2 border-black p-2">5.16</td>
                  <td className="border-2 border-black p-2">4.06</td>
                  <td className="border-2 border-black p-2">42-13</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x14</td>
                  <td className="border-2 border-black p-2">5.46</td>
                  <td className="border-2 border-black p-2">4.36</td>
                  <td className="border-2 border-black p-2">42-14</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x16</td>
                  <td className="border-2 border-black p-2">6.06</td>
                  <td className="border-2 border-black p-2">4.96</td>
                  <td className="border-2 border-black p-2">42-16</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x18</td>
                  <td className="border-2 border-black p-2">6.66</td>
                  <td className="border-2 border-black p-2">5.56</td>
                  <td className="border-2 border-black p-2">42-18</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x20</td>
                  <td className="border-2 border-black p-2">7.26</td>
                  <td className="border-2 border-black p-2">6.16</td>
                  <td className="border-2 border-black p-2">42-20</td>
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
