import {FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from 'react-hook-form';

export default function PasswordControl() {
    const { formState: { errors } } = useFormContext();
    const name = 'password';
    const label = 'Mot de passe';
    const passwordError = errors[name];
    const errored = !!passwordError;

    return (
        <FormControl error={errored} sx={{width: '100%', mb: 1}}>
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
                        type={'password'}
                    />
                )}
            />
            {
                passwordError && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (passwordError.type === 'matches') && (
                                <>{`${label} doit contenir 8 caractères minimum dont au moins une lettre et un chiffre`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
