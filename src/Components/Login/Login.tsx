import s from './Login.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Redirect } from 'react-router-dom';
import { storeType } from '../../redux/redux-store';
import { connect } from 'react-redux';

type LoginPropsType = {
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    if (props.isAuth) return <Redirect to='/' />

    return (
        <div className={s.outerContainer}>
            <div className={s.formContainer}>
                <div className={s.loginHeader}>Login, please</div>

                <Formik
                    initialValues={{ login: 'biba', password: 'boba' }}

                    validate={(values) => {
                        const errors: any = {};
                        if (!values.login) {
                            errors.login = "Login is required";
                        }
                        if (!values.password) {
                            errors.password = "Password is required";
                        }
                        return errors;
                    }}

                    onSubmit={(values, methods) => {
                        console.log('Values from form -> ', values)
                        console.log('Submiting...')
                        console.log('Methods:', methods);
                    }}
                >
                    {(props) => {
                        return <Form className={s.form}>
                            <Field className={s.formInput} name="login" />
                            <ErrorMessage name="login" component="div" />
                            <Field className={s.formInput} name="password" type="password" />
                            <ErrorMessage name="password" component="div" />
                            <button className={s.loginSubmitButton} type="submit">
                                Log in
                            </button>
                        </Form>
                    }}
                </Formik>
            </div>

        </div>
    )
}

const mapStateToProps = (state: storeType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(Login);