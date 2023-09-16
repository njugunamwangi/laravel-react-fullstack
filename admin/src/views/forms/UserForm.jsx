import AdminComponent from "../components/AdminComponent.jsx";
import {useRef, useState} from "react";
import TButton from "../components/core/TButton.jsx";
import axiosClient from "../../axios.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import {useNavigate} from "react-router-dom";
import Loading from "../components/core/Loading.jsx";

export default function UserForm() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const navigate = useNavigate()

    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const { showToast } = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }

        setLoading(true)
        axiosClient.post('/users', payload)
            .then(() => {
                navigate('/users')
                setLoading(false)
                showToast('User created successfully', 'success')
            })
            .catch((err) => {
                if (err && err.response) {
                    setLoading(false)
                    showToast(err.response.data.message, 'error')
                    setError(err.response.data.errors)
                }
            })
    }

    return (
        <AdminComponent title="Add User">
            {loading && (
                <Loading />
            )}
            {!loading && (
                <form action="#" method="POST" onSubmit={onSubmit}>
                    <div className="shadow sm-overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            {/* Name */}
                            <div className="col-span-full">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Joe Shields"
                                        ref={nameRef}
                                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                                            error.name ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                                        }`}
                                    />
                                </div>
                                {error.name && (<small className="text-sm text-red-500">
                                    {error.name}
                                </small>)}
                            </div>
                            {/* Name */}

                            {/* Email */}
                            <div className="col-span-full">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="joe@shields.com"
                                        ref={emailRef}
                                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                                            error.email ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                                        }`}
                                    />
                                </div>
                                {error.email && (<small className="text-sm text-red-500">
                                    {error.email}
                                </small>)}
                            </div>
                            {/* Email */}

                            {/* Password */}
                            <div className="col-span-full">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        ref={passwordRef}
                                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                                            error.password ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                                        }`}
                                    />
                                </div>
                                    {error.password.map((errorMessage, index) => (
                                        <small key={`error-${index}`} className="text-sm text-red-500 block">
                                            {index + 1}. {errorMessage}
                                        </small>
                                    ))}
                            </div>
                            {/* Password */}

                            {/* Confirm Password */}
                            <div className="col-span-full">
                                <label htmlFor="passwordConfirmation" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        name="passwordConfirmation"
                                        id="passwordConfirmation"
                                        ref={passwordConfirmationRef}
                                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                                            error.passwordConfirmation ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                                        }`}
                                    />
                                </div>
                            </div>
                            {/* Confirm Password */}

                            <div className="bg-gray-50 py-3 text-right sm:px-6">
                                <TButton>
                                    Save User
                                </TButton>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </AdminComponent>
    )
}
