/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type SubmitHandler, useForm } from 'react-hook-form';
import styles from './register.module.css';
import { Link } from 'react-router-dom';

export function Register() {
  interface RegisterInput {
    Username: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
  }
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useForm<RegisterInput>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className={styles.Page}>
      <div className={styles.Box}>
        <h1 className={styles.title}>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className={styles['form-control']}
              type="text"
              placeholder="Username"
              {...register('Username', {
                required: true,
              })}
            />
            <div className={styles['error-message']}>
              {errors.Username != null && 'Username is required'}
            </div>
          </div>
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
          </div>
          <div>
            <input
              className={styles['form-control']}
              type="password"
              placeholder="Confirm Password"
              {...register('ConfirmPassword', {
                required: true,
              })}
            />
            <div className={styles['error-message']}>
              {watch('ConfirmPassword') !== watch('Password') &&
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              getValues('ConfirmPassword') ? (
                <p>Passwords do not match</p>
              ) : null}
            </div>
          </div>
          <Link to="/register/step1">
            <button
              className={styles.submit}
              type="submit"
              disabled={!isDirty || !isValid}
            >
              Next
            </button>
          </Link>
          <div className={styles.register}>
            <p>Already have an account?</p>
            <Link to="/login">
              <p> LOGIN</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
