import { useForm } from 'react-hook-form';
import './styles.css';
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
    <div className="loginPage">
      <div className="loginBox">
        <h1 className="title">Login</h1>
        <img className="logo" src={logo} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              {...register('Email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            <div className="error-message">
              {errors.Email != null && 'Email is required'}
            </div>
          </div>
          <div>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              {...register('Password', {
                required: true,
              })}
            />
            <div className="error-message">
              {errors.Password != null && 'Password is required'}
            </div>
            <p className="forgotPassword">Forgot password?</p>
          </div>
          <button className="submit" type="submit">
            Login
          </button>
          <div className="register">
            <p>Or Sign Up Using</p>
            <Link to="/register">
              <a> SIGN UP</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
