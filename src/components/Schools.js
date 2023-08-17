import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from '@firebase/firestore';
import { db } from '../firebase'

function Schools() {
    const [fieldVisible, setFieldVisible] = useState(true)

    const query = collection(db, '/profile/educational status/schools')
    const [docs, loading, error, snapshot] = useCollectionData(query);

    return (
        <div className='w-full grid lg:grid-cols-2 gap-x-20 gap-y-20 content-center justify-center'>
            {docs?.map((doc, index) => (
                <div className='flex flex-col lg:flex-row' key={ index }>
                    <FontAwesomeIcon className='text-6xl p-5 m-auto' icon={faGraduationCap} />
                    <a className='grid text-center lg:content-start lg:text-left' href={ doc.schoollink } target='_blank' rel='noreferrer'>
                        <p className='text-lg'><strong>{ doc.level }</strong></p>
                        <p className='text-sm'>{ doc.school }</p>
                        {doc.field !== '#' && (
                        <p className='text-xs'><strong>{fieldVisible && doc.field}</strong></p>)}
                        <p className='text-xs'>{ doc.year }</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Schools