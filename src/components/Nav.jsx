import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav m-5 ">
      <li className="nav-item me-5 ">
        <Link className="text-decoration-none" to="/">
          骰子一號
        </Link>
      </li>
      <li className="nav-item">
        <Link className="text-decoration-none" to="/diceTwo">
          骰子二號
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
