import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {reset, submitEditProductForm, submitNewProductForm} from "../index";
import {newProductFormSelectors} from "../newProductFormSelectors";
import axios from "axios";

export default function useProductForm({onSuccess, mode, productId}) {
    const dispatch = useDispatch();
    const formState = useSelector(newProductFormSelectors.formState);

    useEffect(() => {
        if (!formState.isSubmitSuccessful) {
            return;
        }

        onSuccess && onSuccess();
    }, [formState.isSubmitSuccessful]);

    // On unmount reset le formState
    useEffect(() => {
        return () => {
            dispatch(
                reset()
            )
        }

    },[]);

    return {
        submit: async (payload, file, defaultImagePath) => {
            let imagePath = defaultImagePath || '';
            if (file && !defaultImagePath) {
                imagePath = await postImage({file})
            }

            if (mode === 'creation') {
                dispatch(submitNewProductForm({data: {...payload, image: imagePath }}));
            }

            if (mode === 'edition') {
                dispatch(submitEditProductForm({data: {...payload, image: imagePath, productId }}));
            }
        },
        formState,
    }
}


async function postImage({image}) {
    const formData = new FormData();
    formData.append("image", image);
    const result = await axios.post('http://localhost:4000/images', formData);

    return result.data
}
