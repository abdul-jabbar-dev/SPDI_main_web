import React from "react";

const SingleSql = ({ whatwedo, i }) => {

  return (
    <li className='flex justify-center '>
      <div className='px-4 text-5xl font-extralight text-gray-700'>
        {i + 1}.
      </div>
      <div>
        <div className='text-xl font-bold text-gray-800'>{whatwedo.title}</div>
        <p className='max-w-xs py-2 text-sm text-gray-900'>
          {whatwedo.description}
        </p>
      </div>
    </li>
  );
};

export default function WhySpdiFeature({ whySpdiData }) {

  return (
    <div className='bg-white p-4 rounded-lg shadow-md py-8 mt-12'>
      <h1 className='mb-8 text-center text-3xl font-bold text-gray-900'>
        This is - what we do :
      </h1>

      <ul className='grid place-content-center sm:grid-cols-2 gap-8'>
        {whySpdiData.map((whatwedo, i) => (
          <SingleSql key={i} whatwedo={whatwedo} i={i}></SingleSql>
        ))}
      </ul>
    </div>
  );
}
