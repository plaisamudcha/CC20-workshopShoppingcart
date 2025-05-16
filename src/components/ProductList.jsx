import { useState } from "react"
import ProductCard from "./ProductCard"

export default function Productlist (props) {
  const {products,addToCart} = props
  return (
    <div className=" p-4 w-2/3 ">
      <h2 className="border border-gray-500 text-2xl rounded p-2 w-auto inline">Product List :</h2>
      <div className="list bg-base-100 rounded-box shadow-md p-4">
        {products.map(el => (
          <ProductCard key={el.id} productItem = {el} addToCart = {addToCart} />
        ))}
        {/* <pre>{JSON.stringify(products,null,2)}</pre> */}
      </div>
    </div>
  )
}