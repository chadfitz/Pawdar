import { NavLink } from "react-router-dom";
import './NotFound.css';

const NotFound = () => (
  <div className="error-page">
    <p>404 - Not Found</p>
    <NavLink to="/" className='error-page-link'>Back to Home</NavLink>
  </div>
)

export default NotFound;