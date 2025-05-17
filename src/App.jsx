import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CardSummary from "./components/CartSummary";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const fetchProducts = () => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (id, title, price) => {
    let idx = carts.findIndex((el) => el.id === id);
    if (idx === -1) {
      let newItem = { id: id, title: title, price: price, quantity: 1 };
      setCarts([...carts, newItem]);
    } else {
      const clonedCard = [...carts];
      clonedCard[idx].quantity += 1;
      setCarts(clonedCard);
    }
  };

  const decQuantity = (id) => {
    let idx = carts.findIndex((el) => el.id === id);
    const clonedCart = [...carts];
    if (clonedCart[idx].quantity > 1) {
      clonedCart[idx].quantity -= 1;
      setCarts(clonedCart);
    } else {
      clonedCart.splice(idx, 1);
    }
    setCarts(clonedCart);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/12 bg-accent-content">
        <Header itemCount={carts.length} />
      </div>
      <div className="flex h-11/12">
        <ProductList products={products} addToCart={addToCart} />
        <CardSummary
          carts={carts}
          decQuantity={decQuantity}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default App;
