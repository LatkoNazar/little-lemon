import "./SignUpPage.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import SignUpPageStructure from "../../components/SignUpPageStructure/SignUpPageStructure.js";

export default function SignUpPage() {
    return (
        <>
            <header>
                <NavigationBar />
            </header>

            <main>
                <SignUpPageStructure />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
