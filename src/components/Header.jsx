import CartCount from "./CartCount" 

export default function Header() {
  return (
    <div className="flex justify-between h-15 bg-primary">
      <div>
        Logo&Brand
      </div>
      <CartCount />
    </div>
  )
}