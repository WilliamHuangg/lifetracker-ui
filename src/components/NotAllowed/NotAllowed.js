import { Link } from "react-router-dom"
import "./NotAllowed.css"

export default function NotAllowed() {
  return (
    <div className="NotAllowed">
      <h2>You must be authenticated to view this page!</h2>
      <span>
        <Link to="/login">Login here</Link>
      </span>
    </div>
  )
}
