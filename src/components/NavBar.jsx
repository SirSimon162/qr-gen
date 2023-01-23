import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";
import ToggleTheme from "./ToggleTheme";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 bg-primary text-primary-content overflow-none shadow-xl">
      <div className="container">
        <div className="flex-none px-2">
          <AiOutlineLink className="inline text-3xl pr-2" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
            <ToggleTheme className="btn btn-ghost my-2"/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;