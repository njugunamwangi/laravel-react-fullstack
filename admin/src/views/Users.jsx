import AdminComponent from "./components/AdminComponent.jsx";
import axiosClient from "../axios.js";
import {useEffect, useState} from "react";
import {PlusCircleIcon} from "@heroicons/react/20/solid/index.js";
import TButton from "./components/core/TButton.jsx";
import {useStateContext} from "./contexts/ContextProvider.jsx";
import Loading from "./components/core/Loading.jsx";
import Pagination from "./components/core/Pagination.jsx";
import {Link} from "react-router-dom";

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

    const deleteUser = (user) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            axiosClient.delete(`/users/${user.id}`)
                .then(() => {
                    showToast('User deleted successfully', 'warning')
                    getUsers()
                })
        }
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
                                        <tr key={user.email} className="border-b border-gray-200 dark:border-gray-700">
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                {user.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                                {user.email_verified_at ? user.email_verified_at : 'Email Not verified'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.created_at}
                                            </td>
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                                <Link to={`/users/${user.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2">Edit</Link>
                                                <a href="#" onClick={ev => deleteUser(user)} className="font-medium text-red-600 dark:text-red-500 hover:underline ">Delete</a>
                                            </td>
                                        </tr>
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
