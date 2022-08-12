import {useState} from "react";
import {useNavigate} from "react-router-dom";
import useProductForm from "../../redux/modules/newProductForm/hooks/useProductForm";
import {FormProvider, useForm} from "react-hook-form";
import AdminPage from "./AdminPage";
import {FormGroup, Stack, TextField} from "@mui/material";
import ProductNameControl from "../../components/buisness/NewProduct/Controls/ProductNameControl";
import ProductBrandControl from "../../components/buisness/NewProduct/Controls/ProductBrandControl";
import ProductCategoryControl from "../../components/buisness/NewProduct/Controls/ProductCategoryControl";
import ProductPriceControl from "../../components/buisness/NewProduct/Controls/ProductPriceControl";
import ProductPromoControl from "../../components/buisness/NewProduct/Controls/ProductPromoControl";
import ProductQuantityControl from "../../components/buisness/NewProduct/Controls/ProductQuantityControl";
import RequiredFormLabel from "../../components/agnostic/Form/RequiredFormLabel";
import LoadingButton from "@mui/lab/LoadingButton";
import {DevTool} from "@hookform/devtools";

export default function AdminProductForm({submit, formState, productId, mode}) {
    const { name, brand, category_id, price, quantity, promotion, image } = formState.dto
    const [file, setFile ] = useState();

    const fileSelected = event => {
        const file = event.target.files[0];
        setFile(file);
    }

    const methods = useForm({
        defaultValues: {
            name,
            brand,
            category: category_id,
            price,
            promo: promotion,
            quantity
        },
    });

    const onSubmit = (data) => {
        submit(data, file, image);
    }

    return (
        <>
            <AdminPage title={mode === 'creation' ? 'Ajouter un nouveau produit' : 'Modifier un produit'}>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>

                        <Stack direction={'column'} spacing={3}>
                            <Stack direction={'row'} alignItems={'center'} spacing={2} justifyContent={'space-between'}>
                                <ProductNameControl />
                                <ProductBrandControl />
                            </Stack>

                            <Stack direction={'row'} alignItems={'center'} spacing={2} justifyContent={'space-between'}>
                                <ProductCategoryControl />
                                <ProductPriceControl />
                            </Stack>

                            <Stack direction={'row'} alignItems={'center'} spacing={2} justifyContent={'space-between'}>
                                <ProductPromoControl />
                                <ProductQuantityControl />
                            </Stack>

                            <FormGroup>
                                <RequiredFormLabel id={`image-label`}>{'Image'}</RequiredFormLabel>
                                <TextField
                                    type={'file'}
                                    variant={'outlined'}
                                    onChange={fileSelected}
                                />
                            </FormGroup>

                            <LoadingButton loading={formState?.isSubmitting} variant={'contained'} type={'submit'}>
                                {
                                    mode === 'creation'
                                        ? 'Ajouter le produit'
                                        : 'Modifier le produit'
                                }
                            </LoadingButton>
                        </Stack>

                        {/*<DevTool control={methods.control} />*/}
                    </form>
                </FormProvider>
            </AdminPage>
        </>
    )
}
