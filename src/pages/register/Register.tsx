import { useEffect } from 'react';
import MultiStepForm from './Stepper';
import { useForm, FormProvider } from 'react-hook-form';

export default function Register() {
  const methods = useForm({ mode: 'onBlur' });
  const { watch, formState: errors } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    console.log('FORM CONTEXT', watch(), errors);
  }, [watch, errors]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <MultiStepForm />
      </form>
    </FormProvider>
  );
}
