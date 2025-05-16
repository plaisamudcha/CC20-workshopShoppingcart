import { useState } from "react"
import CartItem from "./CartItem"

export default function CartSummary (props) {
  const {carts,decQuantity,addToCart} = props
  const total = carts.reduce((prev,curr) => prev+=curr.price*curr.quantity,0)
  const tax = total*0.07
  const sum = total + tax
  return (
    <div className=" p-4 w-1/3 flex flex-col gap-4">
      <h2 className="border border-gray-500 text-2xl rounded p-2 w-auto inline">Cart Item :</h2>
      {carts.length === 0 && <p>Empty Cart</p>}
      <div className="flex flex-col gap-2.5">
        {carts.map (el => <CartItem key={el.id} item={el} decQuantity = {decQuantity} addToCart = {addToCart} />)}
      </div>
      <hr />
      {carts.length > 0 && (
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between">
            <p>Item price</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>$0</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p className="underline decoration-double">${sum.toFixed(2)}</p>
          </div>
      </div>
      )}
    </div>
  )
}