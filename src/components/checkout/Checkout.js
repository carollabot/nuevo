import React from 'react'
import { useParams } from 'react-router-dom'
import './Checkout.css'

function Checkout() {
  const {orderId} = useParams();
  return (
    <div>
      <div className='checkoutFinal'> GRACIAS POR TU COMPRA! </div>
      <strong>El ID de tu compra es {orderId} !</strong>
    </div>

  )
}

export default Checkout