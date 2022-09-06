import Image from "next/image";

const Category = (category) => {
  //    var splitItems = category[0].slice(0,4).map(item=>{
  //     return item.name
  //    })
  //     console.log(splitItems)
  return (
    <div className="bg-white px-4 py-6 h-[200px] sm:h-[400px] relative">
      <p className="capitalize font-bold text-xl">{category[0]?.category}</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {Object.entries(category)
          .slice(0, 4)
          .map((entry) => {
            let key = entry[0];
            let value = entry[1];

            return (
              <div className="cursor-pointer">
                <Image
                  src={value.image}
                  width={100}
                  height={100}
                  objectFit="contain"
                />
                <p className="text-xs max-w-[140px] line-clamp-2">
                  {value.title}
                </p>
              </div>
            );
          })}
      </div>
      <p className="text-xs sm:text-sm absolute bottom-3 link text-blue-400">
        See more
      </p>
    </div>
  );
};

export default Category;
