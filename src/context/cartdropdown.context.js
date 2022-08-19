import { createContext, useState } from "react";


export const CartDropdownContext = createContext({
    isCartDropdownOpen: false,
    setCartDropdown: () => {}
});

export const CartDropdownProvider = ({ children }) => {
    const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);

    return (
        <CartDropdownContext.Provider value={{ isCartDropdownOpen, setCartDropdownOpen }}>
            {children}
        </CartDropdownContext.Provider>
    );
}