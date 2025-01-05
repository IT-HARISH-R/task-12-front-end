import axios from "axios"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
    const [username, setusename] = useState('');
    const [email, setemail] = useState('');
    const [password, setpasswors] = useState('');
    const [loading, setLoading] = useState(false);


    console.log(username)
    console.log(email)
    console.log(password)


    const Navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.post('https://password-reset-byp3.onrender.com/auth/sing', {
            username,
            email,
            password
        })
            .then(response => {
                alert(response.data.message)
                setLoading(false);

                if (response.data.status) {
                    Navigate("/login")
                }
                console.log('Response:', response.data);
            })
            .catch(err => {
                console.error('Error:', err);
                setLoading(false);
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
                                <h1 className="text-2xl font-semibold">Signup</h1>
                            </div>
                            <form onSubmit={handleFormSubmit} className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            id="name"
                                            name="name"
                                            type="name"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="name"
                                            required
                                            value={username}
                                            onChange={(e) => setusename(e.target.value)}
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            User Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Email address"
                                            required
                                            value={email}
                                            onChange={(e) => setemail(e.target.value)}

                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Email Address
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Password"
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
                                            disabled={loading}
                                        >
                                            {loading ? " Sign..." : "Sign"}

                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="w-full flex justify-start">
                            <p className="text-gray-500 text-sm">
                                Already have an account?{' '}
                                <Link className="text-blue-500 hover:underline" to="/login">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;

