import Image from "next/image";
import Link from "next/link";

const Product = ({ title, img, description, price, id }) => {
  return (
    <Link href={"/products/" + id}>
      <div className=" m-4 bg-white rounded-md md:m-0 shadow-xl relative ">
        <div className="relative h-[200px] md:h-[200px] pt-2">
          <Image src={img} layout="fill" objectFit="cover" className="px-4" />
        </div>
        <div className="p-3 ">
          <div>
            <h1 className="max-w-[300px] font-semibold line-clamp-2 text-black min-h-[40px]">
              {title}
            </h1>
          </div>
          <div className="-mt-2 max-w-[300px]">
            <p className="text-gray-500 text-[12px]">Description</p>
            <p className="text-xs line-clamp-1 text-black ">{description}</p>
          </div>
          <p className="font-extrabold mt-2 text-black">
            <span className="text-xs text-gray-400">KES </span>
            {price} /=
          </p>
          <button className="button  active:bg-amber-400 active:text-black">
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
