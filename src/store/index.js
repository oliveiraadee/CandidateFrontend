import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/user.reducer";

const store = createStore(userReducer, compose(applyMiddleware(thunk)));

export default store;