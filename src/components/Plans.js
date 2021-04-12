import React from 'react'

const Plans = () => {
    return (
        <div className="max-w-7xl mx-4 md:mx-auto flex flex-col bg-dark-200 rounded-xl md:mt-16 p-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Educational Plans</h1>
            <p className="text-xl text-white mx-3 md:mx-0">Find the best plan for your educational needs and career path</p>
            <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-2 text-center lg:text-left mt-12">
                <div className="flex flex-col lg:flex-row">
                    <span className="flex justify-center items-center px-6">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                        </svg>
                    </span>
                    <div className="flex-col mt-6 mb-5">
                        <h2 className="text-lg font-bold">Barbering Course</h2>
                        <div className="flex flex-col md:flex-row mt-8">
                         <span className="border-2 border-color-white rounded-3xl md:mr-6 px-4 py-3">1,500 Clock Hours</span>
                         <span className="border-2 border-color-white rounded-3xl mt-4 lg:mt-0 px-4 py-3">(SOC) 39-5011</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row mt-8 md:mt-3">
                    <span className="flex justify-center items-center px-6">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    </span>
                    <div className="flex-col mt-6 mb-5">
                        <h2 className="text-lg font-bold">Barbering Crossover Course</h2>
                        <div className="flex flex-col md:flex-row mt-8">
                         <span className="border-2 border-color-white rounded-3xl md:mr-6 px-4 py-3">200 Clock Hours</span>
                         <span className="border-2 border-color-white rounded-3xl mt-4 lg:mt-0 px-4 py-3">(SOC) 39-5011</span>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row mt-8 md:mt-3">
                    <span className="flex justify-center items-center px-6">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </span>
                    <div className="flex-col mt-6 mb-5">
                        <h2 className="text-lg font-bold">Barbering Refresher Course</h2>
                        <div className="flex flex-col md:flex-row mt-8">
                         <span className="border-2 border-color-white rounded-3xl md:mr-6 px-4 py-3">200 Clock Hours</span>
                         <span className="border-2 border-color-white rounded-3xl mt-4 lg:mt-0 px-4 py-3">(SOC) 39-5011</span>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row mt-8 md:mt-3">
                    <span className="flex justify-center items-center px-6">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </span>
                    <div className="flex-col mt-6 mb-5">
                        <h2 className="text-lg font-bold">Barbering Instructor Course</h2>
                        <div className="flex flex-col md:flex-row mt-8">
                         <span className="border-2 border-color-white rounded-3xl md:mr-6 px-4 py-3">600 Clock Hours</span>
                         <span className="border-2 border-color-white rounded-3xl mt-4 lg:mt-0 px-4 py-3">(SOC) 25-0499</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans
