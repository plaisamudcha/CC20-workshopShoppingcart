import CartItem from "./CartItem"

export default function CartSummary (props) {
  const {carts} = props
  return (
    <div className=" w-1/3">
      <h2>Cart Item :</h2>
      <CartItem />
    </div>
  )
}