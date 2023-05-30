import "./IconoMenu.css";
const IconoMenu = () => {
    return (
        <label className="container">
            <input type="checkbox" />
            <div className="checkmark">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p className="menu_text">Menú</p>
        </label>
    );
};

export default IconoMenu;
