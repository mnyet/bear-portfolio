import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from '@firebase/firestore';
import { db } from '../firebase'

function Tags({ path }) {
    const query = collection(db, path)
    const [docs, loading, error, snapshot] = useCollectionData(query);

    return (
        <div>
            {loading && "Loading..."}
            {docs?.map((doc, index) => (
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={ index }>#{ doc.name }</span>
            ))}
        </div>
    )
}

export default Tags