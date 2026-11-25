import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { CartProvider} from "./Context/BasketContext";
import { useState } from "react";

import Header from "./Components/Header.jsx";
// import Footer from "./Components/Footer.jsx";
/* import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import Admin from "./Pages/Admin.jsx";
import Order from "./Pages/Order.jsx"; */

import "./App.css";

const App =() => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenLoginModal = () => {
        setIsModalOpen(true);
    };
/*     const handleCloseLoginModal = () => {
        setIsModalOpen(false);
    }; */

    return (
        // <CartProvider>
            <Router>
                <div className="app-container">
                <Header onOpenLoginModal={handleOpenLoginModal}/>
{/*                 <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/admin" element={<Admin/>}></Route>
                    <Route path="/order/:id" element={<Order/>}></Route>
                </Routes> */}
                {/* <Footer/>
                {isModalOpen && <Login onClose={handleCloseLoginModal}/>} */}
                </div>
            </Router>
        // </CartProvider>
    );
};

export default App;