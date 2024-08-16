import Container from "@/components/Container";
import Image from "next/image";
import model92 from "../../../../../public/images/92.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
        سلم الومنيوم ثلاث وصلات منزلق  
        </h1>
        <Image src={model92} alt="plt" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>سلم للاعمال الصناعية والكهربائية الشاقة </li>
            <li>مزود بترابزين ودرجة وقوف عريضة جانبي بالوصلة الثالثة </li>
            <li>مزود بعجلتين لسهولة التنقل ويتم فكهما اثناء التشغيل</li>
            <li>مزود بحبل هوك اوتوماتيك لزيادة الامان </li>
            <li>مزود بطوق علوي الومنيوم</li>
            <li>مزود بدعامات جانبية موزعه بطول السلم</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">عدد الدرج</th>
                  <th className="border-2 border-black p-2">
                    ارتفاع التشغيل بالعامل
                  </th>
                  <th className="border-2 border-black p-2">ارتفاع مزدوج ممتد</th>
                  <th className="border-2 border-black p-2">الاترفاع </th>
                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x17</td>
                  <td className="border-2 border-black p-2">9.00</td>
                  <td className="border-2 border-black p-2">8.00</td>
                  <td className="border-2 border-black p-2">5.00</td>
                  <td className="border-2 border-black p-2">92-09</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x21</td>
                  <td className="border-2 border-black p-2">11.00</td>
                  <td className="border-2 border-black p-2">10.00</td>
                  <td className="border-2 border-black p-2">6.00</td>
                  <td className="border-2 border-black p-2">92-11</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3x24</td>
                  <td className="border-2 border-black p-2">12.50</td>
                  <td className="border-2 border-black p-2">11.50</td>
                  <td className="border-2 border-black p-2">7.00</td>
                  <td className="border-2 border-black p-2">92-12.5</td>
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
