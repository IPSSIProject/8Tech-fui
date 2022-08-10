import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {reset, submitLoginForm} from "../index";
import {loginFormSelectors} from "../loginFormSelectors";

export default function useLoginForm({onSuccess}) {
    const dispatch = useDispatch();
    const formState = useSelector(loginFormSelectors.formState);

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
            dispatch(submitLoginForm({data: payload }));
        },
        formState,
    }
}
