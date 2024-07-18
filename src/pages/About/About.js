import "../../components/NavigationBar/NavigationBar.js";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import AboutUs from "../../components/AboutUs/AboutUs.js";
import "./About.css";

export default function About() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>

      <main>
        <AboutUs />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
