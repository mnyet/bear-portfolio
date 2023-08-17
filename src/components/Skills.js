import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import noimage from '../img/noimage.png'
import { collection } from '@firebase/firestore';
import { db } from '../firebase';
import ProgressBar from "@ramonak/react-progress-bar";
import '../index.css'

function Skills() {
    const [fieldVisible, setFieldVisible] = useState(true)

    const query = collection(db, '/profile/basic-info/skills')
    const [docs, loading, error, snapshot] = useCollectionData(query);

    return (
        <div className='w-full grid lg:grid-cols-2 gap-5 content-center justify-center'>
            {docs?.map((doc, index) => (
                <div className='grid gap-x-10 gap-y-5 lg:grid-cols-2 align-middle py-5' key={ index }>
                    <img className="h-24 w-full object-contain object-top" src={ doc.imglink == "#" ? noimage : doc.icon }></img>
                    <div className='grid content-center lg:text-left w-full'>
                        <p>
                            <strong className='text-xl'>{ doc.skill }</strong>
                            <br></br>
                            <span className='text-sm'>Rating: { doc.level }/10</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Skills