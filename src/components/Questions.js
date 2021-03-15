import React from 'react'
import { Link } from "gatsby"
import Button from '@material-ui/core/Button'

const Questions = () => {
    return (
        <div className="max-w-7xl bg-dark-200 mx-8 md:mx-auto px-4 md:px-6 md:py-12 mt-16 rounded-xl">
            <div className="py-16 flex flex-col justify-center items-center">
                <h2 className="text-white text-2xl md:text-5xl font-bold">Have any questions for us?</h2>
                <hr className="my-10" style={{ backgroundColor: 'white', height: '2px', width: '30%'}} />
                <Link className="" to="/contact">
                    <Button variant="outlined">Contact us to ask your question</Button>
                </Link>
            </div>
        </div>
    )
}

export default Questions
