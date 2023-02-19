import { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Box, Paper } from '@mui/material';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

// some styling
/*
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minHeight: "25vh"
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}));
*/
const defaultValues = {
  firstName: 'Sebastian',
  lastName: 'Loret de Mola',
  country: 'United Arab Emirates',
  stateProvinces: 'Imārat Umm al Qaywayn',
  age: '25',
};

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    case 3:
    default:
      return 'Unknown step';
  }
}

export default function MultiStepForm() {
  /* const classes = useStyles(); */
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Step1', 'Step2', 'Step3'];

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
    void handleNext();
  };

  const validationSchema = [
    // validation for step1
    yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
    }),
    // validation for step2
    yup.object({
      country: yup.string().required(),
      stateProvinces: yup.string().required(),
    }),
    // validation for step3
    yup.object({
      age: yup.number().required(),
    }),
  ];
  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: 'onChange',
  });
  const { handleSubmit, reset, trigger } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };

  return (
    <main>
      <Paper elevation={1}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div style={{ minHeight: '50%' }}>
          {activeStep === steps.length ? (
            <>
              <Button onClick={handleReset}>Reset</Button>
            </>
          ) : (
            <FormProvider {...methods}>
              <form>
                <div>{getStepContent(activeStep)}</div>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ paddingTop: '5vh' }}
                >
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </form>
            </FormProvider>
          )}
        </div>
      </Paper>
    </main>
  );
}
