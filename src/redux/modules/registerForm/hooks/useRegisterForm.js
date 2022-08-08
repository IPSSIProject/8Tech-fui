import {useDispatch, useSelector} from "react-redux";
import {registerFormSelectors} from "../registerFormSelectors";
import {useEffect} from "react";
import {reset, submitRegisterForm} from "../index";

export default function useRegisterForm({onSuccess}) {
    const dispatch = useDispatch();
    const formState = useSelector(registerFormSelectors.formState);

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
        submit: (payload) => {
            dispatch(submitRegisterForm({data: payload }));
        },
        formState,
    }
}
