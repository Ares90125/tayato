import React from 'react';
const Card: React.FC = () => (
  <div className="w-full h-full rounded-xl overflow-hidden relative my-4">
    <img  className="w-full h-full" src="./assets/images/carosel.jpg"></img>
    <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col place-content-between text-white">
      <div className="bottom-[87.5%] left-[33%] absolute  w-full  skew-y-[4deg] transform-gpu bg-orange-300 h-[calc(100%)] rounded-[12%] ">
      </div>
      <div className='absolute w-full h-full flex flex-basis py-2'>
        <div className="basis-[75%]  md:text-sm text-base mt-[3px] flex flex-col place-items-end mx-1">
          <div>Laptop World</div>
          <div className='text-blue-500 text-sm'>Boutique</div>
        </div>
        <div className='basis-[15%] h-[8%] w-[5%] rounded-xl overflow-hidden'>
          <img className='w-full h-full' src="./assets/images/mark.png" ></img>
        </div>
        <div className='basis-[5%]'></div>
      </div>
      <div className="absolute bottom-0 w-full skew-y-[4deg]  bg-orange-300  mb-[-20px] p-3 transform-gpu">
        <div className=' bottom-0 ml-[5%] w-[90%] flex flex-col skew-y-[-4deg]  py-2'>
          <div className='text-2xl py-[2%] text-center'>iPhone 11 64Go Grand package cahche</div>
          <div className='h-[1px] bg-black w-full'></div>
          <div className='text-lg flex flex-row items-center'>
            <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-gray-600 w-4 h-4 mt-1 mx-2"  xmlns="http://www.w3.org/2000/svg">
                <path d="M128,256A128,128,0,1,0,256,384,128,128,0,0,0,128,256Zm379-54.86L400.07,18.29a37.26,37.26,0,0,0-64.14,0L229,201.14C214.76,225.52,232.58,256,261.09,256H474.91C503.42,256,521.24,225.52,507,201.14ZM480,288H320a32,32,0,0,0-32,32V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V320A32,32,0,0,0,480,288Z">
                </path>
              </svg>
            </div>
            <div>Hello</div>
          </div>
          <div className='text-lg flex flex-row items-center'>
            <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="text-gray-600 w-4 h-4 myt-1 mx-2" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd">
                </path>
              </svg>
            </div>
            <div >Hello</div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
);

export default Card;
