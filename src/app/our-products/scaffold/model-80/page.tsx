import Container from "@/components/Container";
import Image from "next/image";
import model80 from "../../../../../public/images/80.png";
const Plt = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <h1 className="my-8 text-secondary text-[14px] md:text-[20px] font-bold">
          {" "}
          سقالة الومنيوم للاستخدام الداخلي{" "}
        </h1>
        <Image src={model80} alt="model70" className="m-auto xl:m-0" />
        <div className="flex flex-col xl:flex-row justify-between my-9">
          <ul className="w-full list-disc ml-4 text-[14px] md:text-[18px] font-medium ">
            <li>مصنوعه من سبيكة الومنيوم خاصة للعمل داخل المباني</li>
            <li>منصة وقوف عريضةغير قابلة للانزلاق</li>
            <li>مجهزة بـ 4 عجلات لسهولة الحركة </li>
            <li>سهولة الصعود والهبوط</li>
            <li>سهولة الفك والتركيب لا تشغل حيز في التخزين</li>
          </ul>
          <div className="w-full my-5 xl:my-0 ">
            <table className="w-full text-[14px] md:text-[18px] text-center font-medium border-collapse border-2 border-black">
              <thead className="bg-gray-500">
                <tr className="bg-gray-200">
                  <th className="border-2 border-black p-2">
                    ارتفاع التشغيل بالعامل{" "}
                  </th>
                  <th className="border-2 border-black p-2">
                    الارتفاع بالمتر{" "}
                  </th>

                  <th className="border-2 border-black p-2">الطراز</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">3.00</td>
                  <td className="border-2 border-black p-2">2.00</td>
                  <td className="border-2 border-black p-2">80-03</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border-2 border-black p-2">4.00</td>
                  <td className="border-2 border-black p-2">3.00</td>
                  <td className="border-2 border-black p-2">80.04</td>
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
