import * as React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
interface IProps {

}

class StartScreen extends React.Component<IProps>{
    public constructor(props) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="content">
                <Header auth={false} onClick={(event)=>{
                    event.preventDefault();
                    return;
                }} logo={'Chess!'}/>
                <Menu/>
            </div>
        )
    }
}

const mapStateToProps = (state: {}) => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);