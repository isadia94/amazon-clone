import Header from "../components/Header";
import img1 from "../public/no-image.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useSession } from "next-auth/react";
import { collection, addDoc, doc, Timestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";

import { productInputs } from "../formSource";

const Sell = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const userName = `Posted by : ${session?.user.name}`;
  const [newData, setNewData] = useState({ userName });
  const [file, setFile] = useState("");
  const [per, setPer] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);

            setNewData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "products"), {
      newData,
    });

    router.push("/");
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setNewData({ ...newData, userName, [id]: value });
  };

  return (
    <div className="pb-8">
      <Header />
      <div className="mt-4 px-6">
        <p className="font-extrabold text-[40px] max-w-[200px] sm:max-w-none tracking-wide leading-10">
          Advertise Products
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 px-6 space-x-6">
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
          <form className="">
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
                    <input
                      id={item.id}
                      className="px-2 py-2 input"
                      type={item.input}
                      onChange={handleInput}
                    />
                  </div>
                ))}
              </>
            </div>

            <div className="flex flex-col md:flex-row mt-4 ">
              {productInputs.slice(1, 3).map((item) => (
                <div className="flex flex-col space-x-2 " key={item.id}>
                  <label className="font-bold px-2" htmlFor="">
                    {item.label}
                  </label>
                  <input
                    id={item.id}
                    className=" px-2 py-2 input"
                    type={item.input}
                    onChange={handleInput}
                  />
                </div>
              ))}
            </div>
            {productInputs.slice(3, 4).map((item) => (
              <div className="flex flex-col space-x-2 mt-4 " key={item.id}>
                <label className="font-bold px-2" htmlFor="">
                  {item.label}
                </label>
                <textarea
                  id={item.id}
                  className=" input"
                  type={item.input}
                  onChange={handleInput}
                />
              </div>
            ))}

            <button
              className="px-4 py-4 mx-2 w-full mr-6 bg-amber-400 mt-4 space-x-2 disabled:bg-slate-500"
              onClick={handleSubmit}
              disabled={per !== null && per < 100}
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
