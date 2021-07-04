import { Link } from "react-router-dom"
import logo from "../../assets/codepath.svg"
import "./Navbar.css"

export default function Navbar({ user, setUser, handleLogout }) {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="codepath logo"/>
          </Link>
        </div>

        <ul className="links">
          <li>
            <Link to="/activity">Activity</Link>
          </li>
          <li>
            <Link to="/exercise">Exercise</Link>
          </li>
          <li>
            <Link to="/nutrition">Nutrition</Link>
          </li>
          <li>
            <Link to="/sleep">Sleep</Link>
          </li>
          {user?.email ? (
            <>
            <li>
              <span>{user.email}</span>
            </li>
            <li>
              <button onClick={handleLogout}><Link to="/">Logout</Link></button>
            </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button>Sign Up</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
