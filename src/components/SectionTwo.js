import React from 'react';
import sectionTwoImg from './../images/car_photo/Vector1.png'


const SectionTwo = () => {
    return (
        <div className="text-center lg:text-left md:text-left hero-content grid grid-cols-1 lg:grid-cols-2  h-screen justify-between mb-40 lg:mb-0 w-full mx-auto">
            <div className="mx-auto font-sans">
                <h1 className="text-5xl my-5 font-extrabold leading-normal">Professional Washing <br /> And Cleaning.</h1>
                <p className='text-sm text-gray-400 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi inventore consectetur, necessitatibus quos iusto sunt incidunt? Consequuntur rerum quis quisquam quae temporibus impedit quos culpa, <br /> <br /> suscipit asperiores est repellendus, necessitatibus quibusdam nisi vel possimus minus corrupti iure aut ratione natus odit cupiditate?    <span className='text-white cursor-pointer'>Call for book.</span> </p>
                <button className='btn btn-primary mr-5 mb-5 px-4 py-2 text-sm'>+880 19607 02163</button>
                <button className='btn btn-outline rounded-lg text-md'>Learn More</button>
            </div>
            <div>
                <img className="w-11/12 mx-auto" src={sectionTwoImg} alt="" />
            </div>
        </div>
    );
};

export default SectionTwo;