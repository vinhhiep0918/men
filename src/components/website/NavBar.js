import React from 'react'
import { NavLink } from 'react-router-dom';
import './hearder.css'

const NavBar = () => {
    return (
        <ul>
            <li className="nav-item">
                <NavLink  style={{color:'black'}} className="nav-link" to="/men">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={{color:'black'}} className="nav-link" to="/men/new">News</NavLink>
            </li>
            <li className="nav-item">
                <NavLink  style={{color:'black'}} className="nav-link" to="/men/bestselling">Quần</NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={{color:'black'}} className="nav-link" to="/Shirt">Áo</NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={{color:'black'}} className="nav-link" to="/Suit">Bộ</NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={{color:'black'}} className="nav-link" to="/Suit">Giày</NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={{color:'black'}} className="nav-link" to="/Suit">Phụ Kiện</NavLink>
            </li>
        </ul>
    )
}

export default NavBar
