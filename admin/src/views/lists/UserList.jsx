export default function UserList({user}) {
    return (
        <>
            <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={user.imageUrl} alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    {user.email_verified_at ? (
                        <>
                            <p className="text-sm leading-6 text-gray-900">Email Verified At: {user.email_verified_at}</p>
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <p className="text-xs leading-5 text-gray-500">Email Verified</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-red-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                </div>
                                <p className="text-xs leading-5 text-gray-500">Email Not Verified</p>
                            </div>
                        </>
                    )}
                </div>
            </li>
        </>
    )
}
