import CartItem from "./CartItem"

export default function CartSummary () {
  return (
    <div className="bg-accent basis-1/3">
      <h2>Cart Item :</h2>
      <CartItem />
    </div>
  )
}