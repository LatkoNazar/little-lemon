import "./NavigationBar.css";

export default function NavigationBar() {
    return (
        <>
            <div className="container">
                <a href="/" className="image-logo">
                    <img
                        src="../images/littlelemon-logo.png"
                        alt="Little Lemon logo"
                    />
                </a>

                <nav className="navigation">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/menu">Menu</a>
                        </li>
                        <li>
                            <a href="/reservation">Reservation</a>
                        </li>
                        <li>
                            <a href="/order-online">Order online</a>
                        </li>
                        <li>
                            <a href="/login">Login / Sign up</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
