/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './step2.module.css';

export function Step2() {
  interface Step2Input {
    Sex: string;
    Age: number;
    HeightInInches: number;
    WeightInPounds: number;
  }
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<Step2Input>();
  const onSubmit: SubmitHandler<Step2Input> = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className={styles.Page}>
      <div className={styles.Box}>
        <h2 className={styles.title}>The Metrics</h2>
        <p>
          The information on this page will allow us to classify the data and
          make inferences
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.container}>
            <select
              className={styles['form-control-selector']}
              {...register('Sex', {
                required: true,
              })}
            >
              <option value="Male"> Male </option>
              <option value="Female"> Female </option>
            </select>
          </div>
          <div>
            <input
              className={styles['form-control']}
              type="number"
              placeholder="Age"
              {...register('Age', {
                required: true,
              })}
            />
          </div>
          <div>
            <input
              className={styles['form-control']}
              type="number"
              placeholder="Height in Inches"
              {...register('HeightInInches', {
                required: true,
              })}
            />
          </div>
          <div>
            <input
              className={styles['form-control']}
              type="number"
              placeholder="Weight in Pounds"
              {...register('WeightInPounds', {
                required: true,
              })}
            />
            <p className={styles.tip}>
              For example 5'11" would be 71inches. 5 feet x 12 + 11 inches
            </p>
          </div>
          <Link to="/register/step2">
            <button
              className={styles.submit}
              type="submit"
              disabled={!isDirty || !isValid}
            >
              Next
            </button>
          </Link>
          <div className={styles.register}>
            <p>2/2</p>
          </div>
        </form>
      </div>
    </div>
  );
}
