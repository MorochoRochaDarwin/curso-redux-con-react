/**
 * Created by darwinmorocho on 19/7/18.
 */
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';

//reducer producs
const products = (state = [], action) => {
    if (action.type === 'READ_PRODUCTS') {
        return action.products
    }


    return state;
};

//reducer cart
const cart = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        return state.concat(action.product)
    }


    if (action.type === 'REMOVE_FROM_CART') {
        return state.filter(product => product.id !== action.product.id)
    }

    return state;
};


const logger = ({getState}) => {
    return (next) => (action) => {
        console.log('will dispatch', action)

        // Llama al siguiente método dispatch en la cadena de middlewares
        let returnValue = next(action)

        console.log('state after dispatch', getState())

        // Este seguramente sera la acción, excepto
        // que un middleware anterior la haya modificado.
        return returnValue
    }
};


export default createStore(combineReducers({cart: cart, products: products}), applyMiddleware(logger, thunk))