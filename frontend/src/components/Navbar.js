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
     <nav className="navbar navbar-expand-lg">
      <div class="container-fluid">
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="mobile-search" role="search">
            <input style={{"width" : "35vw" }} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
  <Link className="navbar-brand" to="/">GoFood</Link>

  <div className="collapse navbar-collapse nav-temp" id="navbarSupportedContent">

    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {/* <li className="nav-item">
        <Link className="nav-link" to="/">
        Home <span className="sr-only"></span></Link>
      </li>
      <li>
            <Link to="/" className="nav-link link-dark">
              About</Link>
      </li>
      <li>
            <Link to="#" className="nav-link link-dark">
              Contact Us</Link>
      </li> */}

      </ul>
     

       <div className='d-flex'>
       <input style={{"width" : "25vw"}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

    {
        (!localStorage.getItem("authToken"))
        ? 
        <>
       
        <Link className="btn btn-outline-primary btn-sm btn-f" to="/login">Login</Link>
      
        <Link className="btn btn-outline-success btn-sm btn-f" to="/createuser">Signup</Link>
        </>
        : <>
        <Link className="btn bg-white text-success mx-2" style={{width : '60px'}} to="/" onClick={()=>{setCartView(true)}}>Cart {" "} <Badge pill bg="danger">{data.length}</Badge> <span className="sr-only"></span></Link>

       {cartView ? <Modal onClose={()=>{setCartView(false)}} ><Cart/></Modal>:null}
        <Link className="btn bg-white text-success myorders my-0"   to="/myorders">My Orders <span className="sr-only"></span></Link>
        <Link className="btn bg-white text-danger mx-2" to="/login" onClick={handleLogout}>Logout <span className="sr-only"></span></Link>
        <li className="nav-item ">
   
        {/* <Link className="btn bg-white text-success mx-2" style={{width : '150px'}} to="/" onClick={()=>{setCartView(true)}}>My Account {" "} <span className="sr-only"></span></Link> */}

        </li>
        </>
        }
    
    
    </div>
     

    </div>

  

  </div>
</nav>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{"width" : "280px"}}>
     
        <ul class="nav nav-pills flex-column mb-auto">
          {/* <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              <svg class="bi me-2" width="16" height="16"></svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"></svg>
              About
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"></svg>
              Contact US
            </a>
          </li> */}
        </ul>

        {
        (!localStorage.getItem("authToken"))
        ? 
        <>
       
        <Link className="btn btn-outline-primary btn-sm btn-f" to="/login">Login</Link>
      
        <Link className="btn btn-outline-success btn-sm btn-f" to="/createuser">Signup</Link>
        </>
        : <>
        <Link className="btn bg-white text-success mx-2" style={{width : '60px'}} to="/" onClick={()=>{setCartView(true)}}>Cart {" "} <Badge pill bg="danger">{data.length}</Badge> <span className="sr-only"></span></Link>

       {cartView ? <Modal onClose={()=>{setCartView(false)}} ><Cart/></Modal>:null}
        <Link className="btn bg-white text-danger mx-2" to="/login" onClick={handleLogout}>Logout <span className="sr-only"></span></Link>
        <li className="nav-item ">
        <Link className="btn bg-white text-success myorders my-0"   to="/myorders">My Orders <span className="sr-only"></span></Link>
        {/* <Link className="btn bg-white text-success mx-2" style={{width : '150px'}} to="/" onClick={()=>{setCartView(true)}}>My Account {" "} <span className="sr-only"></span></Link> */}

        </li>
        </>
        }
      
        <hr />
        <form class="mobile-search-menu" role="search">
          <input style={{"width" : "25vw"}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
  
      </div>
      </div>

    </div>
  )
}
