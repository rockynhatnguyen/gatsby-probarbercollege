import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const BarberingCourse = () => {
    return (
        <div className="max-w-7xl mx-4 md:mx-auto flex flex-col items-center md:flex-row md:justify-center md:items-start mt-16">
            <div className="w-full md:w-1/3 flex flex-col px-0 md:px-10 py-10">
                <h2 className="border-2 rounded-xl mx-auto px-6 py-3 text-center mb-8">(SOC) 39-5011</h2>
                <StaticImage className="rounded-2xl"
                    src="../../images/plans-barbering-1.jpg"
                    width={500}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="A barber student cutting hair."
                    style={{ marginBottom: `1.45rem` }}
                />
                <StaticImage className="hidden md:block rounded-2xl"
                    src="../../images/plans-barbering-2.jpg"
                    width={500}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="A barber student cutting hair."
                    style={{ marginBottom: `1.45rem` }}
                />
                <StaticImage className="hidden md:block rounded-2xl"
                    src="../../images/plans-barbering-3.jpg"
                    width={500}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="A barber student cutting hair."
                    style={{ marginBottom: `1.45rem` }}
                />
            </div>
            <div className="w-full md:w-2/3 flex flex-col p-10 bg-dark-200 rounded-xl">
                <h2 className="text-4xl font-semibold">Barbering Course</h2>
                <div className="flex justify-between mt-8">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold">BARBER SPECIAL OFFER</h3>
                        <p className="ml-3 underline">One Time Payment</p>
                        <p className="ml-3">* Tool kit and book are included</p>
                    </div>
                    <div><span className="text-xl font-bold">$4800</span></div>
                </div>
                <div className="flex justify-between mt-8">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold">FULL TUITION</h3>
                        <p className="ml-3 underline">Payment Plan</p>
                        <p className="ml-3">* Tool kit and book are included</p>
                    </div>
                    <div><span className="text-xl font-bold">$6050</span></div>
                </div>
                <span className="w-36 rounded-full border-2 border-white px-6 py-3 mt-6 text-center">1500 Hours</span>
                <div className="flex justify-between mt-8">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold">LENGTH OF COURSE</h3>
                        <p className="ml-3">+ 38 Weeks (Full time, 40 hours of attendance a week)</p>
                        <p className="ml-3">+ 75 Weeks (Part time, 20 hours of attendance a week)</p>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex flex-col">
                        <p className="">Schedule: Full-time or Part-time</p>
                        <p className=""><b>Registration Fee (non-refundable): $100</b></p>
                    </div>
                </div>
                <Link className="mt-8" to="/application">
                    <Button variant="contained">Enroll Now</Button>
                </Link>
                <span className="w-24 border-b-2 border-light-100 py-4"></span>
                <p className="font-semibold italic mt-6">
                    Our mission is to train men and women in the art of barbering and to provide them with the tools necessary to locate as well as retain a job in the barber industry in order to enjoy practicing the art.</p>
                <p className="font-semibold italic mt-6">
                    At Pro Barber College, we will give you the tools to design the right look for different types of facial and hair features.</p>
                <p className="font-semibold italic mt-6">
                    Our program is designed to constantly move you forward by giving you a strong mix of theory and practical skills. Every day in the classroom will bring you closer to achieving your goal.</p>
            </div>
        </div>
    )
}

export default BarberingCourse
