import Link from "next/link";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
      {products.map(({ title, id, price, rate, description, img }) => (
        <Link href={"/products" + id} key={id}>
          <Product
            title={title}
            price={price}
            description={description}
            img={img}
            id={id}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductFeed;
