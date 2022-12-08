const Card = ({imagelink,rating,reviewCount, country,title,price, spots}) => {
    
    console.log(spots)
    return (
        <div className="card">
            { spots == 0 && <div className="card--badge">Sold out </div>}
            <img src={'images/' + imagelink}className="card--image"  alt="card image"/>
            <div className="card--stats">
                <img  className="card--star" src='/images/star.png' alt="card star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount})	&middot; </span>
                <span className="gray">{country} </span>
            </div>
            
            <p>{title}</p>
            <p className="card--price"> <span className="bold">From {price} </span> / person </p>
        </div>
    )

}

export default Card