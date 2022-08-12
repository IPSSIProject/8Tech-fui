import {Autocomplete, FormControl, FormHelperText, TextField} from "@mui/material";
import RequiredFormLabel from "../../../agnostic/Form/RequiredFormLabel";
import {Controller, useFormContext} from "react-hook-form";
import {useSelector} from "react-redux";
import {ProductsState} from "../../../../redux/modules/products";
import {CategoryState} from "../../../../redux/modules/categories";

export default function ProductCategoryControl() {
    const {formState: {errors}} = useFormContext();
    const categories = useSelector(CategoryState.selectors.allCategories);
    const categoryOptions = categories.map(
        c => ({
            label: c.name,
            value: c.id,
        })
    )
    const labelByValue = (option) => {
        return categoryOptions.find(c => c.value === option || c.value === option.value).label
    }
    const name = 'category';
    const label = 'Catégorie';
    const productCategory = errors[name];
    const errored = !!productCategory;

    return (
        <FormControl error={errored} sx={{width: '100%'}}>
            <RequiredFormLabel id={`${name}-label`}>{label}</RequiredFormLabel>
            <Controller
                name={name}
                render={({field: {onChange, value}}) => (
                    <Autocomplete
                        disableClearable
                        onChange={(e, data) => onChange(data)}
                        value={value}
                        isOptionEqualToValue={(option, value) => option.value === value || option.value === value.value}
                        getOptionLabel={(option) => labelByValue(option)}
                        options={categoryOptions}
                        renderInput={(params) => (
                            <TextField
                                size={'small'}
                                error={errored}
                                variant={'outlined'}
                                onChange={(e) => onChange(e.target.value)}
                                {...params}
                            />
                        )}
                    />
                )}
            />
            {
                productCategory && (
                    <FormHelperText id={`${name}-error-text`} style={{ margin: 0 }}>
                        {
                            (productCategory.type === 'required') && (
                                <>{`${label} est obligatoire`}</>
                            )
                        }
                    </FormHelperText>
                )
            }
        </FormControl>
    )
}
