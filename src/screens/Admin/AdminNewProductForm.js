import useProductForm from "../../redux/modules/newProductForm/hooks/useProductForm";
import AdminProductForm from "./AdminProductForm";
import {useNavigate} from "react-router-dom";

export default function AdminNewProductForm() {
    const navigate = useNavigate();
    const { submit, formState } = useProductForm({
        onSuccess() {
            navigate('/admin-space/products');
        },
        mode: 'creation'
    });

    return (
        <>
            <AdminProductForm
                mode={'creation'}
                submit={submit}
                formState={formState} />
        </>
    )
}
