import "./food.css"

const Food = () => {
  return (
    <div className="container">
      <header id="website-title">
        <h1>Delicious Food</h1>
      </header>
      <section>
        <h2>Featured Dish</h2>
        <div className="dish-card">
          <img
            src="https://shorturl.at/qBDG2"
            className="dish-image"
            alt="Featured Dish"
          />
          <div className="dish-details">
            <h3 className="dish-name">Spaghetti Bolognese</h3>
            <p className="dish-description">A popular dish you want to try</p>
            <button>Order Now</button>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Delicious Food</p>
      </footer>
    </div>
  );
};

export default Food;
