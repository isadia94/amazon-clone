import Header from "../components/Header";
import img1 from "../public/no-image.jpg";
import Image from "next/image";
import { useState } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";

import { productInputs } from "../formSource";

const Sell = () => {
  const [data, setData] = useState("false");
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData("true");
  };
  return (
    <div className="pb-8">
      <Header />
      <div className="mt-4 px-6">
        <p className="font-extrabold text-[40px] max-w-[200px] sm:max-w-none tracking-wide leading-10">
          Advertise Products
        </p>
      </div>
      <div className="flex mt-10 px-6 space-x-6 w-full">
        <div>
          <Image
            src={file ? URL.createObjectURL(file) : img1}
            width={400}
            height={400}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div>
          <form className="w-full">
            <div className="flex flex-col">
              <label className="font-bold flex items-center " htmlFor="file">
                <CameraIcon className="h-20 cursor-pointer" />
              </label>
              <input
                className="bg-gray-200 "
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div>
              <>
                {productInputs.slice(0, 1).map((item) => (
                  <div className="flex flex-col space-x-2 mt-2" key={item.id}>
                    <label className="font-bold px-2" htmlFor="">
                      {item.label}
                    </label>
                    <input className="px-2 py-2 input" type={item.input} />
                  </div>
                ))}
              </>
            </div>

            <div className="flex mt-4 ">
              {productInputs.slice(1, 3).map((item) => (
                <div className="flex flex-col space-x-2 " key={item.id}>
                  <label className="font-bold px-2" htmlFor="">
                    {item.label}
                  </label>
                  <input className=" px-2 py-2 input" type={item.input} />
                </div>
              ))}
            </div>
            {productInputs.slice(3, 4).map((item) => (
              <div className="flex flex-col space-x-2 mt-4 " key={item.id}>
                <label className="font-bold px-2" htmlFor="">
                  {item.label}
                </label>
                <textarea className=" input" type={item.input} />
              </div>
            ))}

            <button
              className="px-4 py-4 mx-2 w-full mr-6 bg-amber-400 mt-4 space-x-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sell;
