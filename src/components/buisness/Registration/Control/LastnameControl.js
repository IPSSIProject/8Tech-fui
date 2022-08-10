import {FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from "react-hook-form";

export default function LastnameControl() {
    const {formState: {errors}} = useFormContext();
    const name = 'lastname';
    const label = 'Nom';
    const lastnameError = errors[name];
    const errored = !!lastnameError;

    return (
        <FormControl error={errored} sx={{width: '100%'}}>
            <RequiredFormLabel id={`${name}-label`}>{label}</RequiredFormLabel>
            <Controller
                name={name}
                defaultValue={''}
                render={({field: {onChange, value}}) => (
                    <TextField
                        error={errored}
                        size={'small'}
                        onChange={onChange}
                        value={value}
                    />
                )}
            />
            {
                lastnameError && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (lastnameError.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
