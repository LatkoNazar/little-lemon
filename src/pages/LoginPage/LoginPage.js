import "./LoginPage.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import LoginPageStructure from "../../components/LoginPageStructure/LoginPageStructure.js";

export default function LoginPage() {
    return (
        <>
            <header>
                <NavigationBar />
            </header>

            <main>
                <LoginPageStructure />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
