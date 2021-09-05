import React, { ChangeEvent, KeyboardEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostType } from '../../redux/stateTypes'
import { ErrorMessage, Field, Form, Formik } from 'formik';


type MyPostsPropsType = {
    posts: Array<PostType>
    addNewPost: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postView = props.posts.map(post => {
        return <Post
            id={post.id}
            key={post.id}
            text={post.text}
            likesCount={post.likesCount}
            imgSrc={post.imgSrc}
        />
    })

    const addNewPost = (text: string) => {
        props.addNewPost(text);
    }

    return (
        <div className={s.postsContainer}>
            <div className={s.newPostForm}>
                <Formik
                    initialValues={{ newPostText: '' }}
                    validate={
                        (values) => {
                            let errors: any = {};
                            if (!values.newPostText) {
                                errors.newPostText = "Пожалуйста, введите текст сообщения"
                            }
                            if (values.newPostText && values.newPostText.length > 10) {
                                errors.newPostText = "Длина сообщения не должна превышать 10 символов"
                            }
                            return errors;
                        }}
                    onSubmit={(values, methods) => {
                        methods.setFieldValue('newPostText', '');
                        methods.setTouched({})
                        addNewPost(values.newPostText)

                    }}
                >
                    {(props) => {
                        return <Form>
                            <Field className={s.addPostInput} name="newPostText" />
                            <button className={s.addPostButton} >Add new post</button>
                            {props.touched.newPostText && props.errors.newPostText && <ErrorMessage className={s.errorMessage} name="newPostText" component="div" />}
                        </Form>
                    }}
                </Formik>
            </div>

            <h3 className={s.myPostsTitle}>My Posts</h3>
            <div className={s.posts}>  {postView}  </div>
        </div>
    )
}

export default MyPosts;