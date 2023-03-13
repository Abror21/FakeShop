import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
    const { id, title, image, price, category } = item;

        return (
        <div className="card" key={id} style={{ maxWidth: '250px', }}>
            <Link to={`/product/${id}`}>
                <div className="image">
                    <img src={image} alt={title} style={{ maxHeight: '300px', objectFit: 'contain', padding: '15px', width: '100%' }} />
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                </div>
            </Link>
        </div >
    )
}

export default Product