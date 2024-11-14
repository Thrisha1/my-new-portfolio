import React from 'react'
import Image from 'next/image';

function About() {
    return (
        <div className='bg-[#FFFFFF] w-full flex justify-center items-center p-32'>
            <div className="w-1/2 ">
                {/* profile pic in big size */}
                <Image src={'/about.png'} alt="Profile Picture" width={500} height={500} className="rounded-b-4xl" />
            </div>
            <div className="w-1/3">
                <h1 className='text-4xl font-bold tracking-wider leading-relaxed'>I'm a Freelancer Front-end Developer with over 3 years of experience.</h1>
                <p className='text-xl text-gray-600 tracking-wider leading-normal py-10'>I'm a Freelancer Front-end Developer with over 3 years of experience.
                    I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                <div className="w-full flex gap-14">
                    <button className="bg-orange-600 md:px-4 md:py-2 p-2 rounded relative z-10 text-white hover:bg-black w-32 shadow-black shadow-2xl">
                        <span className="">Contact Me</span>
                    </button>
                    <button className="bg-black md:px-4 md:py-2 p-2 rounded relative z-10 text-white hover:bg-orange-600 w-32 shadow-orange-600 shadow-2xl">
                        <span className="">portfolio</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About