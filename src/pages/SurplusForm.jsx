import React from 'react'
import Navbarlogout from '../components/Navbarlogout'
import Footer from '../components/Footer'

function SurplusForm() {
  return (
    <>
    <Navbarlogout/>

    <h1 className='flex pl-12 ml-14 text-5xl font-extrabold dark:text-grey-900' >Enter the information about today's surplus meal</h1>
    <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form>
                        <div className="mb-5">
                            <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Hostel Name
                            </label>
                            <input type="text" name="name" id="name" placeholder="Hostel Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Mess Incharge Phone Number
                            </label>
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label for="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Mess Incharge Email Address
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Date
                                    </label>
                                    <input type="date" name="date" id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Time
                                    </label>
                                    <input type="time" name="time" id="time"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                        </div>

                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label for="food" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Food
                                    </label>
                                    <input type="text" name="food" id="food"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label for="quantity" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Quantity
                                    </label>
                                    <input type="number" name="quantity" id="quantity"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Hostel Address
                            </label>
                            <input type="text" name="address" id="address" placeholder="Hostel Address"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div>
                            <button
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Add Meal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    
    <Footer/>
    </>
  )
}

export default SurplusForm