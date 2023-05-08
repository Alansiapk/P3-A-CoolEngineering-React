// import react router stuff
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap/min.css'
import ProductListings from "./pages/ProductListings";
import ShoppingCart from "./pages/ShoppingCart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (

    <div className="container">

      <Router>
        {/*<Routes> the area where the page is displayed */}
        <Routes>
          {/*ProductListings route */}
          <Route path="/" element={
            <ProductListings/>
          } />

          <Route path="/ShoppingCart" element={
            <ShoppingCart/>
          } />

          <Route path="/Profile" element={
            <Profile/>
          } />

          <Route path="/Login" element={
            <Login/>
          } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
