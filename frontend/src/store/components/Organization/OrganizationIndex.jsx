import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrganizations, getOrganizations } from "../../organizations";
import OrganizationIndexItem from "./OrganizationIndexItem";
import './OrgIndex.css';

const OrganizationIndex = () => {
  const dispatch = useDispatch();
  const organizations = useSelector(getOrganizations);

  useEffect(()=>{
    dispatch(fetchOrganizations());
  }, [dispatch])

  return(
    <div className="org-index-container">
      <h1 className="org-index-header">Organizations</h1>
      <ul className="org-index-list">
        {organizations.map(organization => <OrganizationIndexItem key={organization.id} organization={organization} />)}
      </ul>
    </div>
  )
}

export default OrganizationIndex