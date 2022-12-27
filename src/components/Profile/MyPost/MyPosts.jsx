import React  from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ErrorMessage, Field, Form, Formik} from "formik";

export default (props) => {
    let postsElements = [...props.posts]
        .reverse()
        .map( post => <Post message={post.message} key={post.id} likesCount={post.likesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <Formik
                    initialValues={{postText: ""}}
                    validateOnBlur
                    onSubmit={(values) => {props.addPost(values.postText); values.postText = ""}}
                >{() => (
                    <Form>
                        <Field name="postText" type="text"/>
                        <ErrorMessage name='postText' component="div"/>
                        <button type={'submit'}>Send</button>
                    </Form>
                )}
                </Formik>
            </div>
            <div className={s.post}>
                { postsElements }
            </div>
        </div>
    );
}