import React, { useContext } from 'react'
import './CoffeDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import CoffeItem from '../CoffeItem/CoffeItem'

const CoffeDisplay = ({category}) => {

    const {coffe_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Descubre lo que preparamos con amor</h2>
      <div className="coffe-display-list">
        {coffe_list.map((item, index)=>{

            if (category==="All" || category===item.category) {
                return <CoffeItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
      </div>
    </div>
  )
}

export default CoffeDisplay
