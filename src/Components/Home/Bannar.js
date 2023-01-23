import React from "react"; 

const Bannar = ({ pageData }) => {
  return (
    <>
      <div>
        <section className='bg-white dark:bg-gray-900 z-20'>
          <div className='container px-6 py-10 mx-auto'>
            <div className='lg:flex lg:items-center'>
              <div className='w-full space-y-12 lg:w-1/2 '>
                <div>
                  <h1 className='text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white'>
                    {pageData.headling}
                  </h1>

                  <div className='mt-2'>
                    <span className='inline-block w-40 h-1 rounded-full bg-blue-500'></span>
                    <span className='inline-block w-3 h-1 ml-1 rounded-full bg-blue-500'></span>
                    <span className='inline-block w-1 h-1 ml-1 rounded-full bg-blue-500'></span>
                  </div>
                </div>

                <div className='md:flex md:items-start md:-mx-4'>
                  <div className='mt-4 md:mx-4 md:mt-0'>
                    <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                      {pageData.first_title}
                    </h1>

                    <p className='mt-3 text-gray-500 dark:text-gray-300'>
                      {pageData.first_descreption}
                    </p>
                  </div>
                </div>

                <div className='md:flex md:items-start md:-mx-4'>
                  <div className='mt-4 md:mx-4 md:mt-0'>
                    <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                      {pageData.sec_title}
                    </h1>

                    <p className='mt-3 text-gray-500 dark:text-gray-300'>
                      {pageData.sec_descreption}
                    </p>
                  </div>
                </div>

                <div className='md:flex md:items-start md:-mx-4'>
                  <div className='mt-4 md:mx-4 md:mt-0'>
                    <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                      {pageData.third_title}
                    </h1>

                    <p className='mt-3 text-gray-500 dark:text-gray-300'>
                      {pageData.third_descreption}
                    </p>
                  </div>
                </div>
              </div>

              <div className='hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center'>
                <img
                  className='w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full'
                  src={
                    process.env.REACT_APP_ROOT_URL +
                    "/" +
                    pageData.featureBackground
                  }
                  alt=''
                />
              </div>
            </div>
            <hr className='border-gray-200 my-12 dark:border-gray-700' />

            <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
              {pageData.partners.map((brands, index) => (
                <div
                  key={index}
                  className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1'
                >
                  <img
                    src={process.env.REACT_APP_ROOT_URL + "/" + brands}
                    className='w-20 grayscale  mt-1 text-gray-500 fill-current dark:text-gray-300'
                    alt=''
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bannar;
