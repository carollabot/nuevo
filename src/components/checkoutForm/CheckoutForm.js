import React, {useState, useContext} from 'react'
import {useNavigate} from "react-router-dom";
import {cartCtx} from '../../context/CartContext';
import { createBuyOrder } from '../../services/firestore';
import './CheckoutForm.css'

function CheckoutForm() {
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const context = useContext(cartCtx);
    const navigate = useNavigate()
    const {cart, getTotalItemsInCart, emptyCart} = context;

    function handleCheckOut(event){
        event.preventDefault();
        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: getTotalItemsInCart(),
        };
        createBuyOrder(orderData).then( orderId=> {
            navigate(`/checkout/${orderId}`)
        })
        emptyCart()
    }

    function inputChangeHandler(event) {
        let inputName = event.target.name;
        let value = event.target.value;
        
        const newDataForm = {...dataForm};
        newDataForm[inputName] = value;
        setDataForm(newDataForm)
    }

  return (
    <div className='formulario'>
        <form onSubmit={handleCheckOut}>
            <div>
                <label htmlFor='name'> Nombre </label>
                <input 
                    className='itemsFormulario'
                    value={dataForm.name}
                    onChange={inputChangeHandler}
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    required
                />
            </div>

            <div>
                <label htmlFor='telefono'> Telefono </label>
                <input 
                    className='itemsFormulario'
                    value={dataForm.phone}
                    onChange={inputChangeHandler}
                    name="phone"
                    type="number"
                    placeholder="Telefono"
                    required
                />
            </div>

            <div>
                <label htmlFor='email'> Email </label>
                <input 
                    className='itemsFormulario'
                    value={dataForm.email}
                    onChange={inputChangeHandler}
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                />
            </div>
            <button className='CartViewDeleteAll' type='submit' onClick={handleCheckOut}> Finalizar Compra</button>
        </form>
    </div>
  )
}

export default CheckoutForm;