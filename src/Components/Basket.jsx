import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Import du context
import { useCart } from "../Context/BasketContext.jsx";

import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

// Import du composant button
import Button from "../Components/Button.jsx";
import "../Styles/Basket.scss";
import "../Styles/Color.scss";

const Basket = () => {
    const { cart, removeFromCart, addToCard, clearCard } = useCart(); // Utiliser le hook pour obtenir le panier et les fonctions de mise à jour 

    const navigate = useNavigate();

    const totalAmount = cart.reduce((total, product) => {
        return total + Number(product.price) * product.quantity;
    }, 0);

    const handleClearBasket = () => {
        clearCard();
    };

    const handleOrderSubmit = async () => {
        const orderData = {
            products: cart,
            totalAmount,
            status: "En cours de préparation",
        };

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/order`,
                orderData
            );
            clearCard();
            navigate(`/order/${response.data.order._id}`);
        } catch (error) {
        console.error("Erreur lors de la valadation de la commande :", error);
    }
};

    return(
        <div className="basket">
            
        </div>
    );
};

export default Basket;

