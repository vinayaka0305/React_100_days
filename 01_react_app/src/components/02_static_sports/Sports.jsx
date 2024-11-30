import './sports.css'

const Sports = () => {
  return (
    <div>
      <nav id="navbar">
        <ul className='navbar-list'>
          <li>
            <a href="#">FootBall</a>
          </li>
          <li>
            <a href="#">BasketBall</a>
          </li>
          <li>
            <a href="#">Tennis</a>
          </li>
          <li>
            <a href="#">Cricket</a>
          </li>
        </ul>
      </nav>
      <div id="main-content">
        <h2>latest sports news</h2>
        <article>
          <img src="https://shorturl.at/ltBRY" />
          <h3>Football match recap</h3>
          <p>
            Manchester United defeated Liverpool 2-0 in a thrilling match...
          </p>
        </article>
        <article>
          <img src="https://shorturl.at/ejvNY" />
          <h3>NBA Finals Update</h3>
          <p>
            The Phoenix Suns took a 2-1 series lead against Milwaukee Bucks...
          </p>
        </article>
        <article>
          <img src=" https://shorturl.at/hLQRS" />
          <h3>Wimbeldon Semifinals set</h3>
          <p>
            The semifinals of the Wimbeldon tennis tournament have been
            deceided...
          </p>
        </article>
      </div>
      <footer id="footer">
        <p className="footer-content">
          &copy; 2023 Sports Website.All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Sports;
