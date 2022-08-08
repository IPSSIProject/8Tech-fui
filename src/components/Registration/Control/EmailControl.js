import {FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../agnostic/Form/RequiredFormLabel";
import {useFormContext, Controller} from "react-hook-form";

export default function EmailControl() {
    const {formState: {errors}} = useFormContext();
    const name = 'email';
    const label = 'Email';
    const emailError = errors[name];
    const errored = !!emailError;

    return (
        <FormControl error={errored} sx={{width: '100%', mb: 1}}>
            <RequiredFormLabel id={`${name}-label`}>{label}</RequiredFormLabel>
            <Controller
                name={name}
                defaultValue={''}
                render={({field: {onChange, value}}) => (
                    <TextField
                        onChange={onChange}
                        value={value}
                        size={'small'}
                        error={errored}
                    />
                )}
            />
            {
                emailError && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (emailError.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                        {
                            (emailError.type === 'email') && (
                                <>{`${label} invalide`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
