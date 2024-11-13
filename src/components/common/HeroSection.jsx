import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
    return (
        <div>
            <div className="w-full md:w-1/2 flex flex-col font-semibold items-start h-96 justify-center mx-52 px-4">
                <div className="space-y-10">
                    <h1 className="text-xl tracking-widest">👋 HELLO, MY NAME IS THRISHA KANNAN</h1>
                    <div className="flex items-center">
                        <span className='text-4xl font-bold'>I'm a </span>
                        <span className="ml-2 text-2xl font-bold relative">
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
                    <button className="bg-orange-600 md:px-4 md:py-2 p-2 rounded relative z-10 text-white hover:bg-black">
                        <span className="z-20">Let's Start</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
