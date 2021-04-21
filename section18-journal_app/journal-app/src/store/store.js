import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
//bien verboso, en este caso podría solo agregar el único reducer
//si tengo más, es lo mejor combinar
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
