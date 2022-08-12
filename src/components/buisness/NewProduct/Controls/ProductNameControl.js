import {FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from "react-hook-form";

export default function ProductNameControl() {
    const {formState: {errors}} = useFormContext();
    const name = 'name';
    const label = 'Nom';
    const productName = errors[name];
    const errored = !!productName;

    return (
        <FormControl error={errored} sx={{width: '100%'}}>
            <RequiredFormLabel id={`${name}-label`}>{label}</RequiredFormLabel>
            <Controller
                name={name}
                render={({field: {onChange, value}}) => (
                    <TextField
                        error={errored}
                        size={'medium'}
                        onChange={onChange}
                        value={value}
                    />
                )}
            />
            {
                productName && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (productName.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
