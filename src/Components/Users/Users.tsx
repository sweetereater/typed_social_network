import s from './Users.module.css';
import { UserType } from '../../redux/usersPageReducer';
import User from './User/User';

type UserPropsType = {
    users: Array<UserType>
    activePage: number
    lastPage: number
    handleClick: (page: number) => void
    followProgress: Array<number>
    followUser: (id: number, followStatus: boolean) => void
}

const Users = (props: UserPropsType) => {

    const {
        activePage,
        lastPage,
        handleClick,
        users,
        followProgress,
        followUser

    } = props;

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
            createPaginationButtons(activePage, 3, lastPage).map(item => {
                const classes = activePage === item ? `${s.pageButton} ${s.selectedPage}` : `${s.pageButton}`;
                return <button
                    key={item}
                    onClick={() => handleClick(item)}
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
                    users.map(user => {
                        return <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            followed={user.followed}
                            photos={user.photos}
                            followProgress={followProgress}
                            followUser={followUser}
                        />
                    })
                }
            </div>

        </div>
    )

}

export default Users;