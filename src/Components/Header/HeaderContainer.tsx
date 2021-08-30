import React from 'react';
import Header from './Header';
import axios from 'axios';
import { setUserData, UserData, setAuthStatus } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { storeType } from '../../redux/redux-store';

interface IHeaderContainerProps {

    setUserData: (data: UserData) => void
    setAuthStatus: (authStatus: boolean) => void
    isAuth: boolean
    login: string
}

class HeaderContainer extends React.Component<IHeaderContainerProps> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(data => data.data.data) // :D
            .then(data => {
                this.props.setUserData(data)
                this.props.setAuthStatus(true);
            });
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
        login: state.auth.login
    }
)


export default connect(mapStateToProps, { setUserData, setAuthStatus })(HeaderContainer);