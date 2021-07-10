import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profile_info}>
            <div className={s.img_container}>
                <img
                    src="https://legacy.mortalkombatonline.com/content/games/mk3/cyrax/bio.gif"
                    alt=""
                    className={s.img_container__img}
                />
            </div>
            <div className={s.desc}>
                <h1>Privet!</h1>
            </div>
        </div>
    )
}

export default ProfileInfo;