import { createContext, useReducer } from "react";



export const CartContext = createContext({
    isCartDropdownOpen: false,
    setCartDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeByChoosing: () => {},
    totalQuantity: 0,
    totalPrice:0
});


const addToCartIfNotExists = (cartItems, newProduct) => {
    const existingProduct = cartItems.find(
        (product) => product.id === newProduct.id
    );
    
    if (existingProduct) {
        return cartItems.map((product) =>
        product.id === newProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
    }
    
    return [...cartItems, { ...newProduct, quantity: 1 }];
}
const removeFromCart = (cartItems, productToRemove) => {
    const existingProduct = cartItems.find((product) => product.id === productToRemove.id);
   

    if(existingProduct.quantity === 1){
        return cartItems.filter((product) => product.id !== productToRemove.id);
    }

    return cartItems.map((product) =>
    product.id === productToRemove.id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
}

export const actionType = {
    SET_CART_DROPDOWN: 'SET_CART_DROPDOWN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const cartReducer = (state,action) =>{
    const { type , payload } =action
    switch (type) {
        case actionType.SET_CART_DROPDOWN:
            return {...state,isCartDropdownOpen:payload}
        case actionType.SET_CART_ITEMS:
            return {...state,...payload}
        default:
            throw new Error(`Unhandled error ${type} in the cartReducer`)
    }
}
const INITIAL_STATE= {
    isCartDropdownOpen:false,
    cartItems: [],
    totalQuantity: 0,
    totalPrice:0
}

export const CartProvider = ({ children }) => {
    const [state,dispatch] = useReducer(cartReducer,INITIAL_STATE)
    const {isCartDropdownOpen,cartItems,totalQuantity,totalPrice} = state

    const addItemToCart = (newProduct) => {
         const newCartItem =  addToCartIfNotExists(cartItems, newProduct)
         updateCartItems(newCartItem)
    }
    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItem = removeFromCart(cartItems, cartItemToRemove)
        updateCartItems(newCartItem)
    }
    const removeByChoosing = (cartItemToRemove) => {
       const newCartItem = cartItems.filter((product) => product.id !== cartItemToRemove.id)
       updateCartItems(newCartItem)
    }

    // For reducer update cart function
    const updateCartItems = (newCartItem) =>{
        const newCartQuantity = newCartItem.reduce((total, item) => total +  item.quantity, 0)
        const newCartPrice = newCartItem.reduce((total, item) => total +  item.quantity * item.price, 0)
        
        dispatch({type:actionType.SET_CART_ITEMS,payload:{ cartItems:newCartItem, totalQuantity:newCartQuantity, totalPrice:newCartPrice }})
    }



    const handleDropDownDispatch = () =>{
        dispatch({type:actionType.SET_CART_DROPDOWN, payload:!isCartDropdownOpen})
    } 
   

    return (
        <CartContext.Provider 
        value={{ 
            isCartDropdownOpen, 
            handleDropDownDispatch, 
            cartItems, 
            addItemToCart,
            totalQuantity, 
            totalPrice,
            removeItemFromCart,
            removeByChoosing 
            }}>
            {children}
        </CartContext.Provider>
    );
}