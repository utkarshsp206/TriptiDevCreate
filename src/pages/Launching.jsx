import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Launching() {
  return (
    <>
    <Navbar/>
    <section className="bg-white">
    
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ">Building digital <br/>products & brands.</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">This free and open-source landing page template was built using the utility classes from <a href="https://tailwindcss.com" className="hover:underline">Tailwind CSS</a> and based on the components from the <a href="https://flowbite.com/docs/getting-started/introduction/" className="hover:underline">Flowbite Library</a> and the <a href="https://flowbite.com/blocks/" className="hover:underline">Blocks System</a>.</p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="./images/hero.png" alt=''/>
            </div>                
        </div>
    </section>

    <section className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* Row */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">Work with tools you already use</h2>
            <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
            {/* List */}
            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
              <li className="flex space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Continuous integration and deployment</span>
              </li>
              {/* Other list items */}
            </ul>
            <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
          </div>
          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-1.png" alt="dashboard feature image" />
        </div>
        {/* Row */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-2.png" alt="feature image 2" />
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">We invest in the world’s potential</h2>
            <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
            {/* List */}
            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
              <li className="flex space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Dynamic reports and dashboards</span>
              </li>
              {/* Other list items */}
            </ul>
            <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-purple-600">Trusted Worldwide</p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">Trusted by over 600 million users and 10,000 teams</h2>
          <p className="font-light text-gray-500 sm:text-xl">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200">
            <div>
              <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 ">
                Explore Legality Guide
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
            <div>
              <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 ">
                Visit the Trust Center
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path></svg>
            <h3 className="mb-2 text-2xl font-bold">99.99% uptime</h3>
            <p className="font-light text-gray-500">For Landwind, with zero maintenance downtime</p>
          </div>
          {/* Other div elements */}
        </div>
      </div>
    </section>


    <Footer/>
    </>
    
  )
}

export default Launching