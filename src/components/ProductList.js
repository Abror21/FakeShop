import axios from 'axios';
import { useState, useEffect } from 'react'
import Product from './Product';

const ProductList = () => {
    const [items, setItems] = useState([]);
    
    const fetchProducts = async() => {
        const response = await axios.get('https://fakestoreapi.com/products').catch(err => console.log('Err', err));
        setItems(response.data)
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    return (
        <div className="ui link centered cards container ">
            {
                items.map(item => {
                    return(
                        <Product key={item.id} item={item}/>
                    )
                })
            }
        </div>
    )
}

export default ProductList;