import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";


export const RegisterForm =({...props}) => {
    const { control, } = useFormContext();
  
  return (
    <>
        <Controller
            {...props}
            control={control}
            name={props.name}
            render={({ field:{value, onChange, ...field} }) => (
                <TextField {...field} 
                    id="outlined-required" 
                    label={props.label} 
                    value={value}
                    onChange={({ target: {value} }) =>
                        onChange(value)
                    }
                />
            )}
            defaultValue={props.defaultValue}
        />
    </>     
  );
}
