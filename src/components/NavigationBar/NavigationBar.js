import "./NavigationBar.css";
import { Link } from "react-router-dom";
export default function NavigationBar() {
    return (
        <>
            <div className="container">
                <Link to="/" className="image-logo">
                    <img
                        src="../images/littlelemon-logo.png"
                        alt="Little Lemon logo"
                    />
                </Link>

                <nav className="navigation">
                    <ul>
                        <li>
                            <Link className="NavigationLink" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="NavigationLink" to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="NavigationLink" to="/menu">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link className="NavigationLink" to="/reservation">
                                Reservation
                            </Link>
                        </li>
                        <li>
                            <Link className="NavigationLink" to="/your-order">
                                Your Order
                            </Link>
                        </li>
                        <li>
                            <Link className="NavigationLink" to="/login">
                                Login / Sign up
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
