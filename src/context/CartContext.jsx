import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Load the cart from localStorage when the app initializes
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ));
        } else {
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
            item.id === productId && item.quantity > 1 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        ));
    };

    const removeProduct = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const clearCart = () => setCart([]);

    // Function to get the total count of items in the cart
    const getCartCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            incrementQuantity, 
            decrementQuantity, 
            removeProduct, 
            clearCart,
            getCartCount // Expose getCartCount to the context
        }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired, // Specify that children is a required prop
};

export const useCart = () => {
    return useContext(CartContext);
};
