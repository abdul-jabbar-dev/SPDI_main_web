
import React from 'react';
import { Helmet } from 'react-helmet';
import { newsData as data } from '../Api/news';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import noImage from '../resource/headerlogo.png'
import clip from '../resource/clip.png'
const CustomHeader = () => {
    return (<Helmet>
        <title>Notifications</title>
    </Helmet>)
}
const News = () => {
    const fileDownload = e => {
        if (e.target.src !== window.location.origin.concat(noImage)) {
            e.target.classList.add('hover:blur-sm')
            e.target.classList.add('newsImageDownload')
            e.target.classList.add('cursor-pointer')
            e._targetInst.sibling.stateNode.classList.remove('hidden')
        }
    }
    const createId = (id, i) => 'cid' + (id)?.toLowerCase()?.replace(/ /g, '')?.slice(0, 3) + i
    const addDefaultSrc = (ev) => {
        ev.target.src = clip
    }

    const getStatus = (s) => {
        if (s) {
            return <span className="inline-flex items-center bg-green-500 rounded-full px-2 text-sm text-white py-[2px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current mr-1 text-white" viewBox="0 0 16 16" width="12" height="16">
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                </svg>
                <small> Open</small>
            </span>
        } else {
            return <span className="inline-flex items-center bg-purple-600 rounded-full px-2 text-sm text-white py-[2px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current mr-1 text-white" viewBox="0 0 16 16" width="12" height="16">
                    <path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path>
                    <path fillRule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>
                </svg>
                <small>Closed</small>
            </span>
        }
    }


    return (
        <>
            <CustomHeader></CustomHeader>
            <Navbar></Navbar>
            <div>
                <div className="bg-gray-100" >
                    <section className='container mx-auto'>
                        <section className="text-gray-600 body-font">
                            {data ? data.map((item, i) =>
                                <div key={i} className="container px-5  mx-auto">
                                    <span className={item.publishDate.split('/')[1] !== data[i - 1]?.publishDate.split('/')[1] ? " date ".concat("text-gray-900 relative inline-block  uppercase font-medium my-3 ", '') : ''}>{item.publishDate.split('/')[1] !== data[i - 1]?.publishDate.split('/')[1] && item.publishDate.split('/')[1] + ' ' + item.publishDate.split('/')[2]}</span>

                                    <div id={createId(item.news, i)} className="p-5 bg-white flex items-center mx-auto border-b my-1 border-gray-200 rounded-lg sm:flex-row flex-col">

                                        <div className="sm:w-36 mb-auto sm:h-32 h-20 w-20 sm:mr-6 inline-flex items-center justify-center flex-shrink-0">
                                            <a href={item.file ? item.file : null} target="_blank" download="YourName resume.pdf" rel="noopener noreferrer" className='relative'>
                                                <img
                                                    className=' relative  '
                                                    onMouseEnter={e => fileDownload(e)}
                                                    onMouseLeave={e => e._targetInst.sibling.stateNode.classList.add('hidden')}
                                                    alt={noImage}
                                                    onError={e => addDefaultSrc(e)}
                                                    src={item.file ? item.file : noImage} />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 hidden w-6 absolute select-none top-[40%] right-[40%] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>

                                            </a>
                                        </div>
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h1 className="text-black text-xl title-font font-bold mb-2">{item.news}</h1>

                                            <p className="leading-relaxed text-base">{item?.description}</p>
                                            <div className="py-4">
                                                <div className=" inline-block mr-2" >
                                                    <div className="flex  pr-2 h-full items-center">
                                                        {getStatus(item.file)}<svg className="text-yellow-500 w-6 h-6 mr-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <circle cx="12" cy="12" r="9" />
                                                            <path d="M9 12l2 2l4 -4" />
                                                        </svg>
                                                        <p className="title-font font-medium">{item.publishDate}</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="md:flex font-bold text-gray-800">
                                                <div className="w-full md:w-1/2 flex space-x-3">
                                                    <div className="w-1/2">
                                                        <h2 className="text-gray-500 text-sm">Publish Time</h2>
                                                        <p className='text-sm font-normal'>{item.publishTime}</p>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <h2 className="text-gray-500 text-sm">Source</h2>
                                                        <p className='text-sm font-normal'>{item.source}</p>
                                                    </div>
                                                </div>
                                                <div className="w-full md:w-1/2 flex space-x-3">
                                                    <div className="w-1/2">
                                                        <h2 className="text-gray-500 text-sm" >Publisher</h2>
                                                        <p className='text-sm font-normal'>{item.publisher}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                                <div role="status" className='flex justify-center mt-6 '>
                                    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            }
                        </section>
                    </section>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default News;