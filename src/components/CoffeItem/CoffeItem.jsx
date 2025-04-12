import React, { useContext } from 'react'
import './CoffeItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const CoffeItem = ({id, name, price, description, image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='coffe-item'>
      <div className="coffe-item-image-container">
        <img className='coffe-item-image' src={image} alt="" />
        {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            :<div className='coffe-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="coffe-item-info">
        <div className="coffe-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="coffe-item-desc">{description}</p>
        <p className="coffe-item-price">${price} COP</p>
      </div>
    </div>
  )
}

export default CoffeItem
