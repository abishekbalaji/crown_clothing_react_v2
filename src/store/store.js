import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import createSagaMiddleware from "@redux-saga/core";

import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// middlewares are one type of enhancers. They catch actions before they reach the reducers
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

// Second argument --> additional default states
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
