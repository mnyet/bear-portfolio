import React, { useState, useEffect } from 'react'
import '../index.css';
import { useSpring, animated } from 'react-spring'
import noimage from '../img/noimage.png'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from '@firebase/firestore';
import { db } from '../firebase'
import Tags from '../components/Tags';
import profile from '../img/profile.jpg';

function Projects() {
    window.location.href = "https://janbercalamba.netlify.app/#projects";
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
                    <div className="m-auto h-1 w-1/3 bg-white"></div>
                    <div className='flex flex-wrap gap-5 lg:gap-5 justify-center'>
                        {docs?.map((doc, index) => (
                            <a className="grid items-end max-w-sm w-80 h-max rounded overflow-hidden shadow-lg transition duration-300 bg-slate-800 text-white hover:scale-105
                                    bg-cover" 
                                    style={{ backgroundImage: `url(${ doc.imglink == "#" ? noimage : doc.imglink })` }}
                                    href={ doc.link } target='_blank' rel='noreferrer'>
                                <div className='h-20'></div>
                                <div className='h-96 grid content-end w-full bg-gradient-to-t from-gray-950 pb-3'>
                                        <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{ doc.name }</div>
                                        <p className="text-base">{ doc.desc }</p>
                                    </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <Tags path={`projects/${doc.name}/tags`}/>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    {/* 
                        <div className="max-w-sm w-80 pb-5 rounded overflow-hidden shadow-lg transition duration-300 bg-darkGreen-400 hover:scale-105" key={ index }>
                                <img className="w-full h-60 object-cover object-top" src={ doc.imglink == "#" ? noimage : doc.imglink } alt={ doc.imgalt }></img>
                                <a href={ doc.link } target='_blank' rel='noreferrer'>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{ doc.name }</div>
                                        <p className="text-gray-700 text-base">{ doc.desc }</p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                    <Tags path={`projects/${doc.name}/tags`}/>
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