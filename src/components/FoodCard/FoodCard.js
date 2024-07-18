import "./FoodCard.css";
import { OrderContext } from "../../App";
import { useContext } from "react";
function newFood(isNew) {
    if (isNew) {
        return <span className="new">New</span>;
    }
    return null;
}

export default function FoodCard(props) {
    const { usersOrder, setUsersOrder } = useContext(OrderContext);

    function addToCart() {
        setUsersOrder([...usersOrder, props.offer]);
        alert("Added to cart!");
    }

    return (
        <section className="food-card-container">
            <img className="food-img" src={props.picture} alt={props.name} />
            <section className="card-info">
                <h3 className="food-title">
                    {props.name} {newFood(props.isNew)}
                </h3>
                <p id="price">{props.price}</p>
                <p>{props.description}</p>
            </section>
            <div className="add-button">
                <button id="add-to-cart" onClick={addToCart}>
                    Add to cart
                </button>
            </div>
        </section>
    );
}
