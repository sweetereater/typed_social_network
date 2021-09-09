import s from './Login.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Redirect } from 'react-router-dom';
import { storeType } from '../../redux/redux-store';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/authReducer';

type LoginPropsType = {
    isAuth: boolean
    authError: string
    loginUser: (email: string, password: string) => void
}

const Login = (props: LoginPropsType) => {

    const {
        isAuth,
        authError,
        loginUser
    } = props;

    if (isAuth) return <Redirect to='/' />

    return (
        <div className={s.outerContainer}>
            <div className={s.formContainer}>
                <div className={s.loginHeader}>Login, please</div>

                <Formik
                    initialValues={{ login: '', password: '' }}

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
                        loginUser(values.login, values.password);
                        methods.resetForm();
                        methods.setTouched({})
                        methods.setErrors({})
                    }}
                >
                    {({ touched, errors }) => {
                        let loginStyles = `${s.formInput}`;
                        let passwordStyles = `${s.formInput}`;

                        if (errors.login) loginStyles += ` ${s.error}`
                        if (errors.password) passwordStyles += ` ${s.error}`

                        return <Form className={s.form}>

                            <Field className={loginStyles} name="login" />
                            {touched.login && errors.login && <ErrorMessage className={s.errorText} name="login" component="div" />}

                            <Field className={passwordStyles} name="password" type="password" />
                            {touched.password && errors.password && <ErrorMessage className={s.errorText} name="password" component="div" />}

                            <button className={s.loginSubmitButton} type="submit">
                                Log in
                            </button>

                            {authError && <div className={s.errorText}>{authError}</div>}
                        </Form>
                    }}
                </Formik>
            </div>

        </div>
    )
}

const mapStateToProps = (state: storeType) => ({
    isAuth: state.auth.isAuth,
    authError: state.auth.authError
})

const dispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, dispatchToProps)(Login);