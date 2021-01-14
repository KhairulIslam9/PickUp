// REDUCER

const initialState = {
  listPro: [],
  listCat: [],
};

function listProReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_LIST_PRO":
      return {
        ...state,
        listPro: action.value,
      };
    case "ADD_LIST_CAT":
      return {
        ...state,
        listCat: action.value,
      };
    default:
      return state;
  }
}

export default listProReducer;

// ACTION
