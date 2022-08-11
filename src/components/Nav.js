import React, { useState, useEffect } from 'react';
import './Nav.css';
import logo from '../img/Logonetflix.png';
import avatar from '../img/icn_avatar.png';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setsearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    })

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [])

  const handleChange = (e) => {
    setsearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)
  }

  return ( 
    // you can also write as ${show && "nav_black"}
    <nav className={`nav ${show === true ? "nav_black" : ""}`}>
      <img 
        src={logo}
        alt="Netflix logo" 
        className='nav_logo'
        onClick={() => window.location.reload()}
      />

      <input 
        value={searchValue}
        onChange={handleChange}
        className="nav_input"
        type="text"
        placeholder="Title, Genre, People"
      />

      <img 
        src={avatar}
        alt="user avatar"
        className='nav_avatar'
      />
    </nav>
  )
}
