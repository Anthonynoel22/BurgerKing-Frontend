import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider} from "./Context/BasketContext";
import { useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Order from "./Pages/Order";

import "./App.css";

const App =() => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenLoginModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseLoginModal = () => {
        setIsModalOpen(false);
    };

    return (
        <CartProvider>
            <Router>
                <div className="app-container">
                <Header onOpenLoginModal={handleOpenLoginModal}/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/admin" element={<Admin/>}></Route>
                    <Route path="/order/:id" element={<Order/>}></Route>
                </Routes>
                <Footer/>
                {isModalOpen && <Login onClose={handleCloseLoginModal}/>}
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;