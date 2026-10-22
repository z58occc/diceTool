import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav m-5 d-flex align-items-center ">
      <div className="dropdown me-5">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          骰子工具
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="ps-3 p-1 w-100 border-bottom me-5 ">
            <Link className="text-decoration-none" to="/">
              骰子一號
            </Link>
          </li>
          <li className="ps-3 p-1 w-100 border-bottom me-5">
            <Link className="text-decoration-none" to="/diceTwo">
              骰子二號
            </Link>
          </li>
          <li className="ps-3 p-1 w-100 ">
            <Link className="text-decoration-none" to="/diceThree">
              骰子三號
            </Link>
          </li>
        </ul>
      </div>

      <li className="nav-item">
        <Link className="text-decoration-none"
        to="/roleCard"
        >角色卡編輯器</Link>
      </li>
    </ul>
  );
}

export default Nav;
