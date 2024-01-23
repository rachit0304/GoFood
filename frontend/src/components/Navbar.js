import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Cart from '../screens/Cart';
import Modal from '../Modal';
import { useCart } from './ContextReducer';


export default function Navbar() {

  const [cartView, setCartView] = useState(false)
  const [account , setAccount] = useState(false)
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2">
      <li className="nav-item ">
        <Link className="nav-link active fs-5 my-2 py-2 mx-2" to="/">Home <span className="sr-only"></span></Link>
      </li>

      {
        (localStorage.getItem("authToken"))
        ? 
        <li className="nav-item ">
        <Link className="btn bg-white text-success my-3" to="/myorders">My Orders <span className="sr-only"></span></Link>
        {/* <Link className="btn bg-white text-success mx-2" style={{width : '150px'}} to="/" onClick={()=>{setCartView(true)}}>My Account {" "} <span className="sr-only"></span></Link> */}

        </li>
        : ""}
     
     
    </ul>

    <div className='d-flex'>
    {
        (!localStorage.getItem("authToken"))
        ? 
        <>
        <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
      
        <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
        </>
        : <>
        <Link className="btn bg-white text-success mx-2" style={{width : '60px'}} to="/" onClick={()=>{setCartView(true)}}>Cart {" "} <Badge pill bg="danger">{data.length}</Badge> <span className="sr-only"></span></Link>

       {cartView ? <Modal onClose={()=>{setCartView(false)}} ><Cart/></Modal>:null}
        <Link className="btn bg-white text-danger mx-2" to="/login" onClick={handleLogout}>Logout <span className="sr-only"></span></Link>
        </>
        }
    
       
    
    </div>
   
  </div>
</nav>
    </div>
  )
}
