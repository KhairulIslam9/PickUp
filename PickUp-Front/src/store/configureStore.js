import { combineReducers, createStore } from 'redux';
import listProReducer from './reducers/listProReducer';
import reservationReducer from './reducers/reservationReducer';
import proReducer from './reducers/proReducer';
import userReducer from './reducers/userReducer';

const MainReducer = combineReducers({
  //titre : la reducer
  reservation: reservationReducer,
  proProfile : proReducer,
  pro : listProReducer,
  user : userReducer
})

export default createStore(MainReducer);