import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrganization, getOrganization } from "../../organizations";
import Review from "../Review/Review";
import './OrgShow.css';

const OrganizationShow = () => {
  const { organizationId } = useParams();
  const dispatch = useDispatch();
  const organization = useSelector(getOrganization(organizationId));

  useEffect(()=>{
    dispatch(fetchOrganization(organizationId));
  }, [organizationId, dispatch])

  if (!organization) return null;

  return(
    <div className="org-show-container">
      <div className="org-show-header-container">
        <h1  className="org-show-header">{organization.name}</h1>
        <h2>{organization.location}</h2>
      </div>
      <div className="org-show-content">
        <div className="org-show-content-upper">
          <h1>Pets from {organization.name}</h1>
          {organization.animals && (
            <ul className="org-show-animals">
              {/* {Object.values(organization.animals).map(animal => <AnimalIndexItem key={animal.id} animal={animal} />)} */}
            </ul>
          )}
        </div>
        <div className="org-show-content-lower">
          <h1>Reviews go here</h1>
          {organization.reviews && (
          <div className="org-show-reviews-container">
            <ul>{Object.values(organization.reviews).map(review => <Review key={review.id} review={review} />)}</ul>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrganizationShow