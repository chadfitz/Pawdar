// ACTION CONSTANTS:
export const RECEIVE_ORGANIZATIONS = 'organizations/RECEIVE_ORGANIZATIONS';
export const RECEIVE_ORGANIZATION = 'organizations/RECEIVE_ORGANIZATION';
export const REMOVE_ORGANIZATION = 'organizations/REMOVE_ORGANIZATION';

// ACTION CREATORS:
export const receiveOrganizations = (organizations) => ({
  type: RECEIVE_ORGANIZATIONS,
  organizations
});

export const receiveOrganization = (organization) => ({
  type: RECEIVE_ORGANIZATION,
  organization
})

export const getOrganizations = (state) => {
  return state?.organizations ? Object.values(state.organizations) : [];
}

export const getOrganization = (organizationId) => (state) => {
  return state?.organizations ? state.organizations[organizationId] : null;
}

// THUNK ACTION CREATORS:
export const fetchOrganizations = () => async (dispatch) => {
  const res = await fetch('/api/organizations');
  if (res.ok){
    const organizations = await res.json();
    dispatch(receiveOrganizations(organizations));
  }
}

export const fetchOrganization = (organizationId) => async (dispatch) => {
  const res = await fetch(`/api/organizations/${organizationId}`);
  if (res.ok) {
    const organization = await res.json();
    dispatch(receiveOrganization(organization));
  }
}

// ORGANIZATIONS REDUCER
const organizationsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {...state};
  switch(action.type){
    case RECEIVE_ORGANIZATIONS:
      return {...newState, ...action.organizations};
    case RECEIVE_ORGANIZATION:
      return {...newState, [action.organization.organization.id]: action.organization.organization};
    default:
      return state;
  }
}

export default organizationsReducer;