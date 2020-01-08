import { applyMiddleware, createStore } from 'redux';
import _ from 'lodash';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from '../middleware';
import thunk from 'redux-thunk';

import rootReducer from '../Redux/Index';
// import { TESTING_ENV } from '../service/Consts/Consts';
/**
 * @types/webpack-env
 */
export function configureStore() {
    let middleware = applyMiddleware(thunk, logger);

    // if (process.env.NODE_ENV === TESTING_ENV) {
    //     middleware = composeWithDevTools(middleware);
    // }

    const store = createStore(rootReducer, middleware);

    // if (module.hot) {
    //     module.hot.accept('../redux', () => {
    //         const nextReducer = require('../redux/index');
    //         store.replaceReducer(nextReducer);
    //     });
    // }

    return store;
}