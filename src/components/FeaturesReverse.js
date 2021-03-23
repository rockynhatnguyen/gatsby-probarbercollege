import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const FeaturesReverse = () => {
    return (
        <div className="max-w-7xl flex flex-col mx-4 md:mx-0 mt-16">
            <div className="flex flex-col lg:flex-row mt-8">
                <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-between items-center lg:mr-8">
                    <StaticImage className="mx-4 md:mx-0 my-4 rounded-2xl"
                        src="../images/features-4@2x.jpg"
                        width={650}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Barber students cutting hair for clients."
                    />
                    <StaticImage className="mx-4 md:mx-0 my-4 rounded-2xl"
                        src="../images/features-5@2x.jpg"
                        width={650}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A barber student cleaning and prepping equipment."
                    />
                    <StaticImage className="mx-4 md:mx-0 my-4 rounded-2xl"
                        src="../images/features-6@2x.jpg"
                        width={650}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A barber student in uniform."
                    />
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col lg:flex-row lg:ml-8">
                    <span className="w-full flex lg:justify-center lg:items-start px-4">
                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </span>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-2xl my-8 px-4">A Unique Learning Environment</h3>
                        <p className="font-semibold text-xl my-4 px-4">Pro Barber College offers a unique learning environment through hands-on and real-world experience.</p>
                        <p className="font-semibold text-xl my-4 px-4">At Pro Barber College, we will give you the tools to design the right look for different types of hair features.</p>
                        <p className="font-semibold text-xl my-4 px-4">Our objective is to prepare men and women, who have limited or no experience with the knowledge and skills for barbering position in the hair industry.</p>
                        <p className="font-semibold text-xl my-4 px-4">At Pro Barber College, we practice skills that prepare you for the work place, not just for the classroom. You can depend on us to get you to where you want to be in your Barbering career.</p>
                        <p className="font-semibold text-xl my-4 px-4">Our instructors build more than just core skills. We build the ‘whole you’ - teaching both business skills and social skills.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesReverse
