import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Button from '@material-ui/core/Button'

const CallToAction = ({ header, buttonText, buttonUrl }) => {
    return (
        <div className="max-w-full max-h-full relative mt-16" style={{ height: '650px'}}>
            <StaticImage className="relative cover max-w-full w-full h-full md:mx-0"
                src="../images/bg-cta-1.jpg"
                width={1920}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Pro Barber college programs and learning environment."
            />
            <div className="w-full absolute inset-0 flex flex-col justify-center items-center" style={{ height: '650px'}}>
                <h2 className="text-2xl md:text-6xl font-bold text-white">{header}</h2>
                <Link className="mt-8" to={buttonUrl}>
                    <Button color="secondary" variant="contained">{buttonText}</Button>
                </Link>
            </div>
        </div>
    )
}

export default CallToAction
