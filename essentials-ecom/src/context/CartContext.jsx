import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Create the Cart Context
const CartContext = createContext();

// Custom hook for using the CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// Cart Provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Retrieve cart data from localStorage on initial render
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : []; // Parse stored cart or return empty array
    });

    useEffect(() => {
        // Store cart data in localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            // If product exists, increment its quantity
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            // Otherwise, add the new product to the cart
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const incrementQuantity = (productId) => {
        setCart(cart.map(item =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decrementQuantity = (productId) => {
        setCart(cart.map(item =>
            item.id === productId && item.quantity > 1 // Prevent quantity going below 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total item count

    return (
        <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart, cartCount }}>
            {children} {/* Render children */}
        </CartContext.Provider>
    );
};

// PropTypes validation for CartProvider
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
