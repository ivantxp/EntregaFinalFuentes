import "./App.css";
import Main from "./components/main/Main";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import ContextoCarritoProvider from "./components/Context/ContextoCarrito";
import Card from "./components/Card/Card";
import CheckOut from "./components/ChckOut/CheckOut";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ContextoCarritoProvider>
                    <HeaderContainer />
                    <Main>
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route
                                path="/category/:categoryFabricante"
                                element={<ItemListContainer />}
                            />
                            <Route
                                path="/item/:itemId"
                                element={<ItemDetailContainer />}
                            />
                            <Route path="/card" element={<Card />} />
                            <Route path="/CheckOut" element={<CheckOut />} />
                            <Route path="*" element={<h1>Error 404</h1>} />
                        </Routes>
                    </Main>
                </ContextoCarritoProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
