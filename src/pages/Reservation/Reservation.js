import "./Reservation.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import ReserveTable from "../../components/ReserveTable/ReserveTable.js";
import Footer from "../../components/Footer/Footer.js";

export default function Reservations() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>

      <main>
        <ReserveTable />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
