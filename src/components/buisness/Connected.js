import {useSelector} from "react-redux";
import {sessionSelectors} from "../../redux/modules/session/sessionSelectors";

export default function Connected(props) {
    const isConnected = useSelector(sessionSelectors.connected);

    return (
        <>
            { isConnected && props.children }
        </>
    )
}
