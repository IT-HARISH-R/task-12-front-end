import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {

    const Navigate = useNavigate()

    const [password, setpasswors] = useState('');
    const { token } = useParams()
    console.log(password)
    console.log(token)
    axios.defaults.withCredentials = true;

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.post("https://password-reset-twqc.onrender.com/auth/reset-password/" + token, {
            password
        })
            .then(response => {
                console.log(response.data.message)
                if (response.data.status) {
                    alert(response.data.message)
                    Navigate("/login")
                }
                console.log(response.data)
            })
            .catch(err => {
                console.log("error", err)
            })

        console.log("Form submitted");
    };



    return (
        <>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Reset Password</h1>
                            </div>
                            <form onSubmit={handleFormSubmit} className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Password"
                                            aria-label="Password"
                                            required
                                            value={password}
                                            onChange={(e) => setpasswors(e.target.value)}
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Password
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <button
                                            type="submit"
                                            className="bg-cyan-500 text-white rounded-md px-4 py-2 hover:bg-cyan-600 focus:outline-none"
                                        >
                                            Reset Password
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ResetPassword