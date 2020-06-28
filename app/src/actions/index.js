export const ADD_GENRES = "ADD_GENRES";
export const LOAD_USER_DASHBOARD = "LOAD_USER_DASHBOARD";

// Action Creators

export const addGenres = (data) => {
  return {
    type: ADD_GENRES,
    payload: data,
  };
};

export const loadUserDash = () => {
  return {
    type: LOAD_USER_DASHBOARD,
    payload: true,
  };
};
