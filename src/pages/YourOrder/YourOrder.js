import "./YourOrder.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import UserOrder from "../../components/UserOrder/UserOrder.js";

export default function YourOrder() {
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
