import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="flex w-screen flex-wrap text-slate-800">
                <div className="flex w-auto flex-col md:w-1/2">
                    <div className="flex justify-center pt-12 md:justify-start md:pl-12">
                        <a href="/" className="text-2xl font-bold text-blue-600 mx-auto">Feed The Need, Not The Bin</a>
                    </div>
                    <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-4 md:justify-start lg:w-[28rem]">
                        <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
                            Welcome back <br />
                            to <span className="text-blue-600">Tripti</span>
                        </p>
                        <p className="mt-6 text-center font-medium md:text-left">Sign in to your account below.</p>

                        <form className="flex flex-col items-stretch pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="email" id="login-email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                                </div>
                            </div>
                            <div className="mb-4 flex flex-col pt-4">
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="password" id="login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
                                </div>
                            </div>
                            <a href="/" className="mb-6 text-center text-sm font-medium text-gray-600 md:text-left">Forgot password?</a>
                            <Link to="/hostel"><button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32">Sign in</button></Link>
                        </form>
                        <div className="py-12 text-center">
                            <p className="text-gray-600">
                                Don't have an account? 
                                <Link to="/signup" className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"> Sign up for free.</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative hidden h-screen select-none bg-blue-600 bg-gradient-to-br md:block md:w-1/2">
                    <img
                    className='hidden w-full mb-4 rounded-xl lg:mb-0 lg:flex pt-24'
                    src = './images/kolej.png'
                    height={160}
                    />
                </div>
            </div>

        </>
    )
}

export default Login