import Header from "../components/Header";

const Checkout = () => {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex p-6 m-6 shadow-sm bg-white">
        <div>
          <h1 className="font-medium text-2xl">Shopping Cart</h1>
          <div className="flex flex-row-reverse">
            <p className="flex-end">Price</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
