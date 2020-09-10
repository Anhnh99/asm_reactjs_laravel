import * as types from './../constants/ActionType'

const initialState = {
    cart: [],
    total: 0,
};
const cart = (state = initialState, action) => {
    switch (action.type) {

        case types.ADD_TO_CART: {

            let existed_item = state.cart.find(value => action.pro.id === value.id);

            // xét giá
            var price = action.pro.price

            if (existed_item) {
                let addedItem = state.cart.find(value => value.id === action.pro.id);
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + price
                }
            } else {
                action.pro.quantity = 1;
                let newTotal = state.total + price;
                return {
                    ...state,
                    cart: [...state.cart, action.pro],
                    total: newTotal
                }
            }
        }
        case types.DELETE_ITEM: {
            let itemToRemove = state.cart.find(value => action.id === value.id);
            let new_items = state.cart.filter(value => action.id !== value.id)
            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            console.log(itemToRemove)
            return {
                ...state,
                cart: new_items,
                total: newTotal
            }
        }
        case types.UPDATE_ITEM: {
            let itemUpdate = state.cart.find(value => action.id === value.id);
            let newTotal = 0;
            if (action.method === -1) {
                itemUpdate.quantity -= 1;
                newTotal = state.total - itemUpdate.price;
                if (itemUpdate.quantity < 1) {
                    let item = state.cart.find(value => action.id === value.id);
                    let new_items = state.cart.filter(value => action.id !== value.id);
                    let newTotal = state.total - item.price;
                    return {
                        ...state,
                        cart: new_items,
                        total: newTotal
                    }
                }
                return {
                    ...state,
                    total: newTotal
                }
            } else {
                itemUpdate.quantity += 1;
                newTotal = state.total + itemUpdate.price;
                return {
                    ...state,
                    total: newTotal
                }
            }
        }


        default:
            return state
    }
};

export default cart;
