const initialState = {
  listReservationPro: [],
  listReservationUser: [],
};

function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BY_PRO":
      return {
        ...state,
        listReservationPro: action.value,
      };
    case "GET_BY_USER":
      return {
        ...state,
        listReservationUser: action.value,
      };
    default:
      return state;
  }
}

export default reservationReducer;
