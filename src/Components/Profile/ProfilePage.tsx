import React, { FocusEvent, ChangeEvent } from 'react';
import { ProfileType } from '../../redux/profilePageReducer';
import s from './ProfilePage.module.css';
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons'

interface IProfilePagePropsType {
    profile: ProfileType
    status: string
    id: number | null
    updateNewStatus: (status: string) => void
}

class ProfilePage extends React.Component<IProfilePagePropsType>{

    state = {
        editMode: false,
        status: this.props.status
    }

    setEditModeOn = () => {
        this.setState({
            editMode: true
        })
    }

    setEdinModeOff = () => {
        this.setState({
            editMode: false
        })
    }

    handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    handleNewStatus = (e: FocusEvent<HTMLInputElement>) => {
        const newText = e.currentTarget.value;
        if (newText) {
            this.props.updateNewStatus(newText);
        } else {
            this.setState({
                status: this.props.status
            })
        }
        this.setEdinModeOff();
    }


    render() {

        const {
            aboutMe,
            fullName,
            photos,
            lookingForAJob,
            lookingForAJobDescription,
            userId
        } = this.props.profile;

        return (
            <div className={s.currentProfileContainer}>
                <img className={s.profilePhoto} src={photos.large} alt={fullName} />

                <div className={s.profileInfoContainer}>
                    <div className={s.profileInfo}>

                        <div className={s.profileFullName}>
                            <h1>{fullName}</h1>
                            <div onDoubleClick={this.setEditModeOn}>
                                {this.state.editMode && this.props.id === userId ?
                                    <input onChange={this.handleInputChange} onBlur={this.handleNewStatus} autoFocus value={this.state.status} /> :
                                    <p> {this.props.status}</p>}
                            </div>
                        </div>

                        <h3>About: {aboutMe}</h3>
                        <p>Текущий статус занятости: {lookingForAJob ? "Ищу работу" : "Не ищу работу"}</p>
                        <p>Описание: {lookingForAJobDescription}</p>
                    </div>

                    <div className={s.profileStatus}></div>

                    <div className={s.userContacts}>
                        <InstagramOutlined style={{ fontSize: "2rem", cursor: "pointer", }} />
                        <FacebookOutlined style={{ fontSize: "2rem", marginLeft: "0.5rem", cursor: "pointer", }} />
                        <YoutubeOutlined style={{ fontSize: "2rem", marginLeft: "0.5rem", cursor: "pointer", }} />
                    </div>

                </div>
            </div>
        )
    }

}

export default ProfilePage;