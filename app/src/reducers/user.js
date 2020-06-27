const initialState = {
  isLoggedIn: true,
};

export const user = (state = initialState, { type, payload }) => {
  return {
    ...state,
  };
};
