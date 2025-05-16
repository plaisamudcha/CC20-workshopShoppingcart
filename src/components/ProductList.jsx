import { useState } from "react"
import ProductCard from "./ProductCard"

export default function Productlist (props) {
  const {products} = props
  return (
    <div className="bg-secondary basis-2/3">
      <h2>Product List :</h2>
      <ProductCard />
    </div>
  )
}