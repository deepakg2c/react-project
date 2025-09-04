import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Body = () => {
    const { resId } = useParams();
    console.log("resId", resId);
    const [allRestoData, setAllRestoData] = useState([]);  // store all data
    const [filteredRestoData, setFilteredRestoData] = useState([]); // store filtered data
    const [searchText, setSearchText] = useState("");      // store input value

    const IMG_CDN_URL =
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();

            const restaurants =
                json?.data?.cards?.find(
                    (c) => c?.card?.card?.id === "restaurant_grid_listing_v2"
                )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setAllRestoData(restaurants);
            setFilteredRestoData(restaurants);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    };

    if (allRestoData.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            {/* Search Section */}
            <div className="search-con">
                <div className="search">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            const filtered = allRestoData.filter((r) =>
                                r.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestoData(filtered);
                        }}
                    >
                        Search
                    </button>
                </div>

                <div>
                    <button
                        className="Filter"
                        onClick={() => {
                            const filtered = allRestoData.filter(
                                (r) => r.info?.avgRating > 4
                            );
                            setFilteredRestoData(filtered);
                        }}
                    >
                        Filter Restaurants
                    </button>
                </div>
            </div>

            {/* Restaurant Cards */}
            <div className="res-container">
                {filteredRestoData.length > 0 ? (
                    filteredRestoData.map((restaurant, index) =>
                        restaurant?.info ? (
                            <Link key={restaurant.info.id} to={`/menu/${restaurant.info.id}`}>
                                <RestoCard allRestoData={restaurant} />
                            </Link>
                        ) : null
                    )
                ) : (
                    <h3>No restaurants found</h3>
                )}
            </div>
        </div>
    );
};

export default Body;
