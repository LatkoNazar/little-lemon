import "./App.css";
import "./pages/HomePage/HomePage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About.js";
import HomePage from "./pages/HomePage/HomePage.js";
import Menu from "./pages/Menu/Menu.js";
import Reservation from "./pages/Reservation/Reservation.js";
import YourOrder from "./pages/YourOrder/YourOrder.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import SignUpPage from "./pages/SignUpPage/SignUpPage.js";
import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();
export const totalPriceContext = createContext();
function App() {
    const [usersOrder, setUsersOrder] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        console.log("Order:", usersOrder);
    }, [usersOrder]);

    return (
        <OrderContext.Provider value={{ usersOrder, setUsersOrder }}>
            <totalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/reservation" element={<Reservation />} />
                        <Route path="/your-order" element={<YourOrder />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/sign-up" element={<SignUpPage />} />
                    </Routes>
                </Router>
            </totalPriceContext.Provider>
        </OrderContext.Provider>
    );
}

export default App;
