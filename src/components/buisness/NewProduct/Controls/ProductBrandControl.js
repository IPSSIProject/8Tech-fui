import {Autocomplete, FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from "react-hook-form";
import {useSelector} from "react-redux";
import {ProductsState} from "../../../../redux/modules/products";

export default function ProductBrandControl() {
    const {formState: {errors}} = useFormContext();
    const name = 'brand';
    const label = 'Marque';
    const productBrand = errors[name];
    const errored = !!productBrand;

    return (
        <FormControl error={errored} sx={{width: '100%'}}>
            <RequiredFormLabel id={`${name}-label`}>{label}</RequiredFormLabel>
            <Controller
                name={name}
                render={({field: {onChange, value}}) => (
                    <TextField
                        size={'medium'}
                        error={errored}
                        variant={'outlined'}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            {
                productBrand && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (productBrand.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
