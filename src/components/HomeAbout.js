import React from 'react';
import { ImQuotesLeft } from "react-icons/im";
import man from "./../images/reviews/Vector.png";

const HomeAbout = () => {
    return (
        <div className="px-4 lg:px-0 md:px-0 h-screen grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 place-items-center">
            <div className='mt-52 lg:mt-0 md:mt-0 col-span-5 flex items-end my-10'>
                <img className='shrink-0' src={man} alt="" />
                <div className='ml-[-80px]'>
                    <span className="uppercase font-extrabold text-xl text-primary">Luca Lojk</span> <br />
                    <span className="uppercase text-gray-400 text-sm">founder & ceo</span>
                </div>
            </div>
            <div className="col-span-7 text-center lg:text-left md:text-left">
                <h1 className='font-extrabold text-4xl lg:text-5xl md:text-5xl my-5 text-gray-200'>Who We Are?</h1>
                <p className='text-gray-400 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sed labore! Assumenda necessitatibus expedita labore, eum nesciunt nisi! Est eos molestias ex nemo exercitationem soluta atque quam quae corporis cumque.</p>
                <div className='flex items-center'>
                    <ImQuotesLeft className='text-5xl text-primary' /> <span className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptatibus.</span>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;