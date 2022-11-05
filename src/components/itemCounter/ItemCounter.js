import React, {useState} from 'react'
import "./ItemCounter.css"
import Button from "../button/Button";

function ItemCount({stock, onAddToCart}) {
  const [count, setCount] = useState(1);

  function handleAdd (){
    if (count < stock) setCount(count + 1);
  }
  
  function handleSubstract (){
    if (count > 1) setCount(count - 1)
  }

  return (
  <div>
    <div className="itemCount">
      <button className="itemSubstract" onClick={handleSubstract}>-</button>
      <span>{count}</span>
      <button className="itemAdd" onClick={handleAdd}>+</button>
      <Button onClick={ () => onAddToCart(count)} text=" Agregar al carrito" />
    </div>
  </div>
  );
}
  
export default ItemCount;