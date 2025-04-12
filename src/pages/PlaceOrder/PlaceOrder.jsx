import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Información de entrega</p>
        <div className="multi-fields">
          <input type="text" placeholder='Nombres' />
          <input type="text" placeholder='Apellidos' />
        </div>
        <input type="email" placeholder='Correo Electrónico' />
        <input type="text" placeholder='Calle' />
        <div className="multi-fields">
          <input type="text" placeholder='Ciudad' />
          <input type="text" placeholder='Estado' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Código postal' />
          <input type="text" placeholder='País' />
        </div>
        <input type="text" placeholder='Teléfono'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Total del Carrito</h2>
            <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tarifa de entrega</p>
              <p>${getTotalCartAmount()===0?0:2000}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2000}</p>
            </div>
            </div>
            <button>PROCEDER AL PAGO</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
