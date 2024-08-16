import Container from "@/components/Container";
import Image from "next/image";
import model40 from "../../../../../public/images/40.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">سلم الومنيوم مفرد ذات وصلة واحدة       </h1>
        <Image src={model40} alt="plt"  className="m-auto xl:m-0"/>
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>سلم تشغيل شاق</li>
            <li>يستخدم علي الحوائط والاعمدة</li>
            <li>اقدام مطاطية مانعة للانزلاق</li>
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
                  <td className="border-2 border-black p-2">06</td>
                  <td className="border-2 border-black p-2">3.06</td>
                  <td className="border-2 border-black p-2">1.96</td>
                  <td className="border-2 border-black p-2">K40-06</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">07</td>
                  <td className="border-2 border-black p-2">3.34</td>
                  <td className="border-2 border-black p-2">2.24</td>
                  <td className="border-2 border-black p-2">K40-07</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">08</td>
                  <td className="border-2 border-black p-2">3.62</td>
                  <td className="border-2 border-black p-2">2.52</td>
                  <td className="border-2 border-black p-2">K40-08</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">09</td>
                  <td className="border-2 border-black p-2">3.90</td>
                  <td className="border-2 border-black p-2">2.80</td>
                  <td className="border-2 border-black p-2">K40-09</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">10</td>
                  <td className="border-2 border-black p-2">4.18</td>
                  <td className="border-2 border-black p-2">3.08</td>
                  <td className="border-2 border-black p-2">K40-10</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">11</td>
                  <td className="border-2 border-black p-2">4.46</td>
                  <td className="border-2 border-black p-2">3.36</td>
                  <td className="border-2 border-black p-2">K40-11</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">12</td>
                  <td className="border-2 border-black p-2">4.74</td>
                  <td className="border-2 border-black p-2">3.64</td>
                  <td className="border-2 border-black p-2">K40-12</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">13</td>
                  <td className="border-2 border-black p-2">5.02</td>
                  <td className="border-2 border-black p-2">3.92</td>
                  <td className="border-2 border-black p-2">K40-13</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">14</td>
                  <td className="border-2 border-black p-2">5.30</td>
                  <td className="border-2 border-black p-2">4.20</td>
                  <td className="border-2 border-black p-2">K40-14</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">16</td>
                  <td className="border-2 border-black p-2">5.88</td>
                  <td className="border-2 border-black p-2">4.78</td>
                  <td className="border-2 border-black p-2">K40-16</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">18</td>
                  <td className="border-2 border-black p-2">6.44</td>
                  <td className="border-2 border-black p-2">5.34</td>
                  <td className="border-2 border-black p-2">K40-18</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">20</td>
                  <td className="border-2 border-black p-2">7.00</td>
                  <td className="border-2 border-black p-2">5.90</td>
                  <td className="border-2 border-black p-2">K40-20</td>
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
