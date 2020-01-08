import * as React from 'react';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
} from 'react-router-dom';

import StartScreen from '../../Views/StartScreen/StartScreen';
import Auth from '../../Views/Auth/Auth'
interface IProps {
    // routes: JSX.Element;
    // saveParams?: (name, params) => void;
}

interface IState {

}

export class Routes extends React.Component<IProps, IState> {
    public render(): JSX.Element {
        return (
            <Switch>
                <Route history={history} exact={ true } path='/' component={StartScreen}/>
                <Route history={history} exact={ true } path='/auth' component={Auth}/>
                <Route render={() => <span>Тоже не найдено</span>} />
            </Switch>
        );
    }
}

