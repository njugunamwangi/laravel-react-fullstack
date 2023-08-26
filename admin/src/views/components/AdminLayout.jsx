import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function AdminLayout() {
    const { user, token } = useStateContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <Outlet />
        </>
    )
}
