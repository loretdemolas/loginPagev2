import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
export const TextFieldCustom = ({ ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      {...props}
      control={control}
      name={props.name}
      render={({ field }) => (
        <TextField {...field} id="outlined-required" label={props.label} />
      )}
      defaultValue={props.defaultValue}
    />
  );
};
