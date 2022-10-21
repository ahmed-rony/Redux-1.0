import { ADD_TO_CART, REMOVE_FROM_CART } from "../Action/cartActions";

const initialState = {
    cart : [],
    products : [
        { name: 'iphone', id: 1},
        { name: 'Lenovo', id: 2},
        { name: 'Samsung', id: 3},
        { name: 'Redmi', id: 4},
        { name: 'Nokia', id: 5}
        
    ]
}

export const cartReducer = (state = initialState, action) =>{  // = die default value bujhay;
    switch (action.type) {
        case ADD_TO_CART:
            const newItem ={
                productId: action.id,
                name: state.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            // console.log(newCart, 'newcart');
            console.log(state.name, 'name');
            return {
                // products: state.products,  // etar bodole nichertao dewa jay, vid: 45.9;
                ...state, cart: newCart   // ta nicher code er moto venge kora jay;
            }
            // const newId = action.id;
            // const newCart = [...state.cart, newId];
            // return {cart: newCart};
        case REMOVE_FROM_CART:
            console.log(action, 'action');
            const cartId = action.id;
            const remainingCart = state.cart.filter(item => item.id !== cartId ); // jei id te click hoiche seta bade onnogulo thakbe;
            return {...state, cart: remainingCart };  // karon 1st copy kore pore propertis n value change kora lagbe;

        default:
            return state;
    }
}