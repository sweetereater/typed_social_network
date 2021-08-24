import s from './Post.module.css';
import { PostType } from '../../../redux/stateTypes';
import { HeartFilled } from '@ant-design/icons';


const Post = (props: PostType) => {
    return (
        <div className={s.post}>
            <img
                className={s.post__img}
                src={props.imgSrc}
                alt=""
            />
            <div className={s.postDetails}>
                {props.text}
                <div className={s.likesCount}><HeartFilled /> {props.likesCount}  </div>

            </div>


        </div>
    )
}

export default Post;