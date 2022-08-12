import {FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from "react-hook-form";

export default function ProductQuantityControl() {
    const {formState: {errors}} = useFormContext();
    const name = 'quantity';
    const label = 'Quantité';
    const productQuantity = errors[name];
    const errored = !!productQuantity;

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
                        type={'number'}
                    />
                )}
            />
            {
                productQuantity && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (productQuantity.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
