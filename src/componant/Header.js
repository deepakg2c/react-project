import { useState } from "react";
import { Link } from "react-router-dom";
import Body from "./Body";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/menu">Cart</Link></li>
                    <button className="login-btn" onClick={() => {

                    }}>{btnLogin}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;