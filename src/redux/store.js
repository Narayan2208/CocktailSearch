// import { legacy_createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import logger from 'redux-logger'

// import rootReducer from "./root-reducer";

// const middleware = [thunk];

// if(import.meta.env.VITE_USER_NODE_ENV === "development"){
//     middleware.push(logger);
// }

// const store = legacy_createStore(rootReducer, applyMiddleware(...middleware));

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "./root-reducer";

const middleware = [thunk];

if (import.meta.env.VITE_USER_NODE_ENV === "development") {
  middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
