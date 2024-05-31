import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        setCart(prevCart => {
            const isItemInCart = prevCart.some(prod => prod.id === item.id);

            if (isItemInCart) {
                return prevCart.map(prod => 
                    prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
                );
            } else {
                return [...prevCart, { ...item, quantity }];
            }
        });
    }

    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const getCountProducts = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    const getSumProducts = () => {
        return cart.reduce((total, item) => total + item.quantity * item.precio, 0); // Asegúrate de que "price" sea correcto
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, getCountProducts, getSumProducts }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
