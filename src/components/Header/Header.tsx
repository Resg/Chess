import * as React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import UserContainer from '../../modules/UserContainer/UserContainer';
import {ISignInReducer, signIn} from '../../modules/Redux/SignInReducer/SignInReducer';
import {setLogin} from '../../modules/Redux/SignInReducer/SignInAction';
import {connect} from 'react-redux';
import userContainer from "../../modules/UserContainer/UserContainer";

interface IProps {
    auth?: boolean;
    // className?: string;
    logo?: string;
    onClick?: (event) => void;
    setLogin?: (login: string) => void;
}

interface IState {
}

export class Header extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        auth: false,
    };
    public constructor(props: IProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.setLogin = this.setLogin.bind(this);
    }
    public render(): JSX.Element {
        // const { className } = this.props;
        const { auth } = this.props;
        const { logo } = this.props;
        return (
            <header className='header'>
                <div className='header__left'>
                    <Link to='/' className='header__logo'>{ logo }</Link>
                    <Link to='/' className='header__nav'>PLAY</Link>
                    <Link to='/' className='header__nav'>RULES</Link>
                </div>
                {
                    auth ?
                        <p className='header__nav'>{UserContainer.getInfo().login}</p>
                    :
                        <Link to='/auth' className='header__nav'>AUTH</Link>
                }
            </header>
        )
    }
    private onClick(event): void {
        const {onClick} = this.props;

        if (onClick) {
            onClick(event);
        }
    }
    private setLogin(login: string): void {
        this.props.setLogin(login);
    }
}

const mapStateToProps = (state: { signIn: ISignInReducer; }) => {
    return {
        auth: state.signIn.login,
        logo: 'chess',
        onClick: (event) =>{},
        setLogin: (login: string) => {},
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setLogin(login: string) {
            dispatch(setLogin(login));
            console.log(userContainer.getInfo().login);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);