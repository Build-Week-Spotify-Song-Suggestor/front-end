const initialState = {
  name: "Mark",
};

export const user = (state = initialState, { type, payload }) => {
  return {
    ...state,
  };
};
