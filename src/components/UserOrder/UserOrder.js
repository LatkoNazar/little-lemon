import "./UserOrder.css";
import Offers from "../../components/Offers/Offers.js";
import { OrderContext } from "../../App";
import { useContext } from "react";
export default function UserOrder() {
    const { usersOrder } = useContext(OrderContext);
    return (
        <div className="user-order-main-div">
            <Offers
                idName="little-lemon-special-offers"
                Offers={usersOrder}
                heading="Special Offers"
                description="Discover our exciting specials today!"
            />
        </div>
    );
}
