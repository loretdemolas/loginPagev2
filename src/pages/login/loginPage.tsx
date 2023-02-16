import { type SubmitHandler, useForm } from 'react-hook-form';
import styles from './login.module.css';
import logo from './images/weight-plates.png';
import { Link } from 'react-router-dom';

export function Login() {
  interface LoginInput {
    Email: string;
    Password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();
  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className={styles.Page}>
      <div className={styles.Box}>
        <h1 className={styles.title}>Login</h1>
        <img className={styles.logo} src={logo} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className={styles['form-control']}
              type="text"
              placeholder="Email"
              {...register('Email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            <div className={styles['error-message']}>
              {errors.Email != null && 'Email is required'}
            </div>
          </div>
          <div>
            <input
              className={styles['form-control']}
              type="password"
              placeholder="Password"
              {...register('Password', {
                required: true,
              })}
            />
            <div className={styles['error-message']}>
              {errors.Password != null && 'Password is required'}
            </div>
            <p className={styles.forgotPassword}>Forgot password?</p>
          </div>
          <button className={styles.submit} type="submit">
            Login
          </button>
          <div className={styles.register}>
            <p>Or Sign Up Using</p>
            <Link to="/register">
              <p> SIGN UP</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
