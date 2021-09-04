import { Redirect } from 'react-router';
import { storeType } from '../redux/redux-store';
import { connect } from 'react-redux';


export const withAuthRedirect = (Component: any) => {

    function Wrapper(props: MapStateToPropsType) {
        if (!props.isAuth) return <Redirect to='/login' />
        return <Component {...props} />
    }

    return connect(withAuthRedirectMapStateToProps)(Wrapper);
}

type MapStateToPropsType = {
    isAuth: boolean
}

export const withAuthRedirectMapStateToProps = (state: storeType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
