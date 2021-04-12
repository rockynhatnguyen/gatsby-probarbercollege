import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const RefresherCourse = () => {
    return (
        <div className="max-w-7xl mx-4 md:mx-auto flex flex-col items-center md:flex-row md:justify-center md:items-start mt-16">
            <div className="w-full md:w-1/3 flex flex-col items-start justify-start pr-0 md:pr-10 pt-10 md:pb-10">
                <h2 className="w-full border-2 rounded-xl mx-auto px-6 py-3 text-center mb-8">(SOC) 39-5011</h2>
                <div className="w-full block">
                    <StaticImage className="w-full rounded-2xl"
                        src="../../images/plans-refresher-1.jpg"
                        width={500}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A barber student cutting hair."
                        style={{ marginBottom: `1.45rem` }}
                    />
                </div>
                <div className="w-full hidden md:block">
                    <StaticImage className="w-full rounded-2xl"
                        src="../../images/plans-refresher-2.jpg"
                        width={500}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A barber student cutting hair."
                        style={{ marginBottom: `1.45rem` }}
                    />
                </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col p-10 bg-dark-200 rounded-xl">
                <h2 className="text-4xl font-semibold">Barber Refresher Course</h2>
                <div className="flex justify-between mt-8">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold">SPECIAL OFFER</h3>
                        <p className="ml-3 underline">One Time Payment</p>
                        <p className="ml-3">* Tool kit and book are included</p>
                    </div>
                    <div><span className="text-xl font-bold">$2500</span></div>
                </div>
                <div className="flex justify-between mt-8">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold">Prerequisite for Refresher Course:</h3>
                        <p className="ml-3">A California Barber license whether it is valid or expired.</p>
                    </div>
                </div>
                <span className="w-36 rounded-full border-2 border-white px-6 py-3 mt-6 text-center">200 Hours</span>
                <div className="flex justify-between mt-8">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold">LENGTH OF COURSE</h3>
                        <p className="ml-3">+ 10 Weeks (Full time, 40 hours of attendance a week)</p>
                        <p className="ml-3">+ 20 Weeks (Part time, 20 hours of attendance a week)</p>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex flex-col">
                        <p className="">Schedule: Full-time or Part-time</p>
                    </div>
                </div>
                <Link className="mt-8" to="/application">
                    <Button variant="contained">Enroll Now</Button>
                </Link>
                <span className="w-24 border-b-2 border-light-100 py-4"></span>
                <p className="font-semibold italic mt-6">
                    At Pro Barber College, we will give you the tools to design the right look for different types of facial and hair features.
                </p>
                </div>
        </div>
    )
}

export default RefresherCourse
