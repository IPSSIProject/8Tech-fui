import {FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from 'react-hook-form';

export default function ConfirmPasswordControl() {
    const { watch, formState: { errors } } = useFormContext();
    const [password, confirmPassword] = watch(['password', 'confirmPassword']);
    const samePassword = password === confirmPassword;
    const name = 'confirmPassword';
    const label = 'Confirmer mot de passe';
    const confirmPasswordError = errors[name];
    const errored = !!confirmPasswordError || (!!confirmPassword && !samePassword);

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
                        type={'password'}
                    />
                )}
            />
            {
                confirmPasswordError && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (confirmPasswordError.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                        {
                            (!samePassword) && (
                                <>{`Les mots de passe doivent être identiques`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
