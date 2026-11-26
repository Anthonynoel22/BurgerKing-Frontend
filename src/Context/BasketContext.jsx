import React, {createContext, useContext, useState} from "react";

// Fonction pour vérifier si deux produits sont les mêmes
const isSameProduct = (idem, product) => 
    item.name === product.name && item.price === product.price;

// Créer le context
const CartContext = createContext();

//Créer un provider pour le contexte 
export const CartProvider = ({chidren}) => {
    const [cart, SetCard] = useState([]);
}