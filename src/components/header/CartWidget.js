import React, {useContext} from 'react';
import {cartCtx} from '../../context/CartContext';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * as iconList from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import './Header.css'

function CartWidget() {
  const {getTotalItemsInCart} = useContext(cartCtx);

  return (
    <div >
      <Link to='/cart' className="icon">
        {/* <FontAwesomeIcon icon={ iconList.faCartShopping } className="iconoCarrito" /> */}
        <span>{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</span>
      </Link>
    </div>
  )
}

export default CartWidget