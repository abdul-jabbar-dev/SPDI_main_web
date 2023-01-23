import React from 'react';

const Events = ({ state }) => {
    return (
        <>

            <div className="bg-gray-100   py-6">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <h3 className='my-6 text-2xl text-slate-7600'>Events</h3>
                    {/*
            <!-- big grid 1 --> */}
                    <div className="flex flex-row flex-wrap">
                        {/*
                <!--Start left cover--> */}
                        <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                            <div className="relative hover-img max-h-98 overflow-hidden">
                                <a href="/">
                                    <img className="max-w-full w-full mx-auto h-auto"
                                        src={state[0].image}
                                        alt={state[0].topic} />
                                </a>
                                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                    <a href="/">
                                        <h2 className="text-3xl font-bold capitalize text-white mb-3">{state[0].topic}
                                        </h2>
                                    </a>
                                    <p className="text-gray-100 hidden sm:inline-block"> {state[0].title}
                                    </p>
                                    <div className="pt-2">
                                        <div className="text-gray-100">
                                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                                            {state[0].place}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*
                <!--Start box news--> */}
                        <div className="flex-shrink max-w-full w-full lg:w-1/2">
                            <div className="box-one flex flex-row flex-wrap">
                                {
                                    state.slice(1, 5).map((data, i) => <div key={i} className="flex-shrink max-w-full w-full sm:w-1/2">
                                        <div className="relative hover-img max-h-48 overflow-hidden">
                                            <a href="/">
                                                <img className="max-w-full w-full mx-auto h-auto"
                                                    src={data.image}
                                                    alt="Image description" />
                                            </a>
                                            <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                                <a href="/">
                                                    <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                                                        {data.topic}</h2>
                                                </a>
                                                <div className="pt-1">
                                                    <div className="text-gray-100">
                                                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>{data.place}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
