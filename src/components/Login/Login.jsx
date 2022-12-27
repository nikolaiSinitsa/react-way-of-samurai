import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = ({isAuth, login}) => {


    if (isAuth) return <Navigate to={'/Profile'} />
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: true}}
                validateOnBlur
                // validationSchema={validationSchemaName}
                onSubmit={(values, {setStatus}) => {login(values.email, values.password, values.rememberMe, setStatus)}}>
                {(status) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field id="email" type="email" name="email"/>
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <Field id="password" type="password" name="password"/>
                        </div>
                        <div>
                            <Field id="rememberMe" type="checkbox" name="rememberMe"/>
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <button type="submit">Send</button> <br></br>
                        {status.status}
                    </Form>
                )}
            </Formik>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps,{login})(Login);