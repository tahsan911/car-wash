import React from 'react';
import './Banner.css';
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {TiSocialLinkedinCircular} from 'react-icons/ti'

const Banner = () => {
    return (
        <div className="bg-img">
            <div class="hero">
                <div class="h-screen flex items-center justify-around px-0 w-full">
                    <div className='w-1/2'>
                        <h1 style={{'fontFamily': "Playfair Display"}} class="py-4   text-4xl lg:text-6xl md:text-5xl font-bold col-span-1">The Shine that <br /> lasts <br /> <span style={{'fontFamily': "Playfair Display"}} className='text-primary'>Forever</span></h1>
                        <p class="pt-4  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, ipsum delectus placeat asperiores enim doloribus beatae illo atque aut repellat.</p>
                        <button class="btn btn-primary px-16 my-8">Book Now</button>
                    </div>
                    <ul className='grid '>
                        <li className='hover:text-primary duration-150 delay-100 my-2.5 text-2xl'> <a target={"_blank"} href="https://www.twitter.com"><AiFillTwitterCircle /></a> </li>
                        <li className='hover:text-primary duration-150 delay-100 my-2.5 text-2xl'><a target={"_blank"} href="https://www.facebook.com"> <FaFacebook /> </a></li>
                        <li className='hover:text-primary duration-150 delay-100 my-2.5 text-2xl'><a target={"_blank"} href="https://www.instagram.com"> <AiOutlineInstagram /> </a></li>
                        <li className='hover:text-primary duration-150 delay-100 my-2.5 text-2xl'><a target={"_blank"} href="https://www.linkedin.com"> <TiSocialLinkedinCircular /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;