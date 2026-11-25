import logo from "../assets/BurgerKing.jpg";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "./Button";
import "../Styles/Header.scss";
import "../Styles/Button.scss";
import "../Styles/Color.scss";

import Cookies from "js-cookie";

const Header = ({ onOpenLoginModal }) => {
    const navigate = useNavigate();
    const location = useLocation;

    const token = Cookies.get("token");

    const handleLogout = () => {
        Cookies.remove("token");
        navigate("/");
    };

    const onClickToHome = () => {
        navigate("/");
    };

    return(
        <div className="header">
            <div className="header-name" onClick={onClickToHome}>
                <img src={logo} alt="Le roi du burger"/>
                <h1>Le roi du burger</h1>
            </div>
            <div className="header-buttons">
                {location.pathname === "/" && !token && (
                    <Button onClick={onOpenLoginModal} text="Admin login" type="header"/>
                )}
                {token && (
                    <Button onClick={handleLogout} text="se déconnecter" type="header"/>
                )}
                {location.pathname === "/" && token && (
                    <Button
                    onClick={() => navigate("/admin")}
                    text="Admin page"
                    type= "header"
                    />
                )}
            </div>
        </div>
    );
};

export default Header;
