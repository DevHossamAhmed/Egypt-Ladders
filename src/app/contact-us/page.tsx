import Container from "@/components/Container";
import Link from "next/link";
import {
  MdLocationOn,
  MdPhoneEnabled,
  MdMarkunreadMailbox,
  MdFax,
} from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const contactUs = () => {
  return (
    <>
      <div className="mt-36 px-4">
        <Container>
          <h2 className="text-[24px] font-medium pb-5">اتصل بنا </h2>
          <div className="flex justify-between flex-col-reverse md:flex-row gap-8">
            <form className="flex flex-col justify-start pt-[30px] px-4 bg-[#d1d1d9] w-full xl:w-[900px] rounded-md">
              {/* subject */}
              <div className=" px-2 mb-[20px] rounded-md  w-full h-[50px]  border text-xs border-none focus:outline-none">
                <select className=" px-2 mb-[20px] rounded-md  w-full h-[50px]  border text-xs border-none focus:outline-none">
                  <option value="مشكلة بالموقع الالكتروني">
                    مشكلة بالموقع الالكتروني
                  </option>
                  <option value="استفسار بخصوص الدورات">
                    استفسار بخصوص المنتجات
                  </option>
                  <option value="استفسار بخصوص الدورات الخاصة">
                    استفسار بخصوص المنتجات الخاصة
                  </option>
                  <option value="التواصل مع الادارة">التواصل مع الادارة</option>
                </select>
              </div>
              {/* priority */}
              <div className=" px-2 mb-[20px] rounded-md w-full h-[50px]  border text-xs border-none focus:outline-none">
                <select className="  w-full p-3 rounded-md focus:outline-none" >
                  <option value="عادية">عادية </option>
                  <option value="متوسطة"> متوسطة </option>
                  <option value="هامة">هامة </option>
                </select>
              </div>
              {/* full name */}
              <div className=" px-2 mb-[20px] rounded-md w-full h-[50px]  border text-xs border-none focus:outline-none">
                <input
                  type="text"
                  className="  w-full  p-3 rounded-md focus:outline-none"
                  placeholder="الاسم بالكامل  "
                />
              </div>
              {/* email */}
              <div className=" px-2 mb-[20px] rounded-md  w-full h-[50px]  border text-xs border-none focus:outline-none">
                <input  type="email" className="  w-full  p-3 rounded-md focus:outline-none" placeholder="ايميل " />
              </div>
              {/* phone */}
              <div className=" px-2 mb-[20px] rounded-md  w-full h-[50px]  border text-xs border-none focus:outline-none">
                <input

                  type="number"
                  name="number"
                  className="   w-full p-3 rounded-md focus:outline-none"
                  placeholder="  رقم التليفون  "
                />
              </div>
              {/* message */}
              <div className=" px-2 mb-[20px] rounded-md t w-full h-[165px] pt-[10px] border text-xs border-none focus:outline-none">
                <textarea
                  id="w3review"
                  name="w3review"
                  placeholder="الرسالة"
                  className=" h-[150px]  w-full p-3 rounded-md focus:outline-none"
                />
              </div>
              {/* how */}
              <div className="flex gap-2">
                <p>طريقة التواصل </p>
                  <input type="radio" id="البريد الالكتروني" name="contactMethod" value="email" />
                <label htmlFor="email">البريد الالكتروني</label>
                <input type="radio" id="الهاتف" name="contactMethod" value="mobile"  />
                <label htmlFor="mobile">الهاتف</label>
              </div>
              {/* send */}
              <button className="bg-bgbtn hover:bg-hoverbtn text-white pl-5 my-5 border-[1px] border-bgbtn text-center items-center px-4 h-[40px] rounded-md py-[1px] ">
                {" "}
                ارسال
              </button>
            </form>
            <div className="flex flex-col bg-[#d1d1d9] w-full xl:w-[600px] h-[500px] px-4 py-8 rounded-md ">
              <div className="flex gap-1 items-center mb-5">
                <MdLocationOn className="text-[40px] xl:text-[25px]" />
                <p>
                  52 ش أبوبكر الصديق- ميدان سفير - مصر الجديده -بجوار فودافون,
                  Cairo, Egypt
                </p>
              </div>
              <div className="flex gap-1 items-center mb-5">
                <IoMdMail className="text-[25px] xl:text-[20px]" />
                <p>
                  للطلب والحجز
                  <Link
                    href="mailto:Egyptladder2020@gmail.com"
                    className="underline md:text-[20px] hover:text-third pr-2"
                  >
                    Egyptladder2020@gmail.com
                  </Link>
                </p>
              </div>
              <div className="flex gap-1 items-center mb-5">
                <MdPhoneEnabled className="text-[25px] xl:text-[20px] " />
                <p>01004515511 - 01091187776</p>
              </div>
              <div className="flex gap-1 items-center mb-5">
                <MdPhoneEnabled className="text-[25px] xl:text-[20px]" />
                <p>27798254 - 27798615</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full mt-10 ">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220874.0674390909!2d31.686848390716197!3d30.118311967712028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145814512875641b%3A0x278941ce592fcb50!2z2KfZitis2YrYqNiqINmE2KfYr9ix2LIg2YTYtdmG2KfYudipINin2YTYs9mE2KfZhNmFINmI2KfZhNiz2YLYp9mE2KfYqiDYp9mE2KfZhNmF2YjZhtmK2YjZhQ!5e0!3m2!1sar!2seg!4v1711705902171!5m2!1sar!2seg"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default contactUs;
