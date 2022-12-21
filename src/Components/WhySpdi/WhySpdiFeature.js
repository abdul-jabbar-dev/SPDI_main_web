import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'; 
import { whatwedo as whatwedoApi } from './../../Api/whatwedo';




const SingleSql = ({whatwedo}) => {
    return (
        <li className="flex">
            <div className="px-4 text-5xl font-extralight text-gray-700">{whatwedo._id+1}.</div>
            <div>
                <div className="text-xl font-bold text-gray-800">{whatwedo.title}</div>
                <p className="max-w-xs py-2 text-sm text-gray-900">{whatwedo.discreption}</p>
            </div>
        </li>
    )
}

export default function WhySpdiFeature() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(whatwedoApi)
    }, [])
    console.log(data)
    return (
        <div className="bg-white p-4 rounded-lg shadow-md py-8 mt-12">
            <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">This is - what we do :</h1>

            <ul className="grid place-content-center sm:grid-cols-2 gap-8">
                {
                    data.map(whatwedo => <SingleSql whatwedo={whatwedo}></SingleSql>)
                }
            </ul>
        </div>
    )
}
