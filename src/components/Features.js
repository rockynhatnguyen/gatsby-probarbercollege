import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Features = () => {
    return (
        <div className="max-w-7xl flex flex-col mx-4 md:mx-0 mt-16">
            <h1 className="text-5xl font-bold px-4">Program Features</h1>
            <hr className="my-6 mx-4" style={{ backgroundColor: 'white', height: '2px', width: '20%'}} />
            <div className="flex flex-col lg:flex-row mt-8">
                <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:mr-8">
                    <span className="w-full flex lg:justify-center lg:items-start px-4">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-2xl my-8 px-4">Continuing Enrollment</h3>
                        <p className="font-semibold text-xl my-4 px-4">Our barber college has continuous enrollment. Students graduate and enroll each month. This means that students can enroll anytime during the year.</p>
                        <p className="font-semibold text-xl my-4 px-4">We have a revolving course. Instruction for the practical portion is a one on one teaching/learning experience. The theory is taught from the State Board approved textbook. Students enter into the textbook where the class is and the book is repeated.</p>
                        <p className="font-semibold text-xl my-4 px-4">Cosmetology Crossovers, Refreshers, and Instructor courses are tailored. Enrollments are restricted to maintain a low student-to-instructor ratio.</p>
                        <p className="font-semibold text-xl my-4 px-4">The goal of Pro Barber College is to train our students to master the art and science of a Barber and to instill in our students the importance of good public relations and for students to obtain the necessary state license to practice barbering.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-between items-center lg:ml-8">
                    <StaticImage className="mx-4 md:mx-0 my-4 rounded-2xl"
                        src="../images/features-1.jpg"
                        width={650}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Barber students cutting hair for clients."
                    />
                    <StaticImage className="mx-4 md:mx-0 my-4 rounded-2xl"
                        src="../images/features-2.jpg"
                        width={650}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A barber student cleaning and prepping equipment."
                    />
                    <StaticImage className="mx-4 md:mx-0 my-4 rounded-2xl"
                        src="../images/features-3.jpg"
                        width={650}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A barber student in uniform."
                    />
                </div>
            </div>
        </div>
    )
}

export default Features
