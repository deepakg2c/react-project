const RestoCard = ({ allRestoData }) => {
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = allRestoData?.info || {};

    return (
        <div className="resto-card">
            <div className="image-container">
                <img
                    className="resto-image"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                    alt={name}
                />
            </div>
            <h2 className="resto-name">{name}</h2>
            <p className="resto-address">{cuisines?.join(", ")}</p>

            <div className="price-rating">
                <span className="delivery-time"> {sla?.deliveryTime} min</span>
                <span className="price">{costForTwo}</span>
                <span className="rating">⭐ {avgRating}</span>
            </div>
        </div>
    );
};

export default RestoCard;
