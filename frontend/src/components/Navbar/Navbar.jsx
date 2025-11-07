import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); 
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar'>
  
      <Link to="/" className="logo">
        ᑕᖇᗩᘔE
      </Link>

  
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => { setMenu("home"); setIsOpen(false); }} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <Link to="#explore-menu" onClick={() => { setMenu("menu"); setIsOpen(false); }} className={`${menu === "menu" ? "active" : ""}`}>Category</Link>
        <Link to="#app-download"  onClick={() => { setMenu("mob-app"); setIsOpen(false); }} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile App</Link>
         <Link to="#footer" onClick={() => { setMenu("contact"); setIsOpen(false); }} className={`${menu === "contact" ? "active" : ""}`}>Contact Us</Link>

        {!token ? (
    <button className="mobile-signin" onClick={() => { setShowLogin(true); setIsOpen(false); }}>Sign In</button>
  ) : (
    <>
        <Link to="/myorders" onClick={() => { setMenu("order"); setIsOpen(false); }} className={`${menu === "order" ? "active" : ""}`}>Order</Link>
      
    </>
  )}
      
      </ul>

  
      <div className="navbar-right">
   
        <lord-icon
          src="https://cdn.lordicon.com/yudxjmzy.json"
          trigger="hover"
          colors="primary:#e91e63,secondary:#e91e63"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>

       
        <Link to='/cart' className='navbar-search-icon'>
          <lord-icon
            src="https://cdn.lordicon.com/pmawqxvu.json"
            trigger="hover"
            colors="primary:#e91e63,secondary:#e91e63"
            style={{ width: "40px", height: "40px" }}>
          </lord-icon>
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>

        
        {!token ? (
          <button className="desktop-signin" onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <lord-icon
              src="https://cdn.lordicon.com/hroklero.json"
              trigger="hover"
              colors="primary:#e91e63,secondary:#e91e63"
              style={{ width: "40px", height: "40px" }}>
            </lord-icon>
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <lord-icon
                  src="https://cdn.lordicon.com/pulpyjje.json"
                  trigger="hover"
                  colors="primary:#e91e63,secondary:#e91e63"
                  style={{ width: "20px", height: "20px" }}>
                </lord-icon>
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <lord-icon
                  src="https://cdn.lordicon.com/daeumrty.json"
                  trigger="hover"
                  colors="primary:#f4a09c,secondary:#e91e63"
                  style={{ width: "20px", height: "20px" }}>
                </lord-icon>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}

      
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
