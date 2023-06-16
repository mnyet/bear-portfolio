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
        <div className='grid gap-10 content-center justify-center lg:grid-cols-3 lg:gap-5'>
            {docs?.map((doc, index) => (
                <div className='flex' key={ index }>
                    <FontAwesomeIcon className='text-6xl p-5 m-auto' icon={faGraduationCap} />
                    <a className='grid text-left content-center' href={ doc.schoollink } target='_blank' rel='noreferrer'>
                        <p><strong>{ doc.level }</strong></p>
                        <p>{ doc.school }</p>
                        {doc.field !== '#' && (
                        <p><strong>{fieldVisible && doc.field}</strong></p>)}
                        <p>{ doc.year }</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Schools