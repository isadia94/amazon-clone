import Header from "../../components/Header";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";

function Detail({ allProducts }) {
  const product = allProducts[0];

  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="relative w-1/2 h-screen">
          <Image src={product.img} layout="fill" objectFit="cover" />
        </div>
        <div className="pt-20 px-4">
          <h1 className="text-xl font-semibold">{product.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Detail;

export const getStaticPaths = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  let allProducts = [];
  querySnapshot.forEach((doc) => {
    allProducts.push({ id: doc.id, ...doc.data() });
  });
  const paths = allProducts.map((product) => {
    return {
      params: { id: product.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const q = query(collection(db, "products"), where("id", "==", id));
  const querySnapshot = await getDocs(q);
  let allProducts = [];
  querySnapshot.forEach((doc) => {
    allProducts.push({ id: doc.id, ...doc.data() });
  });
  return {
    props: {
      allProducts,
    },
  };
};
