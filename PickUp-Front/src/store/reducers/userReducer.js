const initialState = {
  id: 0,
  firstName: "",
  lastName: "",
  phoneNum: "",
  email: "",
  token: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "IS_LOGIN":
      return {
        id: action.value.id,
        firstName: action.value.firstName,
        lastName: action.value.lastName,
        phoneNum: action.value.phoneNum,
        email: action.value.email,
        token: action.value.token,
      };
    case "LOG_OUT":
      return {
        id: 0,
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        token: null,
      };
    default:
      return state;
  }
}

export default userReducer;
