# Frontend – Projet Borne/Commande

## Description
Frontend développé avec **React.js**, gérant le menu, le panier et le récapitulatif des commandes.  
Le panier est centralisé via **Context API** et la navigation est gérée avec **React Router**.  




### 1. Fonctionnement
La page du menu affiche tous les produits, filtrables par catégorie grâce au composant Filters.

Le panier est géré globalement via Context API : ajouter, supprimer des articles, modifier les quantités et calcul automatique du total.

La validation de commande envoie une requête Axios au backend pour créer la commande et reçoit un récapitulatif.

La page de récapitulatif affiche un message personnalisé et tous les détails de la commande.

Hooks useState et useEffect utilisés pour la gestion dynamique des états et mises à jour en temps réel.

Routes gérées avec React Router pour la navigation entre le menu, le récapitulatif et les détails produits.

### 2. Technologies utilisées
React.js
Context API
React Router
Axios