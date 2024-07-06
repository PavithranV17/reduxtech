import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.svg"
import "./Header.css";

export const Header = () => {

const cartProducts = useSelector(state => state.cartState.cList);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>ReduxTech</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart - {cartProducts.length}</span>
      </Link>
    </header>
  )
}
