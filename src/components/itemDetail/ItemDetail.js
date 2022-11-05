import React, {useContext, useState} from "react";
import './ItemDetail.css';
import ItemCounter from '../itemCounter/ItemCounter';
import {cartCtx} from '../../context/CartContext';
import {Link} from "react-router-dom";

function ItemDetail({data}) {

    const [isInCart, setIsInCart] = useState(false);

    const {addItem} = useContext(cartCtx);

    function handleAddToCart(count) {
        addItem(data, count)
        setIsInCart(true);
    }

  return(

    <div className="ItemDetail">
        <div className="ItemDetail-img">
            <img src={data.img} alt="img"></img>
        </div>
        <div className="ItemDetail-detail">
            <h2> Nike {data.title}</h2>
            <h4> $ {data.price} </h4>
            <p> {data.detail}</p>
            { data.stock === 0 && <span className="ItemDetail-stock"> PRODUCTO SIN STOCK</span> }
            { (isInCart) ? <div className="botonesDetail"><Link to='/cart' className="goToCart"> Ir Al Carrito </Link> <Link to='/inicio' className="goToMain"> Seguir Comprando </Link></div>  : <ItemCounter className='ItemCounter' stock={data.stock} onAddToCart={handleAddToCart}/> }
        </div>
    </div>
)
}

export default ItemDetail