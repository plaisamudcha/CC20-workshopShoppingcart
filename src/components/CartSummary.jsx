import CartItem from "./CartItem"

export default function CartSummary (props) {
  const {carts,decQuantity,addToCart} = props
  return (
    <div className=" p-4 w-1/3 flex flex-col gap-4">
      <h2 className="border border-gray-500 text-2xl rounded p-2 w-auto inline">Cart Item :</h2>
      {carts.length === 0 && <p>Empty Cart</p>}
      <div className="flex flex-col gap-2.5">
        {carts.map (el => <CartItem key={el.id} item={el} decQuantity = {decQuantity} addToCart = {addToCart} />)}
      </div>
    </div>
  )
}