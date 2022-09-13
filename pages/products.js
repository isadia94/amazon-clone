import { useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import ProductFeed from "../components/ProductFeed";

const Products = ({ allProducts }) => {
  const newArray = allProducts.map((item) => {
    return item["newData"];
  });

  const router = useRouter();
  const [query, setQuery] = useState("");

  const { data: session } = useSession();

  const userName = session?.user.name.split(" ")[0];

  const search = (products) => {
    return products.filter(
      ({ title, description }) =>
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
    );
  };
  return (
    <div className="bg-gray-100">
      <div className="flex items-center p-1 bg-amazon_blue py-2">
        <div
          className="mt-2 flex items-center flex-grow sm:flex-grow-0 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>

        {/* Search */}

        <div className="h-10 items-center hidden sm:flex bg-yellow-400 rounded-md flex-grow">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md outline-none"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
          <MagnifyingGlassIcon className="h-12 text-black p-4 cursor-pointer" />
        </div>

        <div className="flex items-center text-white text-xs space-x-4 md:space-x-6 mx-6 whitespace-nowrap">
          <div className="link hidden sm:block">
            <p>Hello, {userName}</p>
            <p className="text-sm font-bold">Accounts & Lists</p>
          </div>
          <div className="link hidden sm:block">
            <p>Accounts</p>
            <p className="text-sm font-bold">& Orders</p>
          </div>
          <div className="flex items-center -mr-6 md:hidden">
            <p>Sign In &gt;</p>
            <UserIcon className="h-6" />
          </div>

          <div
            className="link relative flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute  right-0 top-0 md:right-5 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-8 sm:h-10" />
            <p className="hidden md:inline font-bold mt-4">Cart</p>
          </div>
        </div>
      </div>
      <ProductFeed products={search(newArray)} />
    </div>
  );
};

export default Products;

export async function getServerSideProps(context) {
  const querySnapshot = await getDocs(collection(db, "products"));
  let allProducts = [];
  querySnapshot.forEach((doc) => {
    allProducts.push({ id: doc.id, ...doc.data() });
  });
  return {
    props: {
      allProducts: allProducts,
    },
  };
}
