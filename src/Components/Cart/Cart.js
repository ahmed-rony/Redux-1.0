import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Action/cartActions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    console.log(props.cart, 'cart');
    return (
        <div >
            <h2>Cart</h2>
            <ul>
                {
                    cart.map(pd => <li key={pd.id}>{pd.name} <button onClick={() => removeFromCart(pd.id)}>X</button> </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart: state.cart
    }
}
const mapDispatchToProps ={
    removeFromCart: removeFromCart
}

export default connect( mapStateToProps, mapDispatchToProps)(Cart);