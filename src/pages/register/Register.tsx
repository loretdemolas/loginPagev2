import Button from '@mui/material/Button/Button';
import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { RegisterForm } from './User-Pass';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

export default function Register() {
  // Create errors to give feedback on why it won't submit
  const RegisterSchema = yup.object({
      first_name: yup.string().defined(),
      last_name: yup.string().defined(),
      email: yup.string().defined().email(),
      password: yup.string().defined(),
      confirm_password: yup.string().label('confirm password').required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
    });
  
  const methods = useForm({
    shouldUnregister: false, 
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  });

  const {control, watch, formState: errors } = methods;
  console.log(errors)

  useEffect(() => {
    console.log('FORM CONTEXT', watch(), errors);
  }, [watch, errors]);


  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <RegisterForm 
          label="First Name"
          name="first_name"/>
        <RegisterForm 
          label="Last Name"
          name="last_name"/>
        <RegisterForm 
          label="Email"
          name="email"/>
        <RegisterForm 
          label="Password"
          name="password"/>
        <RegisterForm 
          label="Confirm Password"
          name="confirm_password"/>
        <input type="submit" />
      </form>
    </FormProvider>
  );
}
