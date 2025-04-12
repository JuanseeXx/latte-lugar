import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems, coffe_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Producto</p>
          <p>Nombre</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Total</p>
          <p>Eliminar</p>
        </div>
        <br />
        <hr />
        {coffe_list.map((item, index)=>{
          if (cartItems[item._id]>0){
            return(
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
            <button onClick={()=>navigate('/Order')}>PROCEDER AL PAGO</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Si tienes un código promocional, ingrésalo aquí</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Código promocional' />
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
