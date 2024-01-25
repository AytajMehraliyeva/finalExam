import React, { useContext } from 'react'
import MainContext from '../../context'

const Basket = () => {
  const{basket}=useContext(MainContext)
  return (
    <div>
      {basket.map((item,index)=>(
        <div>
          <p>{item.name}</p>
        </div>
      ))}
    
    </div>
  )
}

export default Basket