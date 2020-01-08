import * as React from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../../components/Header/Header';
import {connect} from 'react-redux';
import './Auth.scss';

interface IProps {

}

interface IState {

}

class Auth extends React.Component<IProps, IState>{
    constructor(props:  IProps) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div className='content'>
                <Header logo='chess'/>
                <form className='auth-form'>
                    <header className='auth-form__header'>Welcome!</header>
                    <input className='auth-form__input'/>
                    <input className='auth-form__input'/>
                    <button className='auth-form__button'>auth</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state: {}) => {
    return {};
};
const mapDispatchToProps = dispatc => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

