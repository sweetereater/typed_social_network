import s from './Post.module.css';
import { postType } from '../../../redux/stateTypes';


const Post = (props: postType) => {
    return (
        <div className={s.post}>
            <img
                className={s.post__img}
                src={props.imgSrc}
                alt=""
            />
            {props.text}
            <br />
            Likes - {props.likesCount}
        </div>
    )
}

export default Post;