import { NavLink } from "react-router-dom";
import './NotFound.css';

const NotFound = () => (
  <div className="not-found-page">
    <h1>404 - Not Found</h1>
    <NavLink to="/">Back to Home</NavLink>
  </div>
)

export default NotFound;