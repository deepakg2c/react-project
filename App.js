import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";

const RestoCard = ({ name, address, price, rating, image }) => {
    const [imgError, setImgError] = useState(false);
    if (imgError) return null;
    return (
        <div className="resto-card">
            <img
                className="resto-image"
                src={image}
                alt={name}
                onError={() => setImgError(true)} // if image fails, hide card
            />
            <h2>{name}</h2>
            <h4>{address}</h4>
            <h4>{price}</h4>
            <h4>{rating}</h4>

        </div>
    )
}
const restoData = [
    {
        id: 1,
        name: "Swami Narayan",
        location: "Kubadthal",
        price: 15,
        rating: 5,
        image:
            "https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg",
    },
    {
        id: 2,
        name: "Pizza Hut",
        location: "Ahmedabad",
        price: 299,
        rating: 4,
        image: "https://img.freepik.com/free-vector/pizza-logo-design_25327-119.jpg",
    },
    {
        id: 3,
        name: "Domino's Pizza",
        location: "Gandhinagar",
        price: 249,
        rating: 4,
        image:
            "https://img.freepik.com/free-vector/pizza-delivery-logo_25327-1196.jpg",
    },
    {
        id: 4,
        name: "KFC",
        location: "Maninagar",
        price: 199,
        rating: 5,
        image:
            "https://img.freepik.com/free-vector/chicken-bucket-logo_25327-1305.jpg",
    },
    {
        id: 5,
        name: "Subway",
        location: "Bopal",
        price: 150,
        rating: 4,
        image:
            "https://img.freepik.com/free-vector/sandwich-logo-design_25327-112.jpg",
    },
    {
        id: 6,
        name: "Haldiram's",
        location: "Navrangpura",
        price: 120,
        rating: 5,
        image:
            "https://img.freepik.com/premium-vector/indian-sweets-logo_25327-1455.jpg",
    },
    {
        id: 7,
        name: "Burger King",
        location: "CG Road",
        price: 180,
        rating: 4,
        image:
            "https://img.freepik.com/free-vector/burger-logo-template_441059-25.jpg",
    },
    {
        id: 8,
        name: "Bikanervala",
        location: "Paldi",
        price: 90,
        rating: 3,
        image:
            "https://img.freepik.com/premium-vector/indian-food-restaurant-logo_25327-1215.jpg",
    },
    {
        id: 9,
        name: "Coffee Culture",
        location: "Thaltej",
        price: 220,
        rating: 5,
        image:
            "https://img.freepik.com/free-vector/coffee-shop-logo_25327-127.jpg",
    },
    {
        id: 10,
        name: "Barbeque Nation",
        location: "Prahladnagar",
        price: 499,
        rating: 5,
        image:
            "https://img.freepik.com/free-vector/barbeque-grill-logo_25327-1185.jpg",
    },
];

const Body = () => {

    return (
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                {restoData.filter((abc) => abc.image).map((abc) => (
                    <RestoCard
                        key={abc.id}
                        name={abc.name}
                        location={abc.location}
                        price={abc.price}
                        rating={abc.rating}
                        image={abc.image}
                    />
                ))}

            </div>
        </div>

    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const Header = () => {
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
                </ul>
            </div>

        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)