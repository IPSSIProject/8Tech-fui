import {FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from "react-hook-form";

export default function ProductPriceControl() {
    const {formState: {errors}} = useFormContext();
    const name = 'price';
    const label = 'Price';
    const productPrice = errors[name];
    const errored = !!productPrice;

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
                productPrice && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (productPrice.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
