// import { applyMiddleware, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducers/rootReducer';



// const middlewareEnhancer = applyMiddleware(thunkMiddleware);
// const composedEnhancers = composeWithDevTools(middlewareEnhancer);


// const store = createStore(rootReducer, undefined, composedEnhancers);
import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "./reducers/deatilsSlice";
import shippingReducer from "./reducers/shippingSlice";
import paymentReducer from "./reducers/paymentSlice";

export default configureStore({
    reducer: {
        deatails: detailsReducer,
        shipping: shippingReducer,
        payment: paymentReducer
    }
});