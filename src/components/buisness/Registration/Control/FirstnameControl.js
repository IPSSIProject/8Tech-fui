import {FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from 'react-hook-form';

export default function FirstnameControl() {
    const { formState: { errors } } = useFormContext();
    const name = 'firstname';
    const label = 'Prénom';
    const firstnameError = errors[name];
    const errored = !!firstnameError;

    return (
        <FormControl error={errored} sx={{width: '100%'}}>
            <RequiredFormLabel id={`${name}-label`}>{label}</RequiredFormLabel>
            <Controller
                name={name}
                defaultValue={''}
                render={({field: {onChange, value}}) => (
                    <TextField
                        size={'small'}
                        value={value}
                        onChange={onChange}
                        error={errored}
                    />
                )}
            />
            {
                firstnameError && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (firstnameError.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
