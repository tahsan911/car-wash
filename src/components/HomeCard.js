import React from 'react';
import "./HomeCard.css";
import imageOne from './../images/vector/Vector2.png'
import imageTwo from './../images/vector/Vector3.png'
import imageThree from './../images/vector/Vector4.png'
import imageFour from './../images/vector/vector5.png'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const HomeCard = () => {
    return (
        <div className="card-vector h-screen">
            <div className='flex items-end ml-8'>
                <h1 className='text-5xl font-extrabold'>Our Washing Services</h1>
                <h6 className='ml-4 font-extrabold'>WITH <span className='text-primary'>MODERN EQUIPMENT</span></h6>
            </div>
            <div className='grid lg:grid-cols-12 gap-8 mx-8 pt-20'>
                <div className='col-span-3 h-24'>
                    <div className='border-2-gray rounded-xl bg-gradient-to-tl to-stone-700 from-black'>
                        <img className='mx-auto pt-9 pb-7' src={imageOne} alt="" />
                        <div className='card-body text-center'>
                            <h1 className='text-xl font-extrabold text-primary py-3'>Contactless Washing</h1>
                            <p className='text-gray-500 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, nam.</p>
                            <div className='flex mx-auto'>
                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />
                                <AiOutlineStar className='text-primary text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 h-24'>
                    <div className='border-2-gray rounded-xl bg-gradient-to-tl to-stone-700 from-black'>
                        <img className='mx-auto pt-4 pb-8' src={imageTwo} alt="" />
                        <div className='card-body text-center'>
                            <h1 className='text-xl font-extrabold text-primary py-3'>Safety Materials</h1>
                            <p className='text-gray-500 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, nam.</p>
                            <div className='flex mx-auto'>
                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />
                                <AiOutlineStar className='text-primary text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 h-24'>
                    <div className='border-2-gray rounded-xl bg-gradient-to-tl to-stone-700 from-black'>
                        <img className='mx-auto pt-8 pb-7' src={imageThree} alt="" />
                        <div className='card-body text-center'>
                            <h1 className='text-xl font-extrabold text-primary py-3'>Modern Equipment</h1>
                            <p className='text-gray-500 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, nam.</p>
                            <div className='flex mx-auto'>
                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />
                                <AiOutlineStar className='text-primary text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 h-24'>
                    <div className='border-2-gray rounded-xl bg-gradient-to-tl to-stone-700 from-black'>
                        <img className='mx-auto pt-8' src={imageFour} alt="" />
                        <div className='card-body text-center'>
                            <h1 className='text-xl font-extrabold text-primary py-3'>Extensive Cleaning</h1>
                            <p className='text-gray-500 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, nam.</p>
                            <div className='flex mx-auto'>
                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />                                <AiFillStar className='text-primary text-2xl' />
                                <AiOutlineStar className='text-primary text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;