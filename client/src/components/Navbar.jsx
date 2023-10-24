import React, {useContext} from "react";

import {AuthContext} from "../context/authContext";

import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const {currentUser, logout} = useContext(AuthContext);

  const handleClick = ()=>{
    if(currentUser){
      navigate("/write")
    }
    else{
      navigate("/login");
      alert("You need to be logged in to create a post.");
    }
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" className="brand">
            <span>Posts Gallery</span>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>ALL</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>Logout</span>: <Link className="link" to="/login">Login</Link>}
          <span className="write">
            <div className="link" onClick={handleClick}>Create</div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
