import { useState } from "react";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home </li>
                    <li>About </li>
                    <li>Contact Us </li>
                    <li>Cart </li>
                    <button className="login-btn" onClick={() => {

                    }}>{btnLogin}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;