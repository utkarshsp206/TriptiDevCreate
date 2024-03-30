import React from 'react'
import Navbarlogout from '../components/Navbarlogout'
import Footer from '../components/Footer'

function VolDash() {
    return (
        <>
            <Navbarlogout />
            <section className="bg-white dark:bg-gray-900" >
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to  Tripti</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Tripti is an open source non-profit initiative to minimise food wastages across all college hostels in India. Sign up now to contribute towards feeding the needy. Register either as a Hostel Manager or a volunteer to bring India one step closer to eradicating food wastages.</p>
                        <a href="#studentRecord" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Student Record
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Surplus Info
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/> */}
                        <img 
                        className='mx-auto'
                        src="./images/volunteer.png" alt="mockup" />
                    </div>
                </div>
            </section>

            {/* Displaying Hostel Data */}


            <section id='studentRecord' className="bg-white dark:bg-gray-900">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
                    <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />
                    <div className="mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Today's Record: </h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Based on today's menu, day and time and other factors, our ML Model <span className='font-bold'>Poshan</span> has predicted today's strength as follows: </p>



                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Hostel name
                                        </th>
                                        <th scope="col" className="px-3 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-14 py-3">
                                            Meal
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Available Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <span className="sr-only">Request</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            NC Hostel
                                        </th>
                                        <td className="px-6 py-4">
                                            Lunch
                                        </td>
                                        <td className="px-10 py-4">
                                            Dal Chawal
                                        </td>
                                        <td className="px-16 py-4">
                                            38 units
                                        </td>
                                        
                                        <td className="px-6 py-4 text-right">
                                            <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Request</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Zakir Hostel
                                        </th>
                                        <td className="px-6 py-4">
                                            Lunch
                                        </td>
                                        <td className="px-8 py-4">
                                            Rajma Chawal
                                        </td>
                                        <td className="px-16 py-4">
                                            23 units
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Request</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Sukhna Hostel
                                        </th>
                                        <td className="px-4 py-4">
                                            Breakfast
                                        </td>
                                        <td className="px-7 py-4">
                                            Bread Omelette
                                        </td>
                                        <td className="px-16 py-4">
                                            41 units
                                        </td>
                                        
                                        <td className="px-6 py-4 text-right">
                                            <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Request</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>







            <Footer />
        </>
    )
}

export default VolDash