import {log} from "util";


interface IUserInfo {
    login: string;
}

class UserContainer {
    private userInfo: IUserInfo;
    constructor() {
        this.userInfo = {
            login: null
        }
    }
    public auth(login: string) {
        this.userInfo = {
            login: login,
        };
    }
    public checkAuth() {
        return new Promise((resolve)=>{
            resolve(false)
        })
    }
    public isAuth() {
        return !!this.userInfo.login;
    }
    public getInfo() {
        return this.userInfo;
    }
}

const userContainer = new UserContainer();

export default userContainer;