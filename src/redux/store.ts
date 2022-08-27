import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer';



const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);


const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;