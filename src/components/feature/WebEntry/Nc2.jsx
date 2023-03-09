import React, { useContext } from "react";
import { UserInputData } from "../../pages/WebEntryContentPage";
import Grid from '@mui/material/Grid'
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from '@mui/material/Tooltip';



function Nc2(props) {
    const { control, handleSubmit, getValues } = useForm({
        defaultValues: {
            multilineText: "",
        },
    });
    const { currentState, setCurrentState } = useContext(UserInputData);
    const onSubmit = (action) => {
        if(action === 'back') {
            props.handleBack();
        } else {
            props.handleNext();
        }
        const data = getValues();
        setCurrentState({...currentState, "Nc2": data });
    };
    return (
        <Grid container>
            <Grid sm={2}/>
            <Grid lg={8} sm={8} spacing={10}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="multilineText"
                        render={({ field }) => (
                            <Tooltip
                                title="自由に記入することができます"
                                placement="top-start"
                                arrow
                            >
                                <TextField
                                    {...field}
                                    label="備考欄"
                                    fullWidth
                                    margin="normal"
                                    rows={4}
                                    multiline
                                    variant="outlined"
                                    placeholder="その他ご要望等あれば、ご記入ください"
                                />
                            </Tooltip>
                        )}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => onSubmit("back")}
                    >
                        戻る
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={() => onSubmit("next")}
                    >
                        次へ
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default Nc2