import React from 'react';
import Navbar from 'rsuite/Navbar';
import Nav from 'rsuite/Nav';
import Dropdown from 'rsuite/Dropdown';
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const NavBar = () => {
  const { cartList } = useCartContext()
  let itemInCart = 0;

  cartList.map((item) => {
    itemInCart += item.quantity
  })

  return (
      <Navbar className='navBar'>
        <NavLink className='logo' to='/' >World Gaming</NavLink>
        <NavLink className='playstation' to='/category/playstation'>PlayStation</NavLink>
        <NavLink className='xbox' to='/category/xbox'>Xbox</NavLink>
        <NavLink className='nintendo' to='/category/nintendo'>Nintendo</NavLink>
        <NavLink className='cartLink' to='/cart'><MdShoppingCart size={25} />
          {
          cartList.length === 0 ? "" : itemInCart
          }
        </NavLink>
      </Navbar>
  );
}

export default NavBar