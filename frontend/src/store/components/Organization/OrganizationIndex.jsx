import { useDispatch, useSelector } from "react-redux";
import { getOrganizations } from "../../organizations";
import './OrgIndex.css';

const OrganizationIndex = () => {
  const dispatch = useDispatch();
  const organizations = useSelector(getOrganizations);

  return(
    <>Hi</>
  )
}

export default OrganizationIndex