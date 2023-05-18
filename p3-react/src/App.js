// import react router stuff
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductListings from "./pages/ProductListings";
import ShoppingCart from "./pages/ShoppingCart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

function App() {
  return (

    <div className="container">

      <Router>
        {/*<Routes> the area where the page is displayed */}

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="javascript:void(0)">
              <img src="./air-conditioner.png" alt="Logo" style={{ width: "50px", height: "50px" }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shopping-cart">Shopping Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Log In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup"></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product-details"></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders"></Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="text" placeholder="Search" />
                <button className="btn btn-primary" type="button">Search</button>
              </form> */}
            </div>
          </div>
        </nav>
        <Routes>
          {/*ProductListings route */}
          <Route path="/" element={
            <ProductListings />
          } />

          <Route path="/shopping-cart" element={
            <ShoppingCart />
          } />

          <Route path="/profile" element={
            <Profile />
          } />

          <Route path="/login" element={
            <Login />
          } />

          <Route path="/signup" element={
            <SignUp />
          } />

          <Route path="/orders" element={
            <Orders />
          } />

          <Route path="/product-details/:product_id" element={
            <ProductDetails />
          } />

        </Routes>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
            </div>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
