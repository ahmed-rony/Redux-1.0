import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Action/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    // console.log(props.products,'00', props.cart, '00' , props);
    const {products, addToCart} = props;
    return (
        <div>
            <h2>Shop</h2>
            {products.map(pd => <Product addToCart={addToCart} key={pd.id} products={pd}></Product>)}
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart: state.cart,
        products: state.products
    }
    
}
const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop);

//  short cut code;====================
// connect( mapStateToProps, mapDispatchToProps )(Shop)

export default connect( mapStateToProps, mapDispatchToProps )(Shop);