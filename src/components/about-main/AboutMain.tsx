import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import aboutPic from "../../../public/images/311571751_104132715819610_3555219688868392360_n.jpg"

const AboutMain = () => {
  return (
    <div className="my-10 px-4">
      <Container>
        <h1 className="text-[18px] md:text-2xl text-center font-medium mb-5">
          {" "}
          من نحن
        </h1>
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:gap-8  ">
          <div className="bg-gray-400 text-center text-4xl my-5 md:my-0 md:h-[320px] md:w-[30%] rounded-md py-[150px] md:py-0">
            <Image src={aboutPic} alt="About Us"  className="h-[320px] rounded-md"/>
          </div>
          <div className="md:w-[60%]">
            <h1 className="text-[24px] font-medium pb-2">شركة إيجيبت لادرز</h1>
            <p className="text-[17px] pb-1">
              هي إحدي اكبر شركات صناعة السلالم الاألومنيوم في مصر والشرق الاوسط
              وافريقيا.
            </p>
            <p className="text-[17px] pb-1">
              تأسست الشركة في عام 2003 وتقدم للعملاء مجموعة متنوعة من السلالم
              متعددة الاغراض سلالم منزلية وسلالم.
            </p>
            <p className="text-[17px] pb-1">
              للاستعمال الصناعي الشاق وسلالم أبراج وسقالات تناسب جميع الارتفاعات
              والمشايات البحري والباليتات وغيرها واستطاعة الشركة ان تنال ثقة
              الشركات والمؤسسات الكبري في جميع القطاعات في مصر وصولا للتصدير
              لتميز منتجاتنا بجودة التصنيع وخفة الوزن وأثصي درجات القوة الامان.
            </p>
            <p className="text-[17px] pb-1">
              ومضنعنا بمدينة بدر علي مساحة 4500 متر مربع والتي تشمل ورش عمل
              حديثة علي مساحة 3000 متر مبرع وخطوط انتاج أوتوماتيكية حديثة واحدث
              وسائل اللحام ولدينا موظفين ذو خبره يتعاملون مع الطلبات بكل دقة ومراقبة الجودة جزء من نظام ادارة الجودة لدينا.
            </p>
            <Link href="/about">
              <button className="bg-bgbtn hover:bg-hoverbtn my-5 text-white pl-5 border-[1px] border-bgbtn text-center items-center px-4 h-[30px] rounded-md py-[1px] ">
                {" "}
                المزيد
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMain;
