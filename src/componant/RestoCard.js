const RestoCard = ({ name, address, price, rating, image }) => {

    return (
        <div className="resto-card">
            <img
                className="resto-image"
                src={image}
                alt={name}
        
            />
            <h2>{name}</h2>
            <h4>{address}</h4>
            <h4>{price}</h4>
            <h4>{rating}</h4>

        </div>
    )
}

export default RestoCard;