import CartCount from "./CartCount" 

export default function Header(props) {
  const {itemCount} = props
  return (
    <div className="flex justify-between h-15">
      <div>
        Logo&Brand
      </div>
      <CartCount itemCount = {itemCount} />
    </div>
  )
}