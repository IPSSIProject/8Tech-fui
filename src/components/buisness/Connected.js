import {useSelector} from "react-redux";
import {sessionSelectors} from "../../redux/modules/session/sessionSelectors";

export default function Connected(props) {
    const isConnected = useSelector(sessionSelectors.connected);
    console.log(isConnected);

    return (
        <>
            { isConnected && props.children }
        </>
    )
}
