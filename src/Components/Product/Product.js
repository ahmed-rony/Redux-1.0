import React from 'react';

const Product = (props) => {
    const {name, id} = props.products;
    const {addToCart, products} = props;
    return (
        <div style={{border:'1px solid gold',padding:'10px'}}>
            <h2>{name}</h2>
            <button onClick={()=> addToCart(products.id)}>Add to cart</button>
        </div>
    );
};

export default Product;