import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/cartContext';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider> 
        <App/>
    </CartProvider>
);


