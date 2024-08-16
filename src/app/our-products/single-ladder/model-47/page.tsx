import Container from "@/components/Container";
import Image from "next/image";
import model47 from "../../../../../public/images/47.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          سلم الومنيوم مفرد بحبل ثلاث اجزاء{" "}
        </h1>
        <Image src={model47} alt="plt" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li> سلم لاعمال الصناعية والكهربائية الشاقة </li>
            <li>عجل لسهولة الانزلاق علي الحوائط</li>
            <li>مزود بحبل وهوك اتوماتيك بجبل خطاف امان و واير</li>
            <li>دعامة اسفل السلم لزيادة الاتزان</li>
            <li>دعامات جانبية لجعله اكثر امانا واتزانا </li>
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
                  <td className="border-2 border-black p-2">2x18</td>
                  <td className="border-2 border-black p-2">14.10</td>
                  <td className="border-2 border-black p-2">13.00</td>
                  <td className="border-2 border-black p-2">5.50</td>
                  <td className="border-2 border-black p-2">47-18</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x20</td>
                  <td className="border-2 border-black p-2">15.50</td>
                  <td className="border-2 border-black p-2">14.50</td>
                  <td className="border-2 border-black p-2">6.00</td>
                  <td className="border-2 border-black p-2">47-20</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x22</td>
                  <td className="border-2 border-black p-2">17.10</td>
                  <td className="border-2 border-black p-2">16.00</td>
                  <td className="border-2 border-black p-2">6.50</td>
                  <td className="border-2 border-black p-2">47-22</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">2x24</td>
                  <td className="border-2 border-black p-2">19.10</td>
                  <td className="border-2 border-black p-2">18.00</td>
                  <td className="border-2 border-black p-2">7.00</td>
                  <td className="border-2 border-black p-2">47-24</td>
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
