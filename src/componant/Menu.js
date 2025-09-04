import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Menu = () => {
    const { id } = useParams();
    console.log("resId", id);
    const [menuItem, setMenuItem] = useState([]);
    const ids = "1003414";

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${234875}&catalog_qa=undefined&submitAction=ENTER`

            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await data.json();
        const itemCards =
            json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ||
            [];

        setMenuItem(itemCards);
    };

    return (
        <div>
            <h1>This is Menu page</h1>
            {menuItem.length > 0 ? (
                menuItem.map((item, index) => {
                    const info = item?.card?.info;
                    return (
                        <div key={index} className="menu-item">
                            <h3>{info?.name}</h3>
                            <p>Price: ₹{(info?.price || info?.defaultPrice) / 100}</p>
                        </div>
                    );
                })
            ) : (
                <p>Loading menu items...</p>
            )}
        </div>
    );
};

export default Menu;
