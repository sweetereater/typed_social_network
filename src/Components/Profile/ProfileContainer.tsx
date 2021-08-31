import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { storeType } from '../../redux/redux-store';
import { setUserProfile } from '../../redux/profilePageReducer';
import axios from 'axios';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            console.log(response.data);
        });

    }
    render() {
        return (
            <Profile />
        )
    }
}

const mapStateToProps = (state: storeType) => {
}

const dispatchProps = {
    setUserProfile
}


export default connect(mapStateToProps, dispatchProps)(ProfileContainer);