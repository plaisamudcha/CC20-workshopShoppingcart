import { useEffect,useState } from 'react'
import Header from './components/Header'
import ProductList from "./components/ProductList"
import CardSummary from "./components/CartSummary"

function App() {
  const [products,setProducts] = useState([])
  const [carts,setCarts] = useState([])
  return (
    <div className='flex flex-col h-screen'>
      <Header itemCount = {carts.length} />
      <div className="flex flex-1">
        <ProductList products = {products}/>
        <CardSummary carts = {carts} />
      </div>
    </div>
  )
}

export default App
