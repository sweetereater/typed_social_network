import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            My Posts
            <Post
                text="Hello World!"
                likesCount={5}
                imageSource="http://www.thaicybergames.com/dota/images/heroes/72.jpg" />
            <Post
                text="По-тихонечку едем"
                likesCount={8}
                imageSource="http://www.thaicybergames.com/dota/images/heroes/101.jpg" />
            <Post
                text="React is nice"
                likesCount={12}
                imageSource="http://www.thaicybergames.com/dota/images/heroes/80.jpg" />
            <Post
                text="Как Ваши дела?"
                likesCount={6}
                imageSource="http://www.thaicybergames.com/dota/images/heroes/55.jpg" />
        </div>
    )
}

export default MyPosts;