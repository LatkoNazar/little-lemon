import "./Promotion.css";
import { Link } from "react-router-dom";
export default function Promotion() {
    return (
        <>
            <section className="about-little-lemon">
                <section className="description">
                    <section class="headers">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </section>
                    <p>
                        We are a family owned Mediterranean restaurant, located
                        on Maldove Street in Chicago, Illinois. We focus on
                        traditional recipes served with a modern twist.
                    </p>
                    <section className="button-reservation">
                        <Link
                            className="ButtonReservation-ReserveTable"
                            to="/reservation"
                        >
                            Reserve a table
                        </Link>
                    </section>
                </section>
                <section className="img-section">
                    <img
                        id="greek-salad"
                        src="/images/greek-salad.png"
                        alt="Greek salad"
                    />
                </section>
            </section>
        </>
    );
}
