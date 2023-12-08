import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <main className='about'>
            <Helmet>
                <title>About Realify Homes</title>
                <meta name='description' content='Discover Realify Homes - your ultimate destination for finding the perfect home!' />
            </Helmet>
            <header className='heading-component'>
                <h1 className='font-weight-bold'>Welcome to Realify Homes</h1>
            </header>
            <section className='container my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className='subheading-about py-3'>
                            Find Your Dream Home with Us
                        </h2>
                        <p className='text-justify'>
                            At Realify Homes, we're dedicated to transforming your dream of a perfect home into reality. We understand that your home is more than just a place; it's where memories are created, and futures are shaped. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien a diam eleifend faucibus. Suspendisse vitae sodales leo. Proin hendrerit aliquam interdum.
                        </p>
                        <p className='text-justify mt-3'>
                            Our commitment is to guide you through every step of the journey, ensuring a seamless and personalized experience. Whether you're looking for a cozy apartment, a charming house, or your next investment property, we've got you covered. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada lacus mauris, eu ultrices neque egestas eu. Morbi elementum enim vitae purus pulvinar tincidunt.
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <div className='about__display'>
                            <img
                                width='100%'
                                height='auto'
                                src='https://pbs.twimg.com/media/EYuaH_GWkAAsA5A.jpg'
                                alt='Realify Homes'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;