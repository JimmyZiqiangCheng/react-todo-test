import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="link">
        <Link to="/todo">Todo</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
