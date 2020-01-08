import * as React from 'react';
import './Menu.scss';
import UserContainer from '../../modules/UserContainer/UserContainer'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


interface IProps {

}

interface IState {

}

class Menu extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
    }
    render(): JSX.Element{
        return (
            <div className="menu">
                <Link to="/single" className="menu__link">Single</Link>
                <Link to="/rules" className="menu__link">Rules</Link>
                <Link to="/support" className="menu__link">Support</Link>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);