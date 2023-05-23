import "./IconoMenu.css";
const IconoMenu = (props) => {
    return (
        <label className="container">
            <input type="checkbox" />
            <div className="checkmark">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p className="menu_text">Menu</p>
        </label>
    );
};

export default IconoMenu;
