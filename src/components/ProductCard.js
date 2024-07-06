import { add, remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./ProductCard.css";
import { useLocal } from "../hooks/useLocal";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const {id, name, price, image} = product;

  const addRem = useSelector(state => state.cartState.cList);
  const [isThere, setIsThere] = useState(false);
  useLocal();

  useEffect(() => {
    const buttonStatus = addRem.find(eachCard => eachCard.id === id);

    if(buttonStatus){
      setIsThere(true);
    } else{
      setIsThere(false);
    }
  },[id, addRem]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>&#x20b9; {price}</p>

        {
          isThere
          ?
          <button className="remove" onClick={() => dispatch(remove(product))}>Remove</button>
          :
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        }

      </div>
    </div>
  )
}
