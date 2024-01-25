import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className='headernav'>
            <p>Eatwell</p>

            <ul>
                <Link to={""}><li>Home</li></Link>
                <Link to={"wishlist"}><li>Wishlist</li></Link>
                <Link to={"add"}><li>Add</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header