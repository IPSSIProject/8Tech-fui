import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {initialize} from "../../redux/modules/newProductForm";
import {useLocation, useNavigate} from "react-router-dom";
import AdminProductForm from "./AdminProductForm";
import useProductForm from "../../redux/modules/newProductForm/hooks/useProductForm";

export default function AdminEditProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentRoute = useLocation();
    const productId = currentRoute.state.productId || -1;

    useEffect(() => {
        dispatch(initialize({productId}));
    }, [])

    const { submit, formState } = useProductForm({
        onSuccess() {
            navigate('/admin-space/products');
        },
        mode: 'edition',
        productId
    });

    return (
        <>
            {
                formState.isInitialized && (
                    <AdminProductForm mode={'edition'} submit={submit} formState={formState}/>
                )
            }
        </>
    )
}
