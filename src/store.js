/**
 * Created by darwinmorocho on 19/7/18.
 */
import {createStore, applyMiddleware} from 'redux'


const reducer = (state, action) => {

    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: state.cart.concat(action.product)
        }
    }


    if (action.type === 'REMOVE_FROM_CART') {
        return {
            ...state,
            cart: state.cart.filter(product => product.id !== action.product.id)
        }
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
}


export default createStore(reducer, {cart: []}, applyMiddleware(logger))