const initialState = {
  id: "",
  name: "",
  description: "",
  adresseStreet: "",
  adresseNum: "",
  adresseCity: "",
  adresseZip: "",
  phoneNum: "",
  latitude: "",
  longgitude: "",
  rating: "",
  logo: "",
  listImage: [],
};

function proReducer(state = initialState, action) {
  switch (action.type) {
    case "DETAIL_PRO":
      return {
        ...state,
        id: action.value.id,
        name: action.value.name,
        description: action.value.description,
        adresseStreet: action.value.adresseStreet,
        adresseNum: action.value.adresseNum,
        adresseCity: action.value.adresseCity,
        adresseZip: action.value.adresseZip,
        phoneNum: action.value.phoneNum,
        latitude: action.value.latitude,
        longgitude: action.value.longgitude,
        rating: action.value.rating,
        logo: action.value.logo,
      };
    case "ADD_LIST_IMAGE":
      return {
        ...state,
        listImage: action.value,
      };
    default:
      return state;
  }
}

export default proReducer;
