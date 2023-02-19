import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../../Api/news';
import { HashLink } from 'react-router-hash-link';
const UpdateNews = () => {
    const [allNewsData, setAllNewsData] = useState([]);
    useEffect(() => {
        fetch(process.env.REACT_APP_ROOT_URL + '/news?sort=-createdAt')
            .then(res => res.json())
            .then(res => setAllNewsData(res.data))
    }, [])
    const createId = (id, i) => 'cid' + (id)?.toLowerCase()?.replace(/ /g, '')?.slice(0, 3) + i
    return (
        <>
            <div className=" bg-gray-100 flex  content-center flex-col rounded-lg ">
                <div className="bg-white  p-4  ">
                    {allNewsData.map((news, i) =>
                        <div key={i} >
                            <span className={news.publishDate.split('/')[1] !== newsData[i - 1]?.publishDate.split('/')[1] ? " date ".concat("text-gray-900 relative inline-block  uppercase font-medium my-3 ", '') : ''}>{news.publishDate.split('/')[1] !== newsData[i - 1]?.publishDate.split('/')[1] && news.publishDate.split('/')[1] + ' ' + news.publishDate.split('/')[2]}</span>
                            <div className="flex mb-4">
                                <div className="w-2/12">
                                    <span className="text-sm text-gray-600 block">{news.publishDate.split('/')[0] + ' ' + news.publishDate.split('/')[1].slice(0, 3)}</span>
                                </div>
                                <div className="w-1/12">
                                    <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                                </div>
                                <div className="w-9/12">
                                    <HashLink to={`news#${createId(news.news, i)}`}><span className="text-sm hover:text-sky-900 font-semibold block">{news.headline}</span></HashLink>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <Link to="/news" className="sticky  text-center cursor-pointer  left-0 right-0 bottom-0 bg-slate-100 border-t-2 hover:text-sky-600 ">See more</Link>
            </div ></>
    );
};

export default UpdateNews;