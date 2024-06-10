import ProductCard from "@/components/our-product/ProductCard";
import React from "react";
import pic1 from "../../../public/images/407483866_316287071270839_1553674601491804216_n.jpg";
import Container from "@/components/Container";
const products = [
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
  {
    name: "سلم الومنيوم فردي",
    image: pic1,
  },
];
const Page = () => {
  return (
    <div className="mt-36 px-4">
      <Container>
        <div className="flex flex-wrap flex-col md:flex-row justify-between  items-center min-h-screen">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              imageUrl={product.image.src} // تأكد من توفير مسار صحيح للصورة
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Page;
