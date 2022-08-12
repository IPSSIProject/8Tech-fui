import {FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from "react-hook-form";

export default function ProductPromoControl() {
    const {formState: {errors}} = useFormContext();
    const name = 'promo';
    const label = 'Promo';
    const productPromo = errors[name];
    const errored = !!productPromo;

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
                productPromo && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (productPromo.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
