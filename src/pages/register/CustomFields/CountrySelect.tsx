import { TextField } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';

export default function CountryStateSelect({
  name,
  rules,
  options,
  limit = 20,
  ...rest
}: {
  name: string;
  rules: string;
  options: any;
  limit: number;
}) {
  const { control } = useFormContext();
  const filterOptions = createFilterOptions({ limit });

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={null}
      render={({
        field: { ref, ...field },
        fieldState: { error, invalid },
      }) => {
        return (
          <Autocomplete
            {...field}
            options={options}
            filterOptions={filterOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                {...rest}
                inputRef={ref}
                error={invalid}
                helperText={error?.message}
              />
            )}
            onChange={(e, value) => {
              field.onChange(value);
            }}
            onInputChange={(_, data) => {
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              if (data) field.onChange(data);
            }}
          />
        );
      }}
    />
  );
}
