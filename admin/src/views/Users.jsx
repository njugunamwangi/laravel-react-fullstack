import AdminComponent from "./components/AdminComponent.jsx";
import axiosClient from "../axios.js";
import {useEffect, useState} from "react";
import {PlusCircleIcon} from "@heroicons/react/20/solid/index.js";
import TButton from "./components/core/TButton.jsx";
import {useStateContext} from "./contexts/ContextProvider.jsx";
import Loading from "./components/core/Loading.jsx";
import UserList from "./lists/UserList.jsx";
import Pagination from "./components/core/Pagination.jsx";

export default function Users() {
    const { showToast } = useStateContext()

    const [ users, setUsers ] = useState([])

    const [ loading, setLoading ] = useState(false)

    const [ meta, setMeta ] = useState({})
    const getUsers = (url) => {
        url = url || "/users"
        setLoading(true)
        axiosClient.get(url)
            .then(({ data }) => {
                setUsers(data.data)
                setMeta(data.meta)
                setLoading(false)
            })
    }

    const onPageClick = (link) => {
        getUsers(link.url);
    };

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
                    <>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                        Email Verified at
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created at
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                        Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <UserList user={user} key={user.id} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Pagination meta={meta} onPageClick={onPageClick} />
                    </>

                )}

            </AdminComponent>
        </>
    )
}
