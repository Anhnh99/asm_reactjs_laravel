import { ADD_TO_CART, DELETE_ITEM, UPDATE_ITEM } from './../constants/ActionType'

export const addToCart = (pro) => {
    return {
        type: ADD_TO_CART,
        pro,
    }
}
export const deleteCart = (id) => {
    return {
        type: DELETE_ITEM,
        id
    }
}
export const updateCart = (id, method) => {
    return {
        type: UPDATE_ITEM,
        id,
        method
    }
}



