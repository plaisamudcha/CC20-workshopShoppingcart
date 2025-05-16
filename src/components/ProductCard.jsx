export default function ProductCard (props) {
  const {productItem:{id,image,price,category,description,title,rating},addToCart} = props
  return (
 <li className="list-row">
      <div>
        <img className="size-10 rounded-box" src={image} />
      </div>
      <div>
        <div>{title}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {category}
        </div>
      </div>
      <p className="list-col-wrap text-xs">{description}</p>
      <button className="btn">{price}</button>
      <button className="btn" onClick={()=>addToCart(id,title,price)} >Add to Cart</button>
    </li>
  )
}