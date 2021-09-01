import React from 'react';
import Header from './Header';
import { setUserData, UserData, getAuthorizationStatus } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { storeType } from '../../redux/redux-store';

interface IHeaderContainerProps {

    setUserData: (data: UserData) => void
    getAuthorizationStatus: () => void
    isAuth: boolean
    login: string
}

class HeaderContainer extends React.Component<IHeaderContainerProps> {

    componentDidMount() {
        this.props.getAuthorizationStatus()
    }

    render() {
        const { isAuth, login } = this.props;
        return (
            <Header isAuth={isAuth} login={login} />
        )
    }
}

const mapStateToProps = (state: storeType) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
)


export default connect(mapStateToProps, { setUserData, getAuthorizationStatus })(HeaderContainer);