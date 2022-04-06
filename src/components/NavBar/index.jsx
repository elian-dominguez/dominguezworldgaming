import './style.css'
import Navbar from 'rsuite/Navbar';
import Nav from 'rsuite/Nav';
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const NavBar = () => {
  const { cartList } = useCartContext()
  let itemInCart = 0;

  cartList.map((item) => {
    itemInCart += item.cantidad
  })

  return (
      <Navbar>
        <Navbar.Brand>
            <NavLink to='/' >World Gaming</NavLink>
        </Navbar.Brand>
        <Nav>
            <Nav.Item>
                <NavLink to='/categoria/playstation'>PlayStation</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to='/categoria/xbox'>Xbox</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to='/categoria/nintendo'>Nintendo</NavLink>
            </Nav.Item>
              {/* <Nav.Item>Inicio</Nav.Item>
              <Nav.Item>PlayStation</Nav.Item>
              <Nav.Item>Xbox</Nav.Item>
              <Nav.Item>Nintendo</Nav.Item>
              <NavLink to='/categoria/pc'>PC</NavLink> */}
              {/* <Dropdown title="About">
                  <Dropdown.Item>Company</Dropdown.Item>
                  <Dropdown.Item>Team</Dropdown.Item>
                  <Dropdown.Item>Contact</Dropdown.Item>
              </Dropdown> */}
        </Nav>
          <Nav pullRight>
            <Nav.Item>
          <NavLink to='/cart'><MdShoppingCart size={25} />{cartList.length === 0 ? "" : itemInCart}</NavLink>
            </Nav.Item>  
          </Nav>
      </Navbar>
  );
}
//       <Navbar collapseOnSelect expand="lg" className='colorNav' variant="dark">
//           <Container>
//               <NavLink to='/' >World Gaming</NavLink>
//               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//               <Navbar.Collapse id="responsive-navbar-nav">
//                   <Nav className="me-auto">
//                       <NavLink to='/categoria/pc'>PC</NavLink>
//                       <NavLink to='/categoria/playstation'>PlayStation</NavLink>
//                       <NavLink to='/categoria/xbox'>Xbox</NavLink>
//                       <NavLink to='/categoria/nintendo'>Nintendo</NavLink>
//                   </Nav>
//                   <Nav>
//                       <NavLink to='/cart'>
//                         <CartWidget/> 
//                         {/* <Nav.Link eventKey={2} href="#memes">
//                             Dank memes
//                         </Nav.Link> */}
//                       </NavLink>
//                   </Nav>
//               </Navbar.Collapse>
//           </Container>
//       </Navbar>
//   )
// }

export default NavBar