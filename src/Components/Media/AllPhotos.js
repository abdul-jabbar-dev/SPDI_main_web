import React from "react";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
function AllPhotos({ mediaApi }) {
  const [view, setView] = useState(4);

  return (
    <>
      <div className=' bg-indigo-50'>
        <section className='min-h-screen body-font text-gray-600 '>
          <div className='container mx-auto px-5 py-10'>
            <h1 className=' font-semibold mb-6 text-2xl text-center uppercase'>
              All Events
            </h1>
            <div className='-m-4 flex flex-wrap'>
              {mediaApi.slice(0, view).map((e, i) => (
                <div key={i} className='w-full p-4 md:w-1/2 lg:w-1/4'>
                  <a
                    href='##'
                    className='relative block h-48 overflow-hidden rounded'
                  >
                    <img
                      alt='ecommerce'
                      className='block h-full w-full object-cover object-center cursor-pointer'
                      src={e.image}
                    />
                  </a>
                  <div className='mt-4'>
                    <div className='flex items-center justify-between'>
                      <h3 className='title-font mb-1 text-md text-gray-500'>
                        {e.topic}
                      </h3>
                      <p className='title-font mb-1 text-xs tracking-widest text-gray-500'>
                        {e.date}
                      </p>
                    </div>
                    <h2 className='title-font text-lg font-medium text-gray-900'>
                      {e.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>

            <AiOutlineDown
              className={` ${
                mediaApi.length + 1 <= view
                  ? "hidden"
                  : "cursor-pointer bg-gray-800 text-white rounded-full p-2 text-3xl font-bold mx-auto  mt-4"
              }}`}
              onClick={() => mediaApi.length + 1 >= view && setView(view + 4)}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default AllPhotos;
