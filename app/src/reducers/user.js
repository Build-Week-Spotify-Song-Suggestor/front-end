const initialState = {
  isLoggedIn: true,
  selectedGenres: [],
  loadUserDash: false,
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_GENRES":
      return {
        ...state,
        selectedGenres: payload,
      };
    case "LOAD_USER_DASHBOARD":
      return {
        ...state,
        loadUserDash: payload,
      };
  }
  return {
    ...state,
  };
};
