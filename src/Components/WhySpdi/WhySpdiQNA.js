import React, { useState } from "react";
import { AiOutlineDown } from 'react-icons/ai';

const PerQna = ({ qna }) => (
  <div className='space-y-12 px-2 xl:px-16 mt-12'>
    <div className='mt-4 flex'>
      <div>
        <div className='flex items-center h-16 border-l-4 border-gray-800'>
          <span className='text-4xl text-gray-800 px-4'>Q.</span>
        </div>
        <div className='flex items-center h-16 border-l-4 border-gray-600'>
          <span className='text-4xl text-gray-700 px-4'>A.</span>
        </div>
      </div>
      <div>
        <div className='flex items-center h-16'>
          <span className='text-lg text-gray-800 font-bold'>
            {qna.qns}
          </span>
        </div>
        <div className='flex items-center py-2'>
          <span className='text-gray-900'>{qna.ans}</span>
        </div>
      </div>
    </div>
  </div>
);

const WhySpdiQNA = ({ qnaData, }) => {
  const [count, setCount] = useState(4)
  return (
    <div className='bg-white p-4 rounded-lg shadow-md py-8 mt-12'>
      <h4 className='text-4xl font-bold text-gray-900 tracking-widest uppercase text-center'>
        FAQ
      </h4>
      <p className='text-center text-gray-600 text-sm mt-2'>
        Here are some of the frequently asked questions
      </p>
      {qnaData?.slice(0, count).map((qna, i) => (
        <PerQna key={i} qna={qna} setCount={setCount}></PerQna>
      ))}

      {qnaData?.length + 1 > count && (
        <AiOutlineDown
          className='cursor-pointer bg-gray-800 text-white rounded-full p-2 text-3xl font-bold mx-auto  mt-4'
          onClick={() => qnaData.length + 1 >= count && setCount(count + 3)}
        />
      )}
    </div>
  );
};

export default WhySpdiQNA;
