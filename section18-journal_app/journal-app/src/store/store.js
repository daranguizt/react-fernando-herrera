import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";

//bien verboso, en este caso podría solo agregar el único reducer
//si tengo más, es lo mejor combinar
const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(reducers);
