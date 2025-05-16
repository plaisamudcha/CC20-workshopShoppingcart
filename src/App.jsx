import { useEffect,useState } from 'react'
import Header from './components/Header'
import ProductList from "./components/ProductList"
import CardSummary from "./components/CartSummary"

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className="flex flex-1">
        <ProductList />
        <CardSummary />
      </div>
    </div>
  )
}

export default App
