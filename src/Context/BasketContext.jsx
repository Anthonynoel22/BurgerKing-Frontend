import { createContext, useContext, useState } from "react";

// Fonction pour vérifier si deux produits sont les mêmes
const isSameProduct = (item, product) =>
    item.name === product.name && item.price === product.price;

// Créer le contexte
const CartContext = createContext();

// Créer un provider pour le contexte
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Fonction pour ajouter un produit au panier
    const addToCart = (product) => {
        // On cherche si le produit est déjà dans le panier
        // puis on retourne le premier élément du panier qui a le même nom et prix que l'élément que je veux modifier
        const foundProduct = cart.find((item) => isSameProduct(item, product));

        if (foundProduct) {
            // Si le produit existe déjà, on augmente seulement sa quantité et les autres produits restent inchangés
            const updatedCart = cart.map((item) =>
                isSameProduct(item, foundProduct)
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            );
            // on met à jour le cart
            setCart(updatedCart);
        } else {
            // s'il n'est pas présent dans le panier, on y ajoute le produit avec une quantité de 1
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Fonction pour retirer ou décrémenter un produit du panier
    const removeFromCart = (product) => {
        // Mise à jour du panier : décrémente la quantité ou retire le produit si la quantité est 1
        const updatedCart = cart
            .map((item) =>
                isSameProduct(item, product)
                    ? item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : null // Si la quantité est 1, on le met à null
                    : item,
            )
            .filter((item) => item !== null); // Filtre pour supprimer les produits null
        setCart(updatedCart);
    };

    // Fonction pour vider complètement le panier
    const clearCart = () => {
        setCart([]); // Remet le panier à un tableau vide
    };

    // Fournit les valeurs du panier et les actions aux composants enfants
    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook pour utiliser le contexte
export const useCart = () => useContext(CartContext);
