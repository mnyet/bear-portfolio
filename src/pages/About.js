import React, { useState } from 'react'
import profile from '../img/profile.jpg'
import { useSpring, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from '@firebase/firestore';
import { db } from '../firebase'
import Schools from '../components/Schools'

function About() {
    document.title = "bear: about"

    const [flip, setFlip] = useState(false);

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        reverse: flip,
        delay: 500
    })

    const query = collection(db, '/profile/basic-info/main-profile')
    const [docs, loading, error, snapshot] = useCollectionData(query);

    return (
        <div className='h-auto'>
            <div className='h-full backdrop-blur-sm backdrop-brightness-75'>
                <animated.div className='grid gap-y-20 justify-center px-10 py-20 md:gap-y-24 md:flex-nowrap md:px-10 xl:px-64' style={props}>
                    {loading && <div className='h-screen'></div>}
                    <div className='flex flex-wrap gap-32 justify-center gap-y-12'>
                        {docs?.map((doc, index) => (
                            <div key={ index }>
                                <img src={ doc.profileimg } className='object-contain w-80 h-auto rounded-md shadow-2xl' alt='profile image'></img>
                            </div>
                        ))}
                        <div className='grid gap-10 lg:gap-0 drop-shadow-lg'>
                            <h1 className='text-white text-4xl font-bold'>This is bear.</h1>
                            <div className='flex'>
                                {docs?.map((doc, index) => (
                                    <div className='grid grid-cols-2 gap-5' key={ index }>
                                        <p className='text-white'><strong>Name: </strong></p>
                                        <p className='text-white'>{ doc.name }</p>
                                        <p className='text-white'><strong>Gender: </strong></p>
                                        <p className='text-white'>{ doc.gender }</p>
                                        <p className='text-white'><strong>Birthday: </strong></p>
                                        <p className='text-white'>{ doc.birthday }</p>
                                        <p className='text-white'><strong>MBTI: </strong></p>
                                        <p className='text-white'>{ doc.mbti }</p>
                                        <p className='text-white'><strong>Interests: </strong></p>
                                        <p className='text-white'>{ doc.interests }</p>
                                        <div className='col-span-2 text-white pt-4 flex gap-5'>
                                            <a href={ doc.fblink } target='_blank' rel='noreferrer'><FontAwesomeIcon className='transition duration-150 hover:scale-125' icon={faFacebook} size='2x' /></a>
                                            <a href={ doc.twitterlink } target='_blank' rel='noreferrer'><FontAwesomeIcon className='transition duration-150 hover:scale-125' icon={faTwitter} size='2x' /></a>
                                            <a href={ doc.iglink } target='_blank' rel='noreferrer'><FontAwesomeIcon className='transition duration-150 hover:scale-125' icon={faInstagram} size='2x' /></a>
                                            <a href={ doc.redditlink } target='_blank' rel='noreferrer'><FontAwesomeIcon className='transition duration-150 hover:scale-125' icon={faReddit} size='2x' /></a>
                                            <a href={ doc.githublink } target='_blank' rel='noreferrer'><FontAwesomeIcon className='transition duration-150 hover:scale-125' icon={faGithub} size='2x' /></a>
                                            <a href={ doc.linkedinlink } target='_blank' rel='noreferrer'><FontAwesomeIcon className='transition duration-150 hover:scale-125' icon={faLinkedin} size='2x' /></a>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="m-auto h-1 w-1/3 bg-white"></div>
                    <div className='text-white grid gap-y-20 justify-center drop-shadow-xl'>
                        <h1 className='text-3xl font-semibold text-center'>Eductional Attainment:</h1>
                        <div className='grid text-center justify-center gap-10 p-10 shadow-2xl bg-gray-950 bg-opacity-30 rounded-md'>
                            <Schools />
                            {/*
                            <div className='flex flex-wrap gap-x-10 content-center justify-center'>
                                <FontAwesomeIcon className='text-6xl p-5 m-auto' icon={faGraduationCap} />
                                <a className='grid text-left content-center' href='https://www.facebook.com/OLLCValenzuelaOfficial/' target='_blank' rel='noreferrer'>
                                    <p><strong>Elementary School</strong></p>
                                    <p>Our Lady of Lourdes College</p>
                                    <p>2008-2014</p>
                                </a>
                            </div>
                            <div className='flex flex-wrap gap-x-10 content-center justify-center'>
                                <FontAwesomeIcon className='text-6xl p-5 m-auto' icon={faGraduationCap} />
                                <a className='grid text-left content-center' href='https://www.facebook.com/OLLCValenzuelaOfficial/' target='_blank' rel='noreferrer'>
                                    <p><strong>Junior High School</strong></p>
                                    <p>Our Lady of Lourdes College</p>
                                    <p>2014-2018</p>
                                </a>
                            </div>
                            <div className='flex flex-wrap gap-x-10 content-center justify-center'>
                                <FontAwesomeIcon className='text-6xl p-5 m-auto' icon={faGraduationCap} />
                                <a className='grid text-left content-center' href='https://www.facebook.com/OLLCValenzuelaOfficial/' target='_blank' rel='noreferrer'>
                                    <p><strong>Senior High School</strong></p>
                                    <p>Our Lady of Lourdes College</p>
                                    <p><strong>STEM</strong></p>
                                    <p>2018-2020</p>
                                </a>
                            </div>
                            <div className='flex flex-wrap gap-x-10 content-center justify-center'>
                                <FontAwesomeIcon className='text-6xl p-5 m-auto' icon={faGraduationCap} />
                                <a className='grid text-left content-center' href='https://www.facebook.com/OLLCValenzuelaOfficial/' target='_blank' rel='noreferrer'>
                                    <p><strong>College</strong></p>
                                    <p>Our Lady of Fatima University</p>
                                    <p><strong>BS Information Technology</strong></p>
                                    <p>2020-Present</p>
                                </a>
                            </div>
                            */}
                        </div>
                    </div>
                </animated.div>
            </div>
            
        </div>
    )
}

export default About