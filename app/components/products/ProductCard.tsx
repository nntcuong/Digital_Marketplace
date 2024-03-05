
"use client"
import Image from "next/image";
interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="col-span-1 
    cursor-pointer 
    border-[1.2px] 
    border-slate-200
    bg-slate-50 
    rounded-sm 
    p-2 
    transition
    hover:scale-105 
    text-center 
    text-sm">
      <div className="
      flex 
      flex-col 
      items-center
       w-full 
       gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
          fill
            src={data.images[0].image}
            alt={data.name}
            objectFit="contain"
          />
        </div>
        <div>{/* Thêm nội dung cho phần này */}</div>
        <div>{/* Thêm nội dung cho phần này */}</div>
        <div>{/* Thêm nội dung cho phần này */}</div>
        <div>{/* Thêm nội dung cho phần này */}</div>
      </div>
    </div>
  );
};

export default ProductCard;
