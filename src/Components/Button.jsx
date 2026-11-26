import "../Styles/Color.scss";

const Button = ({ onClick, type, text }) => {
    return (
        <button onClick={onClick} className={`button-${type}`}>
            {text}
        </button>
    );
};

export default Button;
