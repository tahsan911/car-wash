import React from "react";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="bg-img">
            <div class="hero">
                <div class="h-screen flex items-center justify-around px-0 w-full">
                    <div className="w-1/2">
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-offset="200"
                            style={{ fontFamily: "Playfair Display" }}
                            class="py-4   text-4xl lg:text-6xl md:text-5xl font-bold col-span-1"
                        >
                            The Shine that <br /> lasts <br />{" "}
                            <span
                                style={{ fontFamily: "Playfair Display" }}
                                className="text-primary"
                            >
                                Forever
                            </span>
                        </h1>
                        <p
                            data-aos="fade-right"
                            data-aos-delay="250"
                            data-aos-duration="1500"
                            data-aos-offset="200"
                            class="pt-4  "
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
                            ipsum delectus placeat asperiores enim doloribus beatae illo atque
                            aut repellat.
                        </p>
                        <div data-aos="fade-left"
                            data-aos-dela="500"
                            dat-aos-duration="3000"
                            data-aos-easing="linear"
                            >
                            <button class="btn btn-primary px-16 my-8">Book Now</button>
                        </div>
                    </div>
                    <ul className="grid ">
                        <li
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className="hover:text-primary duration-150 delay-100 my-4 text-4xl"
                        >
                            {" "}
                            <a
                                target={"_blank"}
                                href="https://www.twitter.com"
                                rel="noreferrer"
                            >
                                <AiFillTwitterCircle />
                            </a>{" "}
                        </li>
                        <li
                            data-aos="fade-down"
                            data-aos-delay="100"
                            data-aos-duration="1500"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-linear"
                            className="hover:text-primary duration-150 delay-100 my-4 text-4xl"
                        >
                            <a
                                target={"_blank"}
                                href="https://www.facebook.com"
                                rel="noreferrer"
                            >
                                {" "}
                                <FaFacebook />{" "}
                            </a>
                        </li>
                        <li
                            data-aos="fade-left"
                            data-aos-delay="100"
                            data-aos-duration="1500"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-sine"
                            className="hover:text-primary duration-150 delay-100 my-4 text-4xl"
                        >
                            <a
                                target={"_blank"}
                                href="https://www.instagram.com"
                                rel="noreferrer"
                            >
                                {" "}
                                <AiOutlineInstagram />{" "}
                            </a>
                        </li>
                        <li
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1500"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-linear"
                            className="hover:text-primary duration-150 delay-100 my-4 text-4xl"
                        >
                            <a
                                target={"_blank"}
                                href="https://www.linkedin.com"
                                rel="noreferrer"
                            >
                                {" "}
                                <TiSocialLinkedinCircular />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;
