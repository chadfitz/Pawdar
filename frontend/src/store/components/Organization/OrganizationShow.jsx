import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrganization, getOrganization } from "../../organizations";

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
      <h1>{organization.name}</h1>
    </div>
  )
}

export default OrganizationShow