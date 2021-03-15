import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const HomeBanner = () => {
    return (
        <div className="max-w-7xl flex flex-col justify-between items-center text-center md:text-left md:flex-row md:mx-4 my-8 md:mt-12">
            <div className="flex-col md:flex-row justify-center">
                <div className="px-6 md:px-0">
                    <h1 className="text-4xl font-bold">Interested in a Barbering Career?</h1>
                </div>
                <Box className="flex flex-row">
                    <div className="w-full flex flex-col">
                        <div className="flex flex-col md:flex-row" style={{ margin: '10px 0'}}>
                            <div className="w-full md:w-1/2">
                                <p style={{ margin: '0'}}>Call 714-797-9719</p>
                                <p style={{ margin: '0'}}>For Westminster Branch</p>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-center my-3 md:mx-3">
                                <Link to="/application">
                                    <Button variant="contained" color="secondary">Enroll Now</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row" style={{ margin: '10px 0'}}>
                            <div className="w-full md:w-1/2">
                                <p style={{ margin: '0'}}>Call 310-866-8460</p>
                                <p style={{ margin: '0'}}>For Torrance Branch</p>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-center my-3 md:mx-3">
                                <Link to="/contact">
                                    <Button variant="outlined">Find Us</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
            <StaticImage className="mx-4 md:mx-0 rounded-2xl"
                src="../images/index-header-banner.jpg"
                width={800}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A barber student cutting hair."
                style={{ marginBottom: `1.45rem` }}
            />
        </div>
    )
}

export default HomeBanner
