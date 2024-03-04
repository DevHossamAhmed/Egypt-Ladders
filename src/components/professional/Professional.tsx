import Image from "next/image";
import Container from "../Container";
import styles from "./professional.module.css";
import icon1 from "../../../public/images/icon-1.png";
import icon2 from "../../../public/images/icon-2.png";
import icon3 from "../../../public/images/icon-3.png";
const Professional = () => {
  return (
    <div className={styles.proImage}>
      <div className="py-[100px]">
        <Container>
          <div className="w-full flex flex-col justify-center m-auto text-center py-8 text-white">
            <h1 className="text-4xl font-medium pb-5">التصنيع الاحترافي</h1>
            <p className="text-5xl font-medium">لماذا يجب عليك إختيارنا ؟</p>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between">
            <div className="md:w-[30%]">
              <div className="flex justify-center ">
                <Image src={icon1} alt="icon" />
              </div>
              <div className="text-white text-center py-5 text-[20px] font-medium">
                <h2>أفضل جودة</h2>
                <h3>مصنعنا يتبع أعلى معايير الاتحاد الأوروبي</h3>
              </div>
            </div>
            <div className="md:w-[30%]">
              <div className="flex justify-center ">
                <Image src={icon2} alt="icon" />
              </div>
              <div className="text-white text-center py-5 text-[20px] font-medium">
                <h2>الشحن</h2>
                <h3> خيارات التوصيل لجميع أنحاء مصر </h3>
              </div>
            </div>
            <div className="md:w-[30%]">
              <div className="flex justify-center ">
                <Image src={icon3} alt="icon" />
              </div>
              <div className="text-white text-center py-5 text-[20px] font-medium">
                <h2>الدعم</h2>
                <h3>اتصل بنا أو قم بزيارة مكتبنا</h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Professional;
