import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div>
      <div className="about-us">
        <section>
          <h1 id="about-header">About Us</h1>
        </section>

        <div class="model">
          <div className="grid-el">
            <img
              className="about-img"
              src="/images/chefs-1.jpg"
              alt="Two chefs"
            />
          </div>
          <section className="grid-el">
            <p>
              Little Lemon is owned by two Italian brothers, Mario and Adrian,
              who moved to the United States to pursue their shared dream of
              owning a restaurant.
            </p>
          </section>
          <div className="grid-el">
            <img
              className="about-img"
              src="/images/chefs-2.jpg"
              alt="Two chefs"
            />
          </div>
          <section className="grid-el">
            <p>
              To craft the menu, Mario relies on family recipes and his
              experience as a chef in Italy. Adrian does all the marketing for
              the restaurant and led the effort to expand the menu beyond
              classic Italian to incorporate additional cuisines from the
              Mediterranean region.
            </p>
          </section>
          <div className="grid-el">
            <img
              className="about-img"
              src="/images/girl-chef.webp"
              alt="Woman chef"
            />
          </div>
          <section className="grid-el">
            <p>
              The restaurant is known for its innovative and unique flavors,
              such as the Fish and Lemons, which was authored by Mario.
            </p>
          </section>
          <div className="grid-el">
            <img
              className="about-img"
              src="/images/food-serving.jpg"
              alt="Food serving"
            />
          </div>
          <section className="grid-el">
            <p>
              The restaurant is open 7 days a week, serving delicious food and
              offering a relaxing ambiance.
            </p>
          </section>
          <div className="grid-el">
            <img
              className="about-img"
              src="/images/man-cooking.png"
              alt="Man cooking"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
