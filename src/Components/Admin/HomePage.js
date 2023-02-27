import React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../../globalComponents/Loading';
import { RxUpdate } from 'react-icons/rx'
const HomePage = () => {

    const [data, setData] = useState([])
    const [background, setBackground] = useState('')
    const [heading, setHeading] = useState(
        {
            headingBackground: '',
            title: '',
            descreption: ''
        }
    )
    const [topFeature, setTopFeature] = useState(
        {
            first_descreption: '',
            first_title: '',
            sec_title: '',
            sec_descreption: '',
            third_title: '',
            third_descreption: '',
        }
    )
    useEffect(() => {
        // fetch(process.env.REACT_APP_ROOT_URL + "/dynamicpage")
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setData(res);
        //         setHeading({
        //             headingBackground: res.find(obj => obj.role === 'heading').headingBackground,
        //             title: res.find(obj => obj.role === 'heading').title,
        //             descreption: res.find(obj => obj.role === 'heading').descreption
        //         })

        //     });
        fetch(process.env.REACT_APP_ROOT_URL + "/dynamicpage")
            .then((res) => res.json())
            .then((res) => {
                setHeading({
                    headingBackground: res.find(obj => obj.role === 'heading').headingBackground,
                    title: res.find(obj => obj.role === 'heading').title,
                    descreption: res.find(obj => obj.role === 'heading').descreption
                })
                setTopFeature({
                    first_title: res.find(obj => obj.role === 'topfeature').first_title,
                    first_descreption: res.find(obj => obj.role === 'topfeature').first_descreption,
                    sec_title: res.find(obj => obj.role === 'topfeature').sec_title,
                    sec_descreption: res.find(obj => obj.role === 'topfeature').sec_descreption,
                    third_title: res.find(obj => obj.role === 'topfeature').third_title,
                    third_descreption: res.find(obj => obj.role === 'topfeature').third_descreption,

                })
            });
    }, []);

    const postConfig = async (elementId, postedObject, path) => {
        let data = new FormData(document.getElementById(elementId))
        for (const property in postedObject) {
            data.append(property, postedObject[property])
        }
        const options = {
            mode: 'no-cors',
            method: "POST",
            body: data,
        }
        const fec = await fetch(`${process.env.REACT_APP_ROOT_URL}/dynamicpage/${path}`, options)
        const response = await fec.json()
        return response
    }

    const headingSubmitEvent = (e) => {
        e.preventDefault()
        const confrm = window.confirm("Are you sure? ")
        if (confrm) {
            if (e.target.id === 'headline_form') {
                postConfig('headline_form', heading, 'heading').then(res => console.log(res))

            } else if (e.target.id === 'topfeature_form') {
                postConfig('headline_form', topFeature, 'topfeature').then(res => console.log(res))

            }
        }
    }
    // const topFeatureSubmitEvent = (e) => {
    //     e.preventDefault()
    //     // post a form data 

    //     // const confrm = window.confirm("Are you sure? ")
    //     // if (confrm) {
    //     //     let posttedData = new FormData(document.getElementById('headline_form'))
    //     //     posttedData.append('headingBackground', heading.headingBackground)
    //     //     posttedData.append('title', heading.title)
    //     //     posttedData.append('descreption', heading.descreption)

    //     //     const options = {
    //     //         mode: 'no-cors',
    //     //         method: "POST",
    //     //         body: posttedData,
    //     //     }

    //     //     fetch(`${process.env.REACT_APP_ROOT_URL}/dynamicpage/heading`, options)
    //     //         .then(res => res.json())
    //     //         .then(res => console.info(res));
    //     // }
    // }

    return (
        <div>
            <div className=" ">
                <div className=" px-6">
                    {
                        heading ? <form onSubmit={e => headingSubmitEvent(e)} className="my-10 " id="headline_form">
                            <h3 className="text-gray-700">Heading</h3>
                            <div className="my-5">
                                <label className="block">
                                    <div className="flex items-center justify-center w-full">

                                        <label htmlFor="headingBackground" className="flex relative overflow-hidden flex-col items-center justify-center w-full h-[12rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">

                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">

                                                <svg aria-hidden="true" className="w-10 h-10  z-40  mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>

                                                <p className="mb-2 text-sm  z-40  text-gray-500 dark:text-gray-400"><span className="font-bold">Click to upload</span></p>

                                                <img className='absolute top-auto left-auto bottom-auto right-auto w-full ' src={background || process.env.REACT_APP_ROOT_URL + '/' + heading.headingBackground} alt="" />

                                                <p className="text-xs text-gray-500 dark:text-gray-400  z-40 ">SVG, PNG, JPG </p>

                                            </div>
                                            <input onChange={(e) => {
                                                setHeading(pre => { return { ...pre, headingBackground: e.target.files[0] } })
                                                setBackground(window.URL.createObjectURL(e.target.files[0]))
                                            }}
                                                id="headingBackground" name='' type="file" className="hidden" />
                                        </label>
                                    </div>

                                </label>
                            </div>

                            <div className="flex flex-col space-y-5">
                                <label htmlFor="heading_title">
                                    <p className="font-medium text-slate-700 pb-2">Title</p>
                                    <input onChange={e => setHeading(pre => { return { ...pre, title: e.target.value } })} defaultValue={heading?.title} id="heading_title" name="title" type="title" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Heading Title"></input>
                                </label>
                                <label htmlFor="heading_descreption">
                                    <p className="font-medium text-slate-700 pb-2">Heading description</p>
                                    <input onChange={e => setHeading(pre => { return { ...pre, descreption: e.target.value } })} defaultValue={heading?.descreption} id="heading_descreption" name="descreption" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Heading descreption"></input>
                                </label>
                                <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                    <RxUpdate />

                                    <span>Update</span>
                                </button>

                            </div>
                        </form> : <Loading></Loading>
                    }
                </div>

                <div className=" px-6">
                    {
                        topFeature ? <form onSubmit={e => headingSubmitEvent(e)} id="topfeature_form">
                            <h3 className="text-gray-700">Top Feature </h3>
                            <div className="flex flex-col space-y-5">

                                <div className='grid md:grid-cols-3 gap-y-2 grid-cols-1 sm:gap-x-6 p-4 py-12 sm:text-center'>

                                    <div className='cols rounded-md shadow-2xl w-full bg-sky-700 text-zinc-50 p-4  '>
                                        <label htmlFor='first_title'>
                                            <p className="font-medium text-gray-200 pb-2">First Title</p>
                                            <input onChange={e => setTopFeature(pre => { return { ...pre, first_title: e.target.value } })} defaultValue={topFeature.first_title} className='w-full text-gray-900 py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' id='first_title' name='first_title' type="text" />
                                        </label>
                                        <label htmlFor='first_descreption'>
                                            <p className="font-medium text-gray-200 pb-2">First Description</p>
                                            <textarea onChange={e => setTopFeature(pre => { return { ...pre, first_descreption: e.target.value } })} defaultValue={topFeature.first_descreption} className='w-full text-gray-900 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' id='first_descreption' name='first_descreption' type="text"></textarea>
                                        </label>
                                    </div>

                                    <div className='cols rounded-md shadow-2xl w-full bg-red-500 text-zinc-50 p-4  '>
                                        <label htmlFor='sec_title'>
                                            <p className="font-medium pb-2">Second Title</p>
                                            <input onChange={e => setTopFeature(pre => { return { ...pre, sec_title: e.target.value } })} defaultValue={topFeature.sec_title} className='w-full text-gray-900 py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' id='sec_title' name='sec_title' type="text" />
                                        </label>
                                        <label htmlFor='sec_descreption'>
                                            <p className="font-medium pb-2">Second Description</p>
                                            <textarea onChange={e => setTopFeature(pre => { return { ...pre, sec_descreption: e.target.value } })} defaultValue={topFeature.sec_descreption} className='w-full text-gray-900 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' id='sec_descreption' name='sec_descreption' type="text" ></textarea>
                                        </label>
                                    </div>

                                    <div className='cols rounded-md shadow-2xl w-full bg-sky-700 text-zinc-50 p-4  '>
                                        <label htmlFor='third_title'>
                                            <p className="font-medium pb-2">Third Title</p>
                                            <input onChange={e => setTopFeature(pre => { return { ...pre, third_title: e.target.value } })} defaultValue={topFeature.third_title} className='w-full text-gray-900 py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' id='third_title' name='third_title' type="text" />
                                        </label>
                                        <label htmlFor='third_descreption'>
                                            <p className="font-medium pb-2">Third Description</p>
                                            <textarea onChange={e => setTopFeature(pre => { return { ...pre, third_descreption: e.target.value } })} defaultValue={topFeature.third_descreption} className='w-full text-gray-900 resize-y py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' id='third_descreption' name='third_descreption' type="text" ></textarea>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                        <RxUpdate />
                                        <span>Update</span>
                                    </button>
                                </div>

                            </div>
                        </form> : <Loading></Loading>
                    }
                </div>

            </div >

        </div >
    );
};

export default HomePage;
