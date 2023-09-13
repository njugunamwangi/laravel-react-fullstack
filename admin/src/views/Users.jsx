import AdminComponent from "./components/AdminComponent.jsx";
import axiosClient from "../axios.js";
import {useEffect, useState} from "react";
import {PlusCircleIcon} from "@heroicons/react/20/solid/index.js";
import TButton from "./components/core/TButton.jsx";
import {useStateContext} from "./contexts/ContextProvider.jsx";
import Loading from "./components/core/Loading.jsx";
import UserList from "./lists/UserList.jsx";

export default function Users() {
    const { showToast } = useStateContext()

    const [ users, setUsers ] = useState([])

    const [ loading, setLoading ] = useState(false)
    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
            .then(({ data }) => {
                setUsers(data.data)
                setLoading(false)
            })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <AdminComponent
                title="Users"
                buttons={
                    <TButton color="green" to="/users/add">
                        <PlusCircleIcon className="h-6 w-6 mr-2" />
                        Add User
                    </TButton>
                }
            >
                {loading && ( <Loading /> )}

                {!loading && (
                    <ul role="list" className="divide-y divide-gray-100">
                        {users.map((user) => (
                            <UserList user={user} key={user.id} />
                        ))}
                    </ul>
                )}
            </AdminComponent>
        </>
    )
}
