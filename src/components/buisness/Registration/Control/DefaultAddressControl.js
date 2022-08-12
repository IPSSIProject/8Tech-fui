import {FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from "react-hook-form";

export default function DefaultAddressControl() {
    const {formState: {errors}} = useFormContext();
    const name = 'defaultAddress';
    const label = 'Adresse';
    const defaultAddressError = errors[name];
    const errored = !!defaultAddressError;

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
                defaultAddressError && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (defaultAddressError.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
