import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
    isCartDropdownOpen: false,
    setCartDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeByChoosing: () => {},
});

export const CartProvider = ({ children }) => {
    const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemToCart = (newProduct) => {
        setCartItems(addToCartIfNotExists(cartItems, newProduct));
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeFromCart(cartItems, cartItemToRemove));
    }
    const removeByChoosing = (cartItemToRemove) => {
        setCartItems(cartItems.filter((product) => product.id !== cartItemToRemove.id));
    }

    useEffect(() => {
        setTotalQuantity(cartItems.reduce((total, item) => total +  item.quantity, 0));
        const calculateTotalPrice = () =>setTotalPrice(cartItems.reduce((total, item) => total +  item.quantity * item.price, 0)) 
        calculateTotalPrice()
    },[cartItems]);

    return (
        <CartContext.Provider 
        value={{ 
            isCartDropdownOpen, 
            setCartDropdownOpen, 
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