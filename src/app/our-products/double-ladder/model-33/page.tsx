import Container from "@/components/Container";
import Image from "next/image";
import model33 from "../../../../../public/images/33.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">سلم الومنيوم مزدوج درج عريض من جانب واحد  </h1>
        <Image src={model33} alt="plt"  className="m-auto xl:m-0"/>
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>سلم الومنيوم درج عريض من جهه واحدة</li>
            <li>مزود بكاوتش مانع للنزلاق</li>
            <li>درج مانع للانزلاق</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">عدد الدرج</th>
                  <th className="border-2 border-black p-2">ارتفاع التشغيل بالعامل</th>
                  <th className="border-2 border-black p-2">ارتفاع البلات فورم</th>
                  <th className="border-2 border-black p-2">الارتفاع</th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">03</td>
                  <td className="border-2 border-black p-2">2.65</td>
                  <td className="border-2 border-black p-2">0.75</td>
                  <td className="border-2 border-black p-2">1.4</td>
                  <td className="border-2 border-black p-2">33-03</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">04</td>
                  <td className="border-2 border-black p-2">2.90</td>
                  <td className="border-2 border-black p-2">1.00</td>
                  <td className="border-2 border-black p-2">1.65</td>
                  <td className="border-2 border-black p-2">33-04</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">05</td>
                  <td className="border-2 border-black p-2">3.15</td>
                  <td className="border-2 border-black p-2">1.25</td>
                  <td className="border-2 border-black p-2">1.9</td>
                  <td className="border-2 border-black p-2">33-05</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">06</td>
                  <td className="border-2 border-black p-2">3.40</td>
                  <td className="border-2 border-black p-2">1.50</td>
                  <td className="border-2 border-black p-2">2.15</td>
                  <td className="border-2 border-black p-2">33-06</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">07</td>
                  <td className="border-2 border-black p-2">3.65</td>
                  <td className="border-2 border-black p-2">1.75</td>
                  <td className="border-2 border-black p-2">2.40</td>
                  <td className="border-2 border-black p-2">33-07</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">08</td>
                  <td className="border-2 border-black p-2">3.90</td>
                  <td className="border-2 border-black p-2">2.00</td>
                  <td className="border-2 border-black p-2">2.65</td>
                  <td className="border-2 border-black p-2">33-08</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">09</td>
                  <td className="border-2 border-black p-2">4.15</td>
                  <td className="border-2 border-black p-2">2.25</td>
                  <td className="border-2 border-black p-2">2.90</td>
                  <td className="border-2 border-black p-2">33-10</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">10</td>
                  <td className="border-2 border-black p-2">4.40</td>
                  <td className="border-2 border-black p-2">2.50</td>
                  <td className="border-2 border-black p-2">3.15</td>
                  <td className="border-2 border-black p-2">33-10</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">12</td>
                  <td className="border-2 border-black p-2">4.90</td>
                  <td className="border-2 border-black p-2">3.00</td>
                  <td className="border-2 border-black p-2">3.65</td>
                  <td className="border-2 border-black p-2">33-12</td>
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
