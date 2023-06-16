import React, { useState, useEffect } from 'react'
import '../index.css';
import { useSpring, animated } from 'react-spring'
import noimage from '../img/noimage.png'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from '@firebase/firestore';
import { db } from '../firebase'
import Tags from '../components/Tags';

function Projects() {
    document.title = "bear: projects"

    const [flip, setFlip] = useState(false);

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        reverse: flip,
        delay: 500
    });

    const query = collection(db, '/projects')
    const [docs, loading, error, snapshot] = useCollectionData(query);

    return (
        <div className='h-auto'>
            <div className='backdrop-blur-sm backdrop-brightness-75 drop-shadow-lg'>
                <animated.div className='grid gap-y-10 justify-center px-10 py-20 md:px-10 xl:px-64' style={props}>
                    {loading && <div className='h-screen'></div>}
                    <h1 className='text-white text-4xl font-bold m-auto text-center'>my projects</h1>
                    <div className="m-auto h-1 w-1/3 bg-darkGreen-300"></div>
                    <div className='flex flex-wrap gap-5 lg:gap-5 justify-center'>
                        {docs?.map((doc, index) => (
                            <div className="max-w-sm w-80 pb-5 rounded overflow-hidden shadow-lg transition duration-300 bg-darkGreen-400 hover:scale-105" key={ index }>
                                <img className="w-full h-60 object-cover object-top" src={ doc.imglink == "#" ? noimage : doc.imglink } alt={ doc.imgalt }></img>
                                <a href={ doc.link } target='_blank' rel='noreferrer'>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{ doc.name }</div>
                                        <p className="text-gray-700 text-base">{ doc.desc }</p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                    <Tags path={`projects/${doc.name}/tags`}/>
                                    {/*<span className="inline-block bg-darkGreen-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ doc.tags }</span>*/}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/*
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-darkGreen-400 transition duration-300 hover:scale-105">
                        <img className="w-full h-60" src="https://petapixel.com/assets/uploads/2022/08/fdfs19-800x533.jpg" alt="Sunset in the mountains"></img>
                        <a href='#'>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">bearBilling</div>
                                <p className="text-gray-700 text-base">
                                My very first Java program that has MySQL integration thru the JDBC library.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-darkGreen-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Java</span>
                                <span className="inline-block bg-darkGreen-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JDBC</span>
                                <span className="inline-block bg-darkGreen-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Swing</span>
                            </div>
                        </a>
                    </div>
                    */}
                </animated.div>
            </div>
        </div>
    )
}

export default Projects