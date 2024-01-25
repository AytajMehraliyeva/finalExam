import React, { useContext } from 'react'
import './Card.scss'
import MainContext from '../context'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
const Card = ({item,index}) => {
const{addToWishlist}=useContext(MainContext)
  return (
    
        <div key={index} className='card' id='card'>
            <img src={item.img} alt="" />
            <div className='cardBody'>
                <p>{item.name}</p>
            <p><b>Price:</b> {item.price} Azn</p>
            <button onClick={()=>{addToWishlist(item)}}>Wishist</button> <br />
            <Toaster/>
            <Link to={`/${item._id}`}>Detail</Link>
            </div>
        </div>
        

  )
}

export default Card