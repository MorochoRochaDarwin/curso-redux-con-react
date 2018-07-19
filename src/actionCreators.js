/**
 * Created by darwinmorocho on 19/7/18.
 */

import axios from 'axios'

const readProducts = () => {

    //obetnemos de manera asyncrona los productos
    return dispatch => {
       return axios.get('https://api.myjson.com/bins/y9y0a')
            .then(response => {

                dispatch({
                    type: 'READ_PRODUCTS',
                    products: response.data
                })

            });
    };


};

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

export {addToCart, removeFromCart, readProducts};