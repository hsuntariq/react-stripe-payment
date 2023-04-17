import { createContext,useState } from "react";
import { products,getProductData } from "../data/productsData";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // set cart items to an initialState;
    const [cartItems,setCartItems] = useState([])
    const getTotalQuantity = (id) => {
        let quantity = cartItems.find(product => product.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    const addOneToCart = (id) => {
        let quantity = getTotalQuantity(id);
        if (quantity === 0) {
            setCartItems([...cartItems, { id: id, quantity: 1 }]);
        }  else {
            setCartItems(cartItems.map((product) => {
                return product.id === id ?
                    { ...product, quantity: product.quantity + 1 }
                    : product
            }));
        }
    }
    const removeFromCart = (id) => {
        const filteredItem = products.filter(product => product.id !== id);
        setCartItems(filteredItem);
    }

    const removeOneFromCart = (id) => {
        let quantity = getTotalQuantity(id);
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
        let total;
        products.map((product) => {
            let selectedProduct = getProductData(id);
            total += selectedProduct.price * getTotalQuantity(id);
            return total;
        })
        
    }

    return <CartContext.Provider value={{
        items:cartItems,
        getTotalQuantity,
        addOneToCart,
        removeFromCart,
        removeOneFromCart,
        getTotalCost,
    }}>
        {children}
    </CartContext.Provider>
}

export { CartProvider,CartContext };