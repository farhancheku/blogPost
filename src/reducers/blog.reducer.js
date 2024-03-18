// exampleReducer.js
const initialState = {
  allViews: {},
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VIEW":
      const allViewsData = state.allViews;
      allViewsData[action.payload.id] = allViewsData[action.payload.id]
        ? allViewsData[action.payload.id] + 1
        : 1;
      return {
        ...state,
        allViews: allViewsData,
      };
    default:
      return state;
  }
};
