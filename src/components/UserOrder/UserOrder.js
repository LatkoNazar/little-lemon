import "./UserOrder.css";
import OrderCard from "../../components/OrderCard/OrderCard.js";
import { OrderContext } from "../../App";
import { useContext } from "react";
import { totalPriceContext } from "../../App";

export default function UserOrder() {
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
                <div className="user-order-main-div">
                    <h1 id="main-h1-order-tag">
                        Total price: ${Math.round(totalPrice * 100) / 100}
                    </h1>
                    {usersOrder.map((order) => {
                        return <OrderCard key={order.name} order={order} />;
                    })}
                    <button
                        id="Submit-order-food"
                        onClick={() => alert("Order placed!")}
                    >
                        Place Order
                    </button>
                </div>
            </>
        );
    }
}
