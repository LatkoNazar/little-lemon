import "./OrderOnline.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import UserOrder from "../../components/UserOrder/UserOrder.js";
import Offers from "../../components/Offers/Offers.js";

export default function OrderOnline() {
    return (
        <>
            <header>
                <NavigationBar />
            </header>

            <main>
                <UserOrder />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
