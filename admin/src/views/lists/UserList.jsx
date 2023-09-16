export default function UserList({user}) {
    return (
        <>
            <tr className="border-b border-gray-200 dark:border-gray-700">
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
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ">Delete</a>
                </td>
            </tr>
        </>
    )
}
