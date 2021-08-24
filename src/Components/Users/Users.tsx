import s from './Users.module.css';
import userPhoto from '../../assets/images/kitty.jpg';
import { UserType } from '../../redux/usersPageReducer';

type UserPropsType = {
    users: Array<UserType>
    activePage: number
    lastPage: number
    handleClick: (page: number) => void
    toggleFollow: (id: number) => void
}

const Users = (props: UserPropsType) => {

    const createPaginationButtons = (page: number, step: number, maxPage: number) => {
        const result = [];
        for (let i = page - step; i <= page + step; i++) {
            if (i > 0 && i <= maxPage) {
                result.push(i);
            }
        }
        return result;
    }

    const getPaginationButtons = () => {
        return (
            createPaginationButtons(props.activePage, 3, props.lastPage).map(item => {
                const classes = props.activePage === item ? `${s.pageButton} ${s.selectedPage}` : `${s.pageButton}`;
                return <button
                    key={item}
                    onClick={() => props.handleClick(item)}
                    className={classes}>
                    {item}
                </button>
            })
        )

    }

    return (
        <div className={s.usersContainer}>
            <div className={s.paginationPanel}>
                {getPaginationButtons()}
            </div>
            <div className={s.users}>
                {
                    props.users.map(user => {
                        return (
                            <div key={user.id} className={s.user}>
                                <div className={s.photoContainer}>
                                    <img className={s.userPhoto} src={user.photos.small ? user.photos.small : userPhoto} alt="" />
                                    <button onClick={() => props.toggleFollow(user.id)}
                                        className={s.toggleFollowButton}>
                                        {user.followed ? "Unfollow" : "Follow"}
                                    </button>
                                </div>
                                <div className={s.userDescription}>
                                    {user.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )

}

export default Users;