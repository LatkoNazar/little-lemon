import "./OrderCard.css";
import { OrderContext } from "../../App";
import { totalPriceContext } from "../../App";
import { useContext } from "react";

export default function OrderCard(props) {
    const { usersOrder, setUsersOrder } = useContext(OrderContext);
    const { totalPrice, setTotalPrice } = useContext(totalPriceContext);

    function removeOrder(order) {
        for (let i = 0; i < usersOrder.length; i++) {
            if (
                usersOrder[i].name === order.name &&
                usersOrder[i].key === order.key
            ) {
                var updatedOrder = usersOrder.filter(
                    (item, index) => index !== i
                );
                setTotalPrice(totalPrice - usersOrder[i].price);
                setUsersOrder([...updatedOrder]);
                alert("Order removed!");
            }
        }
    }

    return (
        <div className="order-card">
            <div className="Order-card-content">
                <img
                    className="order-food-img"
                    src={props.order.picture}
                    alt={props.order.name}
                />
                <div className="Info-about-order">
                    <h1 className="OrderFoodName">{props.order.name}</h1>
                    <p className="Order-price-for-dish">${props.order.price}</p>
                </div>
            </div>
            <div className="Remove-order-button">
                <button
                    className="Remove-order-buuton"
                    onClick={() => removeOrder(props.order)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}
