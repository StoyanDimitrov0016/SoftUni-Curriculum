import './App.css';

function App() {
  return (
    <div id="wrapper">
      <header>
        {/* Navigation */}
        <a id="logo" href="/">
          <img id="logo-img" src="./images/logo.png" alt="" />
        </a>
        <nav>
          <div>
            <a href="#">Dashboard</a>
            <a href="#">Search</a>
          </div>
          {/* Logged-in users */}
          <div className="user">
            <a href="#">Add Pair</a>
            <a href="#">Logout</a>
          </div>
          {/* Guest users */}
          <div className="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </nav>
      </header>
      <main>
        {/* Home page */}
        <section id="home">
          <h1>Welcome to Sole Mates</h1>
          <img src="./images/home.jpg" alt="home" />
          <h2>Browse through the shoe collectibles of our users</h2>
          <h3>Add or manage your items</h3>
        </section>
        {/* Dashboard page */}
        <section id="dashboard">
          <h2>Collectibles</h2>
          <ul className="card-wrapper">
            {/* Display a li with information about every post (if any)*/}
            <li className="card">
              <img src="./images/travis.jpg" alt="travis" />
              <p>
                <strong>Brand: </strong>
                <span className="brand">Air Jordan</span>
              </p>
              <p>
                <strong>Model: </strong>
                <span className="model">1 Retro High TRAVIS SCOTT</span>
              </p>
              <p>
                <strong>Value:</strong>
                <span className="value">2000</span>$
              </p>
              <a className="details-btn" href="">
                Details
              </a>
            </li>
            <li className="card">
              <img src="./images/back2future.webp" alt="back2future" />
              <p>
                <strong>Brand: </strong>
                <span className="brand">Nike</span>
              </p>
              <p>
                <strong>Model: </strong>
                <span className="model">Back To the Future Part II</span>
              </p>
              <p>
                <strong>Value:</strong>
                <span className="value">92100</span>$
              </p>
              <a className="details-btn" href="">
                Details
              </a>
            </li>
            <li className="card">
              <img src="./images/eminem.jpg" alt="eminem" />
              <p>
                <strong>Brand: </strong>
                <span className="brand">Air Jordan</span>
              </p>
              <p>
                <strong>Model: </strong>
                <span className="model">4 Retro CARHARTT X EMINEM</span>
              </p>
              <p>
                <strong>Value:</strong>
                <span className="value">30000</span>$
              </p>
              <a className="details-btn" href="">
                Details
              </a>
            </li>
          </ul>
          {/* Display an h2 if there are no posts */}
          <h2>There are no items added yet.</h2>
        </section>
        {/* Register Page (Only for Guest users) */}
        <section id="register">
          <div className="form">
            <h2>Register</h2>
            <form className="login-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">login</button>
              <p className="message">
                Already registered? <a href="#">Login</a>
              </p>
            </form>
          </div>
        </section>
        {/* Login Page (Only for Guest users) */}
        <section id="login">
          <div className="form">
            <h2>Login</h2>
            <form className="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>
        {/* Create Page (Only for logged-in users) */}
        <section id="create">
          <div className="form">
            <h2>Add item</h2>
            <form className="create-form">
              <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
              <input type="text" name="model" id="shoe-model" placeholder="Model" />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
              />
              <input type="text" name="value" id="shoe-value" placeholder="Value" />
              <button type="submit">post</button>
            </form>
          </div>
        </section>
        {/* Details page */}
        <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src="./images/travis.jpg" alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>
                Brand: <span id="details-brand">Air Jordan</span>
              </p>
              <p>
                Model: <span id="details-model">1 Retro High TRAVIS SCOTT</span>
              </p>
              <p>
                Release date: <span id="details-release">2019</span>
              </p>
              <p>
                Designer: <span id="details-designer">Travis Scott</span>
              </p>
              <p>
                Value: <span id="details-value">2000</span>
              </p>
            </div>
            {/*Edit and Delete are only for creator*/}
            <div id="action-buttons">
              <a href="" id="edit-btn">
                Edit
              </a>
              <a href="" id="delete-btn">
                Delete
              </a>
            </div>
          </div>
        </section>
        {/* Edit Page (Only for logged-in users) */}
        <section id="edit">
          <div className="form">
            <h2>Edit item</h2>
            <form className="edit-form">
              <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
              <input type="text" name="model" id="shoe-model" placeholder="Model" />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
              />
              <input type="text" name="value" id="shoe-value" placeholder="Value" />
              <button type="submit">post</button>
            </form>
          </div>
        </section>
        {/* Search Page (Only for logged-in users) */}
        <section id="search">
          <h2>Search by Brand</h2>
          <form className="search-wrapper cf">
            <input
              id="#search-input"
              type="text"
              name="search"
              placeholder="Search here..."
              required=""
            />
            <button type="submit">Search</button>
          </form>
          <h3>Results:</h3>
          <div id="search-container">
            <ul className="card-wrapper">
              {/* Display a li with information about every post (if any)*/}
              <li className="card">
                <img src="./images/travis.jpg" alt="travis" />
                <p>
                  <strong>Brand: </strong>
                  <span className="brand">Air Jordan</span>
                </p>
                <p>
                  <strong>Model: </strong>
                  <span className="model">1 Retro High TRAVIS SCOTT</span>
                </p>
                <p>
                  <strong>Value:</strong>
                  <span className="value">2000</span>$
                </p>
                <a className="details-btn" href="">
                  Details
                </a>
              </li>
            </ul>
            {/* Display an h2 if there are no posts */}
            {/* <h2>There are no results found.</h2> */}
          </div>
        </section>
      </main>
    </div>

  );
}

export default App;