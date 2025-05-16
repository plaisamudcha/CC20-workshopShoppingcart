export default function CartItem (props) {
  const {item:{id,title,price,quantity},decQuantity,addToCart} = props
  return (
    <div className="flex justify-between p-2 bg-accent-content rounded-md items-baseline">
      <p className="">{title.split(' ')[0]}</p>
      <div className="flex gap-1.5">
        <button onClick={() => {decQuantity(id)}} className="btn">-</button>
        <button onClick={() => {addToCart(id)}} className="btn">+</button>
      </div>
      <p>{quantity}*{price}</p>
    </div>
  )
}