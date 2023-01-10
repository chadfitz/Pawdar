import { NavLink } from "react-router-dom";
import './Org.css';

const OrganizationIndexItem = ({ organization }) => {

  return(
    <NavLink to={`/organizations/${organization.id}`} className='org-link'>
      <div className="org-container">
        <h1 className="org-header">{organization.name}</h1>
        <p className="org-location">{organization.location}</p>
      </div>
    </NavLink>
  )
}

export default OrganizationIndexItem;