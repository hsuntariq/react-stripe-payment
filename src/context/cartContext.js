import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems,setCartItems] = useState([])
    const getProductQuantity = (id) => {
        let quantity = cartItems.find(product => product.id === id)?.quantity;
        if (quantity === undefined) return 0;
        return quantity;
    }
    const addOneToCart = (id) => {
        // check for the quantity
        let quantity = getProductQuantity(id);
        if (quantity === 0) {
            // if no id matches the id passed, then increase the value to 1
            setCartItems([...cartItems,{id:id,quantity:1}])
        }
            // if the selected item is already present
        else {
            cartItems.map((product) => {
                return product.id === id ?
                    { ...product, quantity: product.quantity + 1 }
                    : product
            });
        }
    }
    const removeFromCart = (id) => {
        let filteredItem = cartItems.filter(product => product.id !== id);
        setCartItems(filteredItem);
    }
    const removeOneItem = (id) => {
        let quantity = getProductQuantity(id);
        if (quantity === 1) {
            removeFromCart(id);
        } else {
            setCartItems(
                cartItems.map((product) => {
                    return product.id === id ?
                        { ...product, quantity: product.quantity - 1 }
                        : product
                })
            )
        }
    }
    const getTotalCost = (id) => {
        
    }
    return <CartContext.Provider value={{
        items: cartItems,
        getProductQuantity,
        addOneToCart,
        removeFromCart,
        getTotalCost,
        removeOneItem
    }}>
        {children}
    </CartContext.Provider>
}

