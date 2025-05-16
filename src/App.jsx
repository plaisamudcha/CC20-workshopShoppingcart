import { useEffect,useState } from 'react'
import Header from './components/Header'
import ProductList from "./components/ProductList"
import CardSummary from "./components/CartSummary"

function App() {
  const [products,setProducts] = useState([])
  const [carts,setCarts] = useState([])

  const fetchProducts = () => {
    fetch('http://localhost:8000/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className='flex flex-col min-h-screen'>
      <Header itemCount = {carts.length} />
      <div className="flex flex-1">
        <ProductList products = {products}/>
        <CardSummary carts = {carts} />
      </div>
    </div>
  )
}

export default App
