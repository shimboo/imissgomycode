import React from 'react'
import { Link } from "react-router-dom"
import Photo from '../../src/photos/logo.png'
const Nav = () => {
    return (
        <div className='fr'>
            <a href='/'>
                <img className='sora' src={Photo} alt='logo' />
            </a>
            <ul className="memo">
                <li><Link id='the' to='/Explore'>Explore</Link></li>
                <li><Link id='the' to='/AboutUs'>About Us</Link></li>
                <li><Link id='the' to='/Contact'>Contact</Link></li>
                <li><Link id='the' to='/Offers'>Offers</Link></li>
            </ul>
            <button className='bu'>
                <Link id='the' to='/BookNow'>BOOK NOW</Link>
            </button>

        </div >
    )
}

export default Nav