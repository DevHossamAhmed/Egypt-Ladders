import React from "react";

interface ProductCardProps {
  name: any;
  imageUrl: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl }) => {
  return (
    <div className="w-full md:w-[380px] h-[300px] rounded mb-5 overflow-hidden shadow-lg">
      <div className="w-full h-[200px]">
        <img className="w-full h-[200px]" src={imageUrl} alt={name} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
    </div>
  );
};

export default ProductCard;
