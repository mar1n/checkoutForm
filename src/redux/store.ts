// import { applyMiddleware, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducers/rootReducer';

// const middlewareEnhancer = applyMiddleware(thunkMiddleware);
// const composedEnhancers = composeWithDevTools(middlewareEnhancer);

// const store = createStore(rootReducer, undefined, composedEnhancers);
import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "./reducers/detailsSlice";
import shippingReducer from "./reducers/shippingSlice";
import paymentReducer from "./reducers/paymentSlice";
import stepperReducer from "./reducers/stepperSlice";

const store = configureStore({
  reducer: {
    details: detailsReducer,
    shipping: shippingReducer,
    payment: paymentReducer,
    stepper: stepperReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
