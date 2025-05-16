import { useState } from "react"
import ProductCard from "./ProductCard"

export default function Productlist (props) {
  const {products} = props
  return (
    <div className=" w-2/3 ">
      <h2>Product List :</h2>
      <div className="list bg-base-100 rounded-box shadow-md p-4">
        {products.map(el => (
          <ProductCard key={el.id} productItem = {el}/>
        ))}
        {/* <pre>{JSON.stringify(products,null,2)}</pre> */}
      </div>
    </div>
  )
}