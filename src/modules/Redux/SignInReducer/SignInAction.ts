
import { SignInActionTypes } from './SignInReducer';
import UserContainer from '../../UserContainer/UserContainer';

export function setLogin(data: string) {
    UserContainer.auth('default');
    return {
        type: SignInActionTypes.SET_LOGIN,
        login: data,
    };
}

// export function setPassword(data: string) {
//     return {
//         type: SignInActionTypes.SET_PASSWORD,
//         password: data,
//     };
// }