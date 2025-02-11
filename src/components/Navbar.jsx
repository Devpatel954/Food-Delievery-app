import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from './Context'


const Navbar = ({setshowLogin}) => {

    const [menu,setmenu] = useState('home')

    const{gettotal} = useContext(StoreContext)

  return (
    <div className='navbar'>
       <Link to='./'> <img src={assets.logo} alt="" className='logo'/></Link>
        <ul className="navbar-menu">
            <Link onClick={()=>setmenu('home')}className={menu==='home'?'active':''}>Home</Link>
            <a href='#exploremenu'onClick={()=>setmenu('menu')}className={menu==='menu'?'active':''}>menu</a>
            
            <a href='#footer'onClick={()=>setmenu('contact Us')}className={menu==='contact Us'?'active':''}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search">
                <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={gettotal()===0?'':'dot'}></div>
            
            </div>
            <button onClick={()=>setshowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar