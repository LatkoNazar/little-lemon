import "../../components/NavigationBar/NavigationBar.js";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Promotion from "../../components/Promotion/Promotion.js";
import Offers from "../../components/Offers/Offers.js";
import Footer from "../../components/Footer/Footer.js";
import "./HomePage.css";
import { OurMenu } from "../Menu/Menu.js";

console.log(OurMenu);

const specialOffers = OurMenu.filter((offer) => {
    return offer.isNew;
});

export default function HomePage() {
    return (
        <>
            <header>
                <NavigationBar />
            </header>

            <main>
                <Promotion />
                <Offers
                    idName="little-lemon-special-offers"
                    Offers={specialOffers}
                    heading="Special Offers"
                    description="Discover our exciting specials today!"
                />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
