import "./Offers.css";
import FoodCard from "../FoodCard/FoodCard";

export default function OfferCard(props) {
    return (
        <div id={props.idName}>
            <section className="heading-to-special-offers">
                <h2>{props.heading}</h2>
                <div>
                    <p>{props.description}</p>
                </div>
            </section>
            <section className="offers-field">
                {props.Offers.map((offer) => {
                    return (
                        <FoodCard
                            key={offer.name}
                            name={offer.name}
                            price={offer.price}
                            description={offer.description}
                            picture={offer.picture}
                            isNew={offer.isNew}
                            offer={offer}
                        />
                    );
                })}
            </section>
        </div>
    );
}
