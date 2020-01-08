import { combineReducers} from 'redux';
import {signIn} from './SignInReducer/SignInReducer';

export default combineReducers({
    signIn,
});