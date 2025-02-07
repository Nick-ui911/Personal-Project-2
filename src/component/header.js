import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import LogoImg from "../assets/images/alphawizzlogo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <img className="logo navbar-brand" alt="logo" src={LogoImg} />

      {/* Hamburger button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navigation Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <nav className="nav-item">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/restaurant">
                RESTAURANT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clothing">
                CLOTHING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/instamart">
                GROCERY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fitness">
                FITNESS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dineout">
                DINEOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trending">
                TRENDING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mybooking">
                BOOKINGS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fav" to="/favorite">
                <MdFavorite />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <div className="cart-logo position-relative">
                  <span className="cart-icon">
                    <FaShoppingCart />
                  </span>
                  {cartItems.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <Link className="button-login" to="/login">
          <button className="btn btn-primary login-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
