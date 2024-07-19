import "./UserOrder.css";
import OrderCard from "../../components/OrderCard/OrderCard.js";
import { OrderContext } from "../../App";
import { useContext, createContext } from "react";
import { totalPriceContext } from "../../App";
import OrderForm from "../../components/OrderForm/OrderForm.js";
import { useState } from "react";

export const HidenContext = createContext();
export default function UserOrder() {
    const [hiden, setHiden] = useState(true);
    const { usersOrder } = useContext(OrderContext);
    const { totalPrice } = useContext(totalPriceContext);
    if (usersOrder.length === 0) {
        return (
            <>
                <div className="user-order-main-div">
                    <h1 id="main-h1-order-tag">No dishes!</h1>
                </div>
            </>
        );
    } else {
        return (
            <>
                <HidenContext.Provider value={{ hiden, setHiden }}>
                    <OrderForm
                        styling={hiden ? { zIndex: "-100" } : { zIndex: "100" }}
                    />
                    <div className="user-order-main-div">
                        <h1 id="main-h1-order-tag">
                            Total price: ${Math.round(totalPrice * 100) / 100}
                        </h1>
                        {usersOrder.map((order) => {
                            return <OrderCard key={order.name} order={order} />;
                        })}
                        <button
                            id="Submit-order-food"
                            onClick={() => setHiden(!hiden)}
                        >
                            Order
                        </button>
                    </div>
                </HidenContext.Provider>
            </>
        );
    }
}
