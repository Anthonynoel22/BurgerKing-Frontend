import "../Styles/Color.scss";

const Button = ({ onclick, type, text}) => {
    return (
        <button onClick={onclick} className={`button-${type}`}>
            {text}
        </button>
    );
};

export default Button;