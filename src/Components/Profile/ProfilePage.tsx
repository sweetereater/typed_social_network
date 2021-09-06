import React, { FocusEvent, ChangeEvent, useState } from 'react';
import { ProfileType } from '../../redux/profilePageReducer';
import s from './ProfilePage.module.css';
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons'

interface IProfilePagePropsType {
    profile: ProfileType
    status: string
    id: number | null
    updateNewStatus: (status: string) => void
}

const ProfilePage = (props: IProfilePagePropsType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    const setEditModeOn = () => {
        setEditMode(true)
    }

    const setEdinModeOff = () => {
        setEditMode(false)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    const handleNewStatus = (e: FocusEvent<HTMLInputElement>) => {
        const newText = e.currentTarget.value;
        if (newText) {
            props.updateNewStatus(newText);
        } else {
            setStatus(props.status)
        }
        setEdinModeOff();
    }

    const {
        aboutMe,
        fullName,
        photos,
        lookingForAJob,
        lookingForAJobDescription,
        userId
    } = props.profile;

    return (
        <div className={s.currentProfileContainer}>
            <img className={s.profilePhoto} src={photos.large} alt={fullName} />

            <div className={s.profileInfoContainer}>
                <div className={s.profileInfo}>

                    <div className={s.profileFullName}>
                        <h1>{fullName}</h1>
                        <div onDoubleClick={setEditModeOn}>
                            {editMode && props.id === userId ?
                                <input onChange={handleInputChange} onBlur={handleNewStatus} autoFocus value={status} /> :
                                <p> {props.status}</p>}
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

export default ProfilePage;