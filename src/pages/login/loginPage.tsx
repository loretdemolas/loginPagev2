import { useForm } from 'react-hook-form';
import './styles.css';

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Email"
            {...register('Email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <div>{errors.Email != null && 'Email is required'}</div>
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="Password"
            {...register('Password', {
              required: true,
            })}
          />
          <div>{errors.Password != null && 'Password is required'}</div>
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
