/**
 * Created by darwinmorocho on 19/7/18.
 */
const addToCart = product => {
    return {
        type: 'ADD_TO_CART',
        product
    }
};


const removeFromCart = product => {
    return {
        type: 'REMOVE_FROM_CART',
        product
    }
};

export {addToCart, removeFromCart};