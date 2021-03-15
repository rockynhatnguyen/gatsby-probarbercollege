import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center mt-10 md:mt-16">
            <div className="max-w-7xl w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col p-8 md:p-0 md:pl-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Need help finding us?</h2>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold mt-8 md:mt-12">Contact Information</h3>
                        <p className="mt-3">
                            <span className="font-semibold">Title:</span> Director<br />
                            <span className="font-semibold">Name:</span> Jimmy Vo<br />
                            <span className="font-semibold">Email:</span> Jimmyhungvo@yahoo.com
                        </p>

                        <h3 className="text-xl font-bold mt-8 md:mt-10">Social Media</h3>
                        <div className="inline-block my-3">
                            <a className="ml-3 mr-4" href="" target="_blank">
                                <StaticImage className="w-3"
                                    src="../images/icon-facebook.svg"
                                    width={200}
                                    quality={95}
                                    formats={["AUTO", "WEBP", "AVIF"]}
                                    alt="Pro Barber college Facebook icon."
                                />
                                <span className="sr-only">Pro Barber College Facebook Link</span>
                            </a>
                            <a className="ml-2" href="" target="_blank">
                                <StaticImage className="w-6"
                                    src="../images/icon-yelp.svg"
                                    width={200}
                                    quality={95}
                                    formats={["AUTO", "WEBP", "AVIF"]}
                                    alt="Pro Barber college yelp icon."
                                />
                                <span className="sr-only">Pro Barber College Yelp Link</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col px-8 md:px-4 md:pr-8 xl:px-0">
                    <div className="w-full">
                        <StaticImage className="relative cover max-w-full w-full h-full rounded-xl"
                            src="../images/footer-map.jpg"
                            width={900}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Pro Barber college programs and learning environment."
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="py-2 mt-4 md:mt-0 md:py-8">
                            <p className="text-lg font-semibold">Torrance Main Campus</p>
                            <p className="my-3">
                                2606 W. 182nd St.<br />
                                Torrance, CA 90504
                            </p>
                            <p className="my-3">
                                Mon - Fri : 9 AM - 7 PM
                            </p>
                            <p className="my-3">
                                310 - 866 - 8460
                            </p>
                        </div>
                        <div className="py-2 md:py-8 md:mr-4">
                            <p className="text-lg font-semibold">Westminster Branch Campus</p>
                            <p className="my-3">
                                6478 Westminster Blvd.<br />
                                Westminster, CA 92683
                            </p>
                            <p className="my-3">
                                Mon - Fri : 9:30 AM - 6:30 PM
                            </p>
                            <p className="my-3">
                                714 - 797 - 9719
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                © {new Date().getFullYear()} Pro Barber College
            </div>
        </footer>
    )
}

export default Footer
