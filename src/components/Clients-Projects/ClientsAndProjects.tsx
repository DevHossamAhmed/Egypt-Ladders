import Link from "next/link";
import Container from "../Container";

const ClientsAndProjects = () => {
  return (
    <div className="my-10 px-4">
      <Container>
        <h1 className="text-[18px] md:text-2xl text-center font-medium mb-5">العملاء والمشاريع المميزة</h1>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center mb-5 lg:mb-0">Logo</div>
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center mb-5 lg:mb-0">Logo</div>
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center">Logo</div>
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center">Logo</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 my-5">
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center mb-5 lg:mb-0">Logo</div>
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center mb-5 lg:mb-0">Logo</div>
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center">Logo</div>
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center">Logo</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center mb-5 lg:mb-0">Logo</div>
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center mb-5 lg:mb-0">Logo</div>
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center">Logo</div>
            <div className="bg-gray-400 w-[50%] md:w-[50%] lg:w-[40%] h-[70px] pt-[25px] rounded-md m-auto text-center">Logo</div>
          </div>
          <div className="w-full  flex justify-center mt-5">
            <Link href="/clients-projects">
              <button className="bg-bgbtn hover:bg-hoverbtn my-5 text-white pl-5 border-[1px] border-bgbtn text-center items-center px-4 h-[30px] w-[130px] rounded-md py-[1px] "> المزيد</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClientsAndProjects;
