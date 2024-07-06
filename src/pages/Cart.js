import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useSelector } from "react-redux";
import { useLocal } from "../hooks/useLocal";


export const Cart = () => {
  useTitle("Cart");
  
  const cartProducts = useSelector(state => state.cartState.cList);
  const total = useSelector(state => state.cartState.sum)
  useLocal();

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartProducts.length} | Total: &#x20b9; {total}</h1>
        { 
          cartProducts.map((product) => (
            <CartCard key={product.id} product={product} />
          ))
        }        
      </section>
    </main>
  )
}
