import React, { useState } from 'react'
import '../index.css';
import { useSpring, animated } from 'react-spring'

function HomePage() {

    document.title = "bear: welcome"
    const [flip, setFlip] = useState(false);

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        reverse: flip,
        delay: 500
    })

    return (
        <div className='h-screen'>
            <div className='h-full backdrop-blur-sm backdrop-brightness-75 flex justify-center'>
                <animated.div className='flex justify-center content-center' style={props}>
                    <div className='grid content-center px-10 py-20 xl:px-64'>
                        <div className='grid gap-y-10 lg:px-40'>
                            <div className='text-center'>
                                <h1 className='text-white text-4xl font-bold'>Hello, i am bear.</h1>
                                <h1 className='text-white text-4xl font-bold'>Hello, i am bear.</h1>
                                <h1 className='text-white text-4xl'>Hello, i am bear.</h1>
                                <h1 className='text-white text-4xl'>Hello, i am bear.</h1>
                                <br></br>
                                <h1 className='text-white italic text-2xl'>and i create random stuff.</h1>
                            </div>
                            <div className='grid justify-center'>
                                <a href="https://janbercalamba.netlify.app/"><button className='px-4 py-3 rounded-full text-white text-l shadow-2xl bg-darkGreen-200 hover:bg-darkGreen-100'>visit updated portfolio</button></a>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
        </div>
    )
}

export default HomePage