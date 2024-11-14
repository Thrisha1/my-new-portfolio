import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
    return (
        <div className='flex md:flex-row flex-col items-center md:items-start justify-center md:m-32 md:my-40  gap-y-10 md:gap-y-0 mt-14 '>
            
            <div className="w-full md:w-1/2 flex flex-col font-semibold md:items-start md:h-96 justify-center items-center md:mx-40 md:px-4">
                <div className="md:space-y-10 flex flex-col items-center md:items-start gap-y-5 md:gap-y-0">
                    <h1 className="md:text-xl text-sm tracking-widest">👋 HELLO, MY NAME IS THRISHA </h1>
                    <div className="flex items-center">
                        <span className='md:text-4xl font-bold'>I'm a </span>
                        <span className="ml-2 md:text-2xl font-bold relative">
                            <TypeAnimation
                                sequence={[
                                    'Software Engineer',  // Text to type
                                    1000,                // Typing speed (in milliseconds)
                                    '',                   // Clear the text
                                    1000,                 // Wait time after clearing text
                                    'Software Engineer',  // Text to type again
                                    1000,                 // Typing speed again
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}  // This makes the sequence repeat infinitely
                                style={{ fontSize: '2em', display: 'inline-block' }}
                            />
                        </span>
                    </div>
                    <h1 className="text-xl tracking-widest text-gray-600">Based in Kochi, India</h1>
                    <button className="bg-orange-600 md:px-4 md:py-2 p-2 rounded relative text-white hover:bg-black">
                        <span className="z-20">Let's Start</span>
                    </button>
                </div>
            </div>
            <div className="w-1/2">
                {/* profile pic in big size */}
                <Image src={'/mypic.png'} alt="Profile Picture" width={500} height={500} className="rounded-b-4xl" />
            </div>
        </div>
    )
}

export default HeroSection
