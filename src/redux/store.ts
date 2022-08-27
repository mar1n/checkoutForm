// import { applyMiddleware, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducers/rootReducer';



// const middlewareEnhancer = applyMiddleware(thunkMiddleware);
// const composedEnhancers = composeWithDevTools(middlewareEnhancer);


// const store = createStore(rootReducer, undefined, composedEnhancers);
import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./reducers/rootReducer";

export default configureStore({
    reducer: {
        test: testReducer
    }
});