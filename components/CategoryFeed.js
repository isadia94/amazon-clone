import Category from "./Category"


const CategoryFeed = ({products}) => {



  let electronics= products.filter(product => product.category === "electronics").map((product, id)=>{
    return product
  })
  let mens= products.filter(product => product.category === "men's clothing").map((product, id)=>{
    return product
  })
  let jewelery= products.filter(product => product.category === "jewelery").map((product, id)=>{
    return product
  })
  let womens= products.filter(product => product.category === "women's clothing").map((product, id)=>{
    return product
  })
 
  
 
  return (
    <div className="relative sm:-mt-80 sm:z-30">
      <div className="grid grid-cols-3 mx-auto max-w-5xl gap-4">
        <Category {...electronics} />
        <Category {...mens} />
        <Category {...jewelery} />
        <Category {...womens} />
        
      </div>
        
    </div>
  )
}

export default CategoryFeed


