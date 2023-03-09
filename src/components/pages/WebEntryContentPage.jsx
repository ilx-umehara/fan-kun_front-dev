import React from 'react';
import Grid from '@mui/material/Grid'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Basic from '../feature/WebEntry/Basic';
import Nc2 from '../feature/WebEntry/Nc2';
import Confirm from '../feature/WebEntry/Confirm';

export const UserInputData = React.createContext();


function getSteps() {
    return [
        '基本項目',
        '任意項目',
        '入力確認'
    ];
}

function getStepContent(activeStep, handleNext, handleBack) {
    switch (activeStep) {
        case 0:
            return <Basic handleNext={handleNext} />;
        case 1:
            return <Nc2 handleNext={handleNext} handleBack={handleBack} />;
        case 2:
            return <Confirm handleBack={handleBack} />;
        default:
            return 'Unknown stepIndex';
    }
}

function Content() {
    const [currentState, setCurrentState] = React.useState({});
    const value = {
        currentState,
        setCurrentState
    };
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Grid container>
            <Grid sm={2}/>
            <Grid lg={8} sm={8} spacing={10}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <UserInputData.Provider value={value}>
                    { getStepContent(activeStep, handleNext, handleBack)}
                </UserInputData.Provider>
            </Grid>
        </Grid>
    )
}

export default Content