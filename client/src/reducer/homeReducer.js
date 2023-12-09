const initialState = {
  loading: false,
  allPosts: null,
};

const homeReducer = (state, action) => {
  switch (action.type) {
    case "start_execution":
      return {
        ...state,
        loading: true,
        allPosts: true,
      };
    default:
      return state;
  }
};

export { homeReducer, initialState };
