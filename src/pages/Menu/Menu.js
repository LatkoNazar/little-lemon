import "./Menu.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import Offers from "../../components/Offers/Offers.js";

export const OurMenu = [
    {
        name: "Greek Salad",
        price: 12.99,
        description:
            "Greek salad is a refreshing dish made with ripe tomatoes, crisp cucumbers, red onions, olives, and feta cheese, all seasoned with olive oil and oregano.",
        picture: "/images/greek-salad-card.webp",
        isNew: false,
    },
    {
        name: "Burito",
        price: 12.99,
        description:
            "A delicious Mexican dish with a meat filling, rice, beans, cheese, and salsa wrapped in a soft tortilla.",
        picture: "/images/burito.jpg",
        isNew: false,
    },
    {
        name: "Pasta",
        price: 10.99,
        description:
            "Classic Italian dish with al dente pasta, rich tomato sauce, and fresh basil.",
        picture: "/images/pasta.jpg",
        isNew: false,
    },
    {
        name: "Lemon Ice-Cream",
        price: 5.99,
        description:
            "Refreshing lemon ice-cream with a tangy and sweet flavor.",
        picture: "/images/lemon-ice-cream.jpg",
        isNew: true,
    },
    {
        name: "Brushetta",
        price: 7.99,
        description:
            "Bruschetta is a classic Italian appetizer featuring toasted bread topped with a flavorful mixture of diced tomatoes, fresh basil, garlic, and olive oil.",
        picture: "/images/bruschetta.jpg",
        isNew: false,
    },
    {
        name: "Chicken Caesar Salad",
        price: 9.99,
        description:
            "Crisp romaine lettuce with grilled chicken, croutons, and Caesar dressing.",
        picture: "/images/chicken-caesar-salad.jpg",
        isNew: false,
    },
    {
        name: "Lemon Dessert",
        price: 6.99,
        description:
            "Indulge in our lemon dessert, a delightful treat featuring a zesty lemon filling nestled in a buttery crust, topped with a light dusting of powdered sugar.",
        picture: "/images/lemon-dessert.jpeg",
        isNew: true,
    },
    {
        name: "Chocolate Lava Cake",
        price: 7.99,
        description:
            "Decadent chocolate cake with a molten center, served with a scoop of vanilla ice cream.",
        picture: "/images/chocolate-lava-cake.jpg",
        isNew: false,
    },
    {
        name: "Grilled Salmon",
        price: 15.99,
        description:
            "Perfectly grilled salmon fillet served with roasted vegetables and a lemon butter sauce.",
        picture: "/images/grilled-salmon.jpg",
        isNew: false,
    },
    {
        name: "Fish and Lemons",
        price: 16.99,
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        picture: "/images/fish-and-lemons.jpg",
        isNew: false,
    },
    {
        name: "Vegetable Stir-Fry",
        price: 11.99,
        description:
            "A colorful mix of fresh vegetables stir-fried with a savory sauce, served over steamed rice.",
        picture: "/images/vegetable-stir-fry.jpg",
        isNew: false,
    },
    {
        name: "Lemon Juice",
        price: 3.99,
        description:
            "Our refreshing lemonade is made from freshly squeezed lemons, offering the perfect blend of tart and sweet flavors. Ideal for hot days, it’s a delicious and natural way to cool down.",
        picture: "/images/lemonade.jpg",
        isNew: true,
    },
    {
        name: "Tiramisu",
        price: 6.99,
        description:
            "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        picture: "/images/tiramisu.jpg",
        isNew: false,
    },
    {
        name: "Margherita Pizza",
        price: 10.99,
        description:
            "Traditional Italian pizza with a crispy crust, fresh tomatoes, mozzarella cheese, and basil.",
        picture: "/images/margherita-pizza.jpg",
        isNew: false,
    },
    {
        name: "Pizza",
        price: 14.99,
        description:
            "Enjoy our delicious pizza with a perfect blend of fresh ingredients and melted cheese on a crispy crust. Each bite is a burst of flavor, perfect for any meal or occasion.",
        picture: "/images/pizza.jpg",
        isNew: false,
    },
];

export default function Menu() {
    return (
        <>
            <header>
                <NavigationBar />
            </header>

            <main>
                <Offers
                    idName="little-lemon-full-menu"
                    Offers={OurMenu}
                    heading="Our menu"
                    description="Let us surprise you with our unique and appetizing dishes!"
                />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
