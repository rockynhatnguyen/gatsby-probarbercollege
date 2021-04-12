import React from 'react'
import { Link } from '@material-ui/core'
import factsheetFile from '../assets/2019-tor-west-fact-sheet.pdf'
import catalogFile from '../assets/2020-catalog.pdf'
import enrollmentFile from '../assets/2021-enrollment-agreement.pdf'

const Application = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto flex flex-col bg-dark-200 rounded-xl p-8 text-center">
                <h1 className="text-5xl font-bold text-white mb-6">Application</h1>
                <p className="text-xl text-white mx-3 md:mx-0">Download and fill out our application forms.<br />Take a look at our fact sheets for data about previous classes.</p>
                <div className="flex flex-col md:flex-row justify-center items-between md:gap-6 mt-6">
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-center mt-4 md:mt-0">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <h2 className="mt-3 text-2xl font-semibold">Annual Report</h2>
                        <p className="mb-4">Pro Barber College Annual Factsheet for 2019.</p>
                        <Link color="inherit" href={factsheetFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-center mt-10 md:mt-0">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className="mt-3 text-2xl font-semibold">Catalog</h2>
                        <p className="mb-4">Pro Barber College Catalog of our courses and programs.</p>
                        <Link color="inherit" href={catalogFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-center mt-10 md:mt-0">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className="mt-3 text-2xl font-semibold">Enrollment Agreement</h2>
                        <p className="mb-4">Downloadable form to apply for Pro Barber College courses.</p>
                        <Link color="inherit" href={enrollmentFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto bg-dark-200 p-8 rounded-xl text-center mt-12">
                <h1 className="text-5xl font-bold text-white mb-6">Course Downloads</h1>
                <p className="text-xl text-white mx-3 md:mx-0">Download and discover course reports.</p>
                <div className="flex flex-col md:flex-row justify-center items-between md:gap-6 mt-6">
                    <div className="w-full md:w-1/4 flex flex-col justify-center items-center mt-10 md:mt-0">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <h2 className="mt-3 text-lg font-semibold">Barber Course Report</h2>
                        <p className="mb-4">Private postsecondary education annual report for the year.</p>
                        <p className="mb-1">Torrance</p>
                        <Link color="inherit" href={factsheetFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                        <p className="mb-1">Westminster</p>
                        <Link color="inherit" href={factsheetFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                        <p className="mb-1">Torrance & Westminster</p>
                        <Link color="inherit" href={factsheetFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                    </div>
                    <div className="w-full md:w-1/4 flex flex-col justify-center items-center mt-10 md:mt-0">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className="mt-3 text-lg font-semibold">Crossover Course Report</h2>
                        <p className="mb-4">Summarizes the barber crossover program for the year.</p>
                        <p className="mb-1">Torrance</p>
                        <Link color="inherit" href={catalogFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                        <p className="mb-1">Westminster</p>
                        <Link color="inherit" href={factsheetFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                        <p className="mb-1">Torrance & Westminster</p>
                        <Link color="inherit" href={factsheetFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                    </div>
                    <div className="w-full md:w-1/4 flex flex-col justify-center items-center mt-10 md:mt-0">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className="mt-3 text-lg font-semibold">Barber Refresher Report</h2>
                        <p className="mb-4">Summarizes the barber refresher course for the year.</p>
                        <p className="mb-1">Torrance</p>
                        <Link color="inherit" href={enrollmentFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                        <p className="mb-1">Westminster</p>
                        <Link color="inherit" href={factsheetFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                        <p className="mb-1">Torrance & Westminster</p>
                        <Link color="inherit" href={factsheetFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                    </div>
                    <div className="w-full md:w-1/4 flex flex-col justify-center items-center mt-10 md:mt-0">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className="mt-3 text-lg font-semibold">Barber Instructor Report</h2>
                        <p className="mb-4">Summarizes the barber instructor program for the year.</p>
                        <p className="mb-1">Torrance</p>
                        <Link color="inherit" href={enrollmentFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                        <p className="mb-1">Westminster</p>
                        <Link color="inherit" href={factsheetFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                        <p className="mb-1">Torrance & Westminster</p>
                        <Link color="inherit" href={factsheetFile} style={{background: '#f1f1f1', color: '#2f2f2f', padding: '1rem 1.5rem', borderRadius: '3rem', marginBottom: '1.5rem',}} download>
                            Download
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Application
