/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './step1.module.css';

export function Step1() {
  interface Step1Input {
    City: string;
    StateProvidenceRegion: string;
    Country: string;
    DemoOptOut: boolean;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, isDirty, errors },
  } = useForm<Step1Input>();
  const onSubmit: SubmitHandler<Step1Input> = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className={styles.Page}>
      <div className={styles.Box}>
        <h2 className={styles.title}>The Demographics</h2>
        <p>
          This page is optional, but providing it can help with comparisons on a
          geographic level
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.container}>
            <input
              className={styles['form-control-selector']}
              type="checkbox"
              {...register('DemoOptOut', {})}
            />
            <p>Opt-Out</p>
          </div>
          <div>
            <input
              className={styles['form-control']}
              type="text"
              placeholder="City"
              {...register('City', {
                disabled: watch('DemoOptOut'),
              })}
            />
          </div>
          <div>
            <input
              className={styles['form-control']}
              type="text"
              placeholder="State, Providence, or Region"
              {...register('StateProvidenceRegion', {
                disabled: watch('DemoOptOut'),
              })}
            />
          </div>
          <div>
            <input
              className={styles['form-control']}
              type="text"
              placeholder="Country"
              {...register('Country', {
                disabled: watch('DemoOptOut'),
                required: true,
              })}
            />
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
            <p>1/2</p>
          </div>
        </form>
      </div>
    </div>
  );
}
