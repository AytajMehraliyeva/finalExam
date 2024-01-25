import React, { useContext } from 'react'
import MainContext from '../../context'
import './Wishlist.scss'
import { Toaster } from 'react-hot-toast'

const Wishlist = () => {
    const{wishlist,removeWishlist}=useContext(MainContext)
    console.log(wishlist)
  return (
    <div className='wishlist'>
        {wishlist.map((item,index)=>(
            <div className='wishCard' key={index}>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <button onClick={()=>{removeWishlist(item._id)}}>Delete</button>
                <Toaster/>
            </div>
        ))}
    </div>
  )
}

export default Wishlist