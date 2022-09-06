import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
      {products.map(({ title, id, price, rate, description, image }) => (
        <Product
          key={id}
          title={title}
          price={price}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
