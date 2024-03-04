import Link from "next/link";
import Container from "../Container";

const AboutMain = () => {
  return (
    <div className="my-10 px-4">
      <Container>
        <h1 className="text-[18px] md:text-2xl text-center font-medium mb-5"> من نحن</h1>
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:gap-8  ">
          <div className="bg-gray-400 text-center text-4xl my-5 md:my-0 md:h-[250px] md:w-[30%] rounded-md py-[150px]">Image</div>
          <div className="md:w-[60%]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempore odit placeat, rem voluptatem earum fugit vitae repellat reprehenderit sit aperiam minus voluptate perspiciatis
              odio hic eligendi reiciendis quae ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda incidunt reiciendis eum. Tempora corporis nam cupiditate accusantium
              quia? Consequuntur repudiandae expedita libero eos ipsam odio ad, ratione accusamus aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quo. Dolore, vero laborum
              maiores expedita minima accusamus est molestias voluptatum? Incidunt adipisci, reiciendis inventore sequi aliquam necessitatibus minima sint deserunt. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur minima libero consectetur consequuntur dolore sapiente officiis non, quam qui, distinctio saepe praesentium facere, alias illum nihil molestiae ea
              facilis nam?
            </p>
            <Link href="/about">
              <button className="bg-bgbtn hover:bg-hoverbtn my-5 text-white pl-5 border-[1px] border-bgbtn text-center items-center px-4 h-[30px] rounded-md py-[1px] "> المزيد</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMain;
