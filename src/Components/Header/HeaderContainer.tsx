import React from 'react';
import Header from './Header';
import { getAuthorizationStatus, logoutUser } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { storeType } from '../../redux/redux-store';

interface IHeaderContainerProps {

    logoutUser: () => void
    isAuth: boolean
    login: string
}

class HeaderContainer extends React.Component<IHeaderContainerProps> {

    // componentDidMount() {
    //     this.props.getAuthorizationStatus()
    // }

    render() {
        const { isAuth, login } = this.props;
        return (
            <Header isAuth={isAuth} login={login} logoutUser={this.props.logoutUser} />
        )
    }
}

const mapStateToProps = (state: storeType) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
)



export default connect(mapStateToProps, { logoutUser })(HeaderContainer);