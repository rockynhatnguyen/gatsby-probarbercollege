import React from 'react'

const About = () => {
    return (
        <div className="max-w-7xl flex flex-col md:grid md:grid-cols-2 gap-4 mx-4 md:mx-0 mt-16">
            <div className="flex flex-col bg-dark-200 rounded-xl p-8">
                <h2 className="text-5xl font-bold">About Us</h2>
                <hr className="my-6" style={{ backgroundColor: 'white', height: '2px', width: '20%'}} />
                <p>
                Pro Barber College is a private institution and approved to operate by the Bureau for Private Postsecondary Education and the Board of Barbering and Cosmetology. Our college was granted institutional approval from the Bureau for Private Postsecondary Education 2535 Capitol Oaks Drive, Suite 400, Sacramento, CA 95833. The Bureau’s approval means that the institution and its operation are in compliance with the California Private Postsecondary Education Act of 2009.
                </p>
            </div>
            <div className="max-w-full w-full overflow-hidden relative bg-dark-200 rounded-xl" style={{ paddingTop: '56.25%' }}>
                <iframe className="about-us-video absolute h-full w-full inset-0" src="https://player.vimeo.com/video/233439508?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="auto" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Barber  $5 Hair Cuts in Pro Barber College Torrance"></iframe>
            </div>
        </div>
    )
}

export default About
