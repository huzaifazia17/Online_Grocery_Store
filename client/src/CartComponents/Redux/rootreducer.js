import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/shoping-reducer";

const rootReducer = combineReducers({
    shop: shoppingReducer,
});

export default rootReducer;
