import Image from "next/image";

const Product = ({ title, img, description, price }) => {
  return (
    <div className=" bg-white ">
      <div className="relative h-[300px] md:h-[200px]">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 ">
        <div>
          <h1 className="max-w-[300px] font-semibold line-clamp-2 text-black min-h-[40px]">
            {title}
          </h1>
        </div>
        <div className="mt-2 max-w-[300px]">
          <p className="text-gray-500 text-[12px]">Description</p>
          <p className="text-xs line-clamp-3 text-black">{description}</p>
        </div>
        <p className="font-extrabold mt-2 text-black">
          <span className="text-xs text-gray-400">KES </span>
          {price} /=
        </p>
        <button className="bg-black text-white px-4 py-2 mt-4 w-full flex items-center justify-center font-semibold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
