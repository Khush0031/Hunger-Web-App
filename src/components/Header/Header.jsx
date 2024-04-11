import { useContext } from "react";
import LOGO from "../../assets/flames-icon.svg";
import { Link } from "react-router-dom";
import { LifeBuoy, ShoppingBag } from "lucide-react";
import { FaRegUser } from "react-icons/fa6";
import userContext from "../../context/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  // data from context
  const { loggedInUser } = useContext(userContext);

  // selector hook to subscribe to cartSlice / store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      {/* HEADER LOGO  */}
      <div className="logo-container flex flex-row justify-center items-center">
        <Link to="/">
          <img src={LOGO} alt="LOGO" className="w-12 h-12 md:w-16 md:h-16" />
        </Link>
        <Link to="/">
          <h2 className="text-orange-500 cursor-pointer -ml-4 md:-ml-6 font-sans font-extrabold text-lg md:text-3xl">
            Hunger
          </h2>
        </Link>
      </div>
      {/* NAV ITEMS */}
      <div className="nav-items">
        <ul className="flex items-center justify-end">
          <Link to="/help">
            <li className="flex items-center justify-center mx-2 md:mx-4">
              <span className="p-2">
                <LifeBuoy size={18} />
              </span>
              <span className="hidden md:block">Help</span>
            </li>
          </Link>

          <Link to="/sign-in">
            <li className="flex items-center justify-center mx-2 md:mx-4">
              <span className="p-2">
                <FaRegUser size={18} />
              </span>
              <span className="hidden md:block">
                {loggedInUser ? loggedInUser : "Sign In"}
              </span>
            </li>
          </Link>

          <Link to="/cart">
            <li className="flex items-center justify-center relative mx-2 md:mx-4">
              <span className="p-2">
                <ShoppingBag size={18} />
              </span>
              <span className="hidden md:block">Cart</span>
              <span className="absolute top-0 right-0 mt-1 mr-1 text-orange-500 text-xs md:text-xl -px-2 py-1 md:py-2 rounded-full">
                {cartItems.length}
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
