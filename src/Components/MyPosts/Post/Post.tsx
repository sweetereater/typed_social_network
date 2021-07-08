import s from './Post.module.css';

type PostPropsType = {
    text: string
    likesCount: number
    imageSource: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img
                className={s.post__img}
                src={props.imageSource}
                alt=""
            />
            {props.text}
            <br />
            Likes - {props.likesCount}
        </div>
    )
}

export default Post;