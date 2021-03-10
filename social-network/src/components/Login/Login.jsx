import s from './Login.module.css'
import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
  return <form>
    <div className={s.inputWrapper}>
      <Field placeholder={'Login'} name={'login'} component={'input'} />
    </div>

    <div className={s.inputWrapper}>
      <Field placeholder={'Password'} name={'password'} component={'input'} />
    </div>

    <div className={s.inputWrapper}>
      <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
    </div>

    <div className={s.button}>
      <button>Log in</button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
}

  return <div className={s.wrapper}>
    <h1>Login</h1>
    <LoginReduxForm />
  </div>
}

export default Login
