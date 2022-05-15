import React, { useState } from 'react';
import { StoreContext } from '../../../utils/store';
import Card from '../../card';
import Carousel from '../../carosel';
const data: Array<any> = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},

]
const HomePage: React.FC = () => {
  const { search } = React.useContext(StoreContext);
  const [ iframeVisible, setIframeVisible ] = React.useState(true);
  return (
    <div className='pt-16'>
      <div className='mt-10 md:mt-12 mx-auto pt-1 h-20 md:h-20'>
        <svg className="block mx-auto max-h-28 transition-all duration-300 w-[210px] h-[75px]" viewBox="0 0 185.53 45.384"><g transform="translate(-11.648 -13.2)">
          <path d="M11.945,30.143c.119.712,4.05.254,4.219.237h.356c.932,0,1.406.407,1.406,1.22,0,1.22-.051,3.05-.136,5.507-.085,2.44-.136,4.27-.136,5.49q0,6.125,8,6.117A13.028,13.028,0,0,0,32.7,46.748s.8-.559.915-.627c.407-.3.373-1.355.373-1.881s.051-1.355-.017-2.389a13.786,13.786,0,0,1,0-1.728c0-.407-.186-.61-.576-.61a9.691,9.691,0,0,0-1.813.322,5.592,5.592,0,0,1-1.339.152c-1.457,0-2-.237-2.508-1.034a6.806,6.806,0,0,1-.525-3.219c0-.424-.017-1.084-.034-1.965V31.8c0-.813.136-1.2.424-1.2l2.084-.22c.373,0,.983.017,1.847.034.864.034,1.05.051,1.423.051.525,0,.695-.2.8-.576a4.757,4.757,0,0,0,.1-1.576c0-.847.119-1.728.119-2.169,0-.424-.051-.847-.119-1.694a8.348,8.348,0,0,1-.051-.864c0-1.034-.576-.966-.881-1.017a12.911,12.911,0,0,0-2.084-.068,19.776,19.776,0,0,1-2.931-.339c-.525-.085-.8-.457-.8-1.355,0-.746.068-1.881.186-3.372s.169-2.609.169-3.355c0-.288-.22-.441-.695-.474-1.965-.1-3.016-.085-4.016-.152-.407-.034-1.355-.068-2.44-.136-.949-.068-1.627-.119-2.135-.119q-.61,0-.61,3.2c0-.119.034.169.119,2.542a11,11,0,0,1,0,2.321A1.484,1.484,0,0,1,16.5,22.4c-1.186.034-4.168.136-4.439.678a17.254,17.254,0,0,0-.119,7.065" transform="translate(0 0)" fill="#e64b41" />
          <path d="M542.174,79.009c0,1.322.068,3.287.237,5.9.152,2.609.237,4.575.237,5.879,0,.695-.3,1.457-.9,1.508-2.135.152-4.575.237-7.32.237-.339,0-.339-.949-.661-1.881-.237-.729-.424-.644-.424-.644a.617.617,0,0,0-.508.169,7.921,7.921,0,0,1-6.184,2.321,10.4,10.4,0,0,1-8.336-3.965,13.335,13.335,0,0,1-3.118-8.878,13.912,13.912,0,0,1,3.219-9.59c2.236-2.508,5.3-3.728,9.183-3.761a14.506,14.506,0,0,1,6.388,1.118s.593.288.729-.2c.2-.83.135-.932.407-.949a25.228,25.228,0,0,1,3.338-.051s3.8.051,4.27.169c.271.068.39.237.39.407a2.759,2.759,0,0,1-.085.542,74.038,74.038,0,0,0-.864,11.674m-8.3.152a5.028,5.028,0,0,0-1.372-3.626,5.222,5.222,0,0,0-7.184-.017,5.014,5.014,0,0,0-1.372,3.643,4.922,4.922,0,0,0,1.44,3.575,4.689,4.689,0,0,0,3.507,1.491,4.825,4.825,0,0,0,3.592-1.423,5.026,5.026,0,0,0,1.389-3.643" transform="translate(-418.232 -44.02)" fill="#e64b41" />
          <path d="M850.774,79.009c0,1.322.068,3.287.237,5.9.152,2.609.237,4.575.237,5.879,0,.695-.3,1.457-.9,1.508-2.135.152-4.575.237-7.32.237-.339,0-.339-.949-.661-1.881-.237-.729-.424-.644-.424-.644a.617.617,0,0,0-.508.169,7.921,7.921,0,0,1-6.184,2.321,10.4,10.4,0,0,1-8.336-3.965,13.335,13.335,0,0,1-3.118-8.878,13.912,13.912,0,0,1,3.219-9.59c2.236-2.508,5.3-3.728,9.183-3.761a14.505,14.505,0,0,1,6.388,1.118s.593.288.729-.2c.2-.83.135-.932.407-.949a25.229,25.229,0,0,1,3.338-.051s3.8.051,4.27.169c.271.068.39.237.39.407a2.765,2.765,0,0,1-.085.542,76.1,76.1,0,0,0-.864,11.674m-8.3.152a5.028,5.028,0,0,0-1.372-3.626,5.222,5.222,0,0,0-7.184-.017,5.014,5.014,0,0,0-1.372,3.643,4.923,4.923,0,0,0,1.44,3.575,4.689,4.689,0,0,0,3.507,1.491,4.825,4.825,0,0,0,3.592-1.423,4.957,4.957,0,0,0,1.389-3.643" transform="translate(-674.545 -44.02)" fill="#e64b41" />
          <path d="M186.774,79.009c0,1.322.068,3.287.237,5.9.152,2.609.237,4.575.237,5.879,0,.695-.3,1.457-.9,1.508-2.135.152-4.575.237-7.32.237-.322,0-.339-.949-.661-1.881-.237-.729-.424-.644-.424-.644a.617.617,0,0,0-.508.169,7.921,7.921,0,0,1-6.184,2.321,10.4,10.4,0,0,1-8.336-3.965,13.334,13.334,0,0,1-3.118-8.878,13.994,13.994,0,0,1,3.219-9.59c2.237-2.508,5.3-3.728,9.183-3.761a14.544,14.544,0,0,1,6.388,1.118s.593.288.729-.2c.2-.83.136-.932.407-.949a25.229,25.229,0,0,1,3.338-.051s3.8.051,4.27.169c.271.068.39.237.39.407,0,.068-.034.254-.085.542a74.034,74.034,0,0,0-.864,11.674m-8.319.152a5.028,5.028,0,0,0-1.372-3.626,5.222,5.222,0,0,0-7.184-.017,5.014,5.014,0,0,0-1.372,3.643,4.922,4.922,0,0,0,1.44,3.575,4.689,4.689,0,0,0,3.507,1.491,4.825,4.825,0,0,0,3.592-1.423,4.957,4.957,0,0,0,1.389-3.643" transform="translate(-123.05 -44.02)" fill="#e64b41" />
          <path d="M366.109,73.267a18.644,18.644,0,0,1-1.084,6.472s-.763,3.1-4.88,8.946c-5.9,8.37-9.641,11.708-9.641,11.708a21.3,21.3,0,0,1-7.235,3.9c-.712.186-.644-.1-.9-.271-.61-.407-2.287-3.626-2.626-4.592A15.616,15.616,0,0,1,339,97.7c-.186-.644.085-.966.373-1.067,8.4-3.168,7.743-6.506,7.743-6.506-.034-.729-.779-1.9-3.118-5.134-2.423-3.321-3.372-4.778-3.8-6.286a15.362,15.362,0,0,1-.407-5.337c.051-.61.017-1.542.051-2.8.034-1.237.051-2.186.051-2.8,0-.441.288-.678.847-.678.881,0,2.2.034,3.982.085s3.118.085,3.982.085c.356,0,.542.271.542.8,0,.474-.017,1.2-.085,2.186-.051.966-.085,1.694-.085,2.186,0,2.169.034,3.626.1,4.405a10.806,10.806,0,0,0,1.542,3.355c1.034,1.694,2.186,2.355,2.643,2.355.407,0,1.067-.83,2.016-2.525A8.564,8.564,0,0,0,356.4,77a16.339,16.339,0,0,0,.254-4.931c0-.457-.051-1.169-.136-2.118s-.136-1.66-.136-2.135c0-.322.186-.491.542-.491.881,0,2.186-.034,3.931-.1s3.05-.1,3.931-.1a.9.9,0,0,1,.9.678,20.007,20.007,0,0,1,.424,5.473" transform="translate(-271.835 -44.767)" fill="#e64b41" />
          <path d="M719.775,74.325c0,.678-.373,1.034-1.1,1.034-.322,0-.813-.017-1.423-.068-.627-.034-1.491-.068-1.813-.068-1.423,0-2.05,1.152-2.525,1.677a7.766,7.766,0,0,0-.779,3.745c0,.762.017,1.9.034,3.423s.034,2.677.034,3.423c0,.508.034,1.254.1,2.27q.1,1.5.1,2.237c0,.424-.288.661-.847.712-.813.068-2.084.1-3.8.1q-2.44,0-3.914-.152c-.576-.068-.847-.356-.847-.864,0-1.389.017-3.49.034-6.286.017-2.779.017-4.88.017-6.269a51.864,51.864,0,0,0-1.1-11.555,1.887,1.887,0,0,1-.051-.39.525.525,0,0,1,.39-.525c.949-.1,4.151.017,4.151.017,1.9-.017,4.117-.017,4.2-.017.3,0,.61-.085.966.966a.78.78,0,0,0,.762.491,7.5,7.5,0,0,0,2.406-.525c1.711-.61,2.067-1,3.643-1,.966,0,1.593.2,1.593.627a21.235,21.235,0,0,1-.153,2.152c-.1,1-.169,1.508-.186,1.949,0,.508.017-.017.034.813.051,1.067.068,1.745.068,2.084" transform="translate(-573.299 -44.435)" fill="#e64b41" />
        </g></svg>
      </div>
      <div className='mx-10 md:mx-4 mt-2 md:mt-6'>
        <div className='w-full md:max-w-3xl mx-auto'>
          <div className="relative flex items-center self-center w-full p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <div className="absolute search-icon left-10">
              <svg className="fill-current pointer-events-none text-gray-400 w-6 h-6" viewBox="0 0 16 16">
                <path d="M14.56 12.995L11.3 9.32749C11.9492 8.0213 12.1565 6.49496 11.8835 5.03026C11.6106 3.56557 10.8759 2.26141 9.81495 1.35855C8.75405 0.455692 7.43863 0.0150962 6.11153 0.118102C4.78443 0.221108 3.53526 0.860761 2.59462 1.91897C1.65399 2.97719 1.08541 4.38251 0.993848 5.87549C0.902287 7.36848 1.29393 8.84833 2.09647 10.0418C2.89901 11.2354 4.05826 12.0619 5.36021 12.369C6.66217 12.6761 8.01891 12.4429 9.17997 11.7125L12.44 15.38C12.5773 15.5458 12.7429 15.6788 12.9269 15.771C13.1109 15.8632 13.3095 15.9128 13.5109 15.9168C13.7123 15.9208 13.9124 15.8791 14.0992 15.7943C14.2859 15.7094 14.4556 15.5831 14.5981 15.4228C14.7405 15.2626 14.8528 15.0717 14.9282 14.8616C15.0037 14.6515 15.0407 14.4264 15.0372 14.1998C15.0336 13.9732 14.9895 13.7498 14.9075 13.5428C14.8256 13.3358 14.7073 13.1495 14.56 12.995ZM2.99997 6.31249C2.99997 5.53373 3.20525 4.77245 3.58983 4.12494C3.97442 3.47742 4.52104 2.97274 5.16058 2.67472C5.80012 2.3767 6.50386 2.29872 7.18279 2.45065C7.86172 2.60258 8.48536 2.97759 8.97485 3.52826C9.46433 4.07893 9.79767 4.78053 9.93272 5.54433C10.0678 6.30813 9.99846 7.09983 9.73355 7.81931C9.46865 8.53879 9.02004 9.15375 8.44447 9.58641C7.8689 10.0191 7.19221 10.25 6.49997 10.25C5.57172 10.25 4.68148 9.83515 4.0251 9.09673C3.36872 8.3583 2.99997 7.35678 2.99997 6.31249Z" />
              </svg>
            </div>

            {search[0] != '' && <button className="flex items-center absolute right-7 bg-red-500 hover:bg-red-600 px-5 py-[12px] rounded-full">
              <svg className="fill-current pointer-events-none text-white w-5 h-5" viewBox="0 0 20 20" ><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg>
            </button>}
            <input type="search" className="w-full py-4 pl-20 pr-4 text-base font-bold font-arabic border border-gray appearance-none rounded-full shadow-sm md:shadow-md placeholder-gray-400 focus:bg-white focus:outline-none focus:border-red-500 focus:text-gray-900 focus:placeholder-red-300 focus:shadow-outline-blue" placeholder="Search on tayara"
              value={search[0]}
              onChange={(e) => search[1](e.target.value)} />
          </div>
        </div>
      </div>
      <div className='mt-20 md:mt-8'>
        <ul className='grid grid-cols-4 gap-3 md:flex justify-between mx-auto max-w-xs md:max-w-2xl px-2'>
          <li>
            <div className='flex flex-col items-center gap-y-2 group cursor-pointer'>
              <div className='rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center gap-1 md:gap-2 w-full bg-sky-50 group-hover:bg-red-100 text-red-400 group-hover:text-red-500'>
                <svg className="fill-current pointer-events-none text-red-400 w-7 h-7" viewBox="0 0 512 512">
                  <path d="M488 224c-3-5-32.61-17.79-32.61-17.79 5.15-2.66 8.67-3.21 8.67-14.21 0-12-.06-16-8.06-16h-27.14c-.11-.24-.23-.49-.34-.74-17.52-38.26-19.87-47.93-46-60.95C347.47 96.88 281.76 96 256 96s-91.47.88-126.49 18.31c-26.16 13-25.51 19.69-46 60.95 0 .11-.21.4-.4.74H55.94c-7.94 0-8 4-8 16 0 11 3.52 11.55 8.67 14.21C56.61 206.21 28 220 24 224s-8 32-8 80 4 96 4 96h11.94c0 14 2.06 16 8.06 16h80c6 0 8-2 8-16h256c0 14 2 16 8 16h82c4 0 6-3 6-16h12s4-49 4-96-5-75-8-80zm-362.74 44.94A516.94 516.94 0 0170.42 272c-20.42 0-21.12 1.31-22.56-11.44a72.16 72.16 0 01.51-17.51L49 240h3c12 0 23.27.51 44.55 6.78a98 98 0 0130.09 15.06C131 265 132 268 132 268zm247.16 72L368 352H144s.39-.61-5-11.18c-4-7.82 1-12.82 8.91-15.66C163.23 319.64 208 304 256 304s93.66 13.48 108.5 21.16C370 328 376.83 330 372.42 341zm-257-136.53a96.23 96.23 0 01-9.7.07c2.61-4.64 4.06-9.81 6.61-15.21 8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35 2.57 5.45 4 10.66 6.68 15.33-2 .11-4.3 0-9.79-.19zm347.72 56.11C461 273 463 272 441.58 272a516.94 516.94 0 01-54.84-3.06c-2.85-.51-3.66-5.32-1.38-7.1a93.84 93.84 0 0130.09-15.06c21.28-6.27 33.26-7.11 45.09-6.69a3.22 3.22 0 013.09 3 70.18 70.18 0 01-.49 17.47z"></path>
                </svg>
                <div className='w-full text-3xs group-hover:text-gray md:hidden text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>Vehicles</div>
              </div>
              <span className='relative text-2xs text-gray-500 font-light group-hover:text-gray-700 hidden md:block'>
                <span className='absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis'>Vehicles</span>
              </span>
            </div>
          </li>
          <li>
            <div className='flex flex-col items-center gap-y-2 group cursor-pointer'>
              <div className='rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center gap-1 md:gap-2 w-full bg-sky-50 group-hover:bg-red-100 text-red-400 group-hover:text-red-500'>
                <svg className="fill-current pointer-events-none text-red-400 w-7 h-7" viewBox="0 0 24 24"><g>
                  <path fill="none" d="M0 0h24v24H0z"></path><path d="M12 19h2V6l6.394 2.74a1 1 0 0 1 .606.92V19h2v2H1v-2h2V5.65a1 1 0 0 1 .594-.914l7.703-3.424A.5.5 0 0 1 12 1.77V19z"></path>
                </g></svg>
                <div className='w-full text-3xs group-hover:text-gray md:hidden text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>Real estate</div>
              </div>
              <span className='relative text-2xs text-gray-500 font-light group-hover:text-gray-700 hidden md:block'>
                <span className='absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis'>Real estate</span>
              </span>
            </div>
          </li>
          <li>
            <div className='flex flex-col items-center gap-y-2 group cursor-pointer'>
              <div className='rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center gap-1 md:gap-2 w-full bg-sky-50 group-hover:bg-red-100 text-red-400 group-hover:text-red-500'>
                <svg className="fill-current pointer-events-none text-red-400 w-7 h-7" viewBox="0 0 512 512">
                  <path d="M336 0H176a64 64 0 00-64 64v384a64 64 0 0064 64h160a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H176a32 32 0 01-32-32V64a32 32 0 0132-32h11.35a7.94 7.94 0 017.3 4.75A32 32 0 00224 56h64a32 32 0 0029.35-19.25 7.94 7.94 0 017.3-4.75H336a32 32 0 0132 32z"></path>
                  <path d="M336 48a11.88 11.88 0 00-9.53 4.69A48 48 0 01288 72h-64a48 48 0 01-38.47-19.31A11.88 11.88 0 00176 48a16 16 0 00-16 16v384a16 16 0 0016 16h160a16 16 0 0016-16V64a16 16 0 00-16-16z"></path>
                  <path d="M336 0H176a64 64 0 00-64 64v384a64 64 0 0064 64h160a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H176a32 32 0 01-32-32V64a32 32 0 0132-32h11.35a7.94 7.94 0 017.3 4.75A32 32 0 00224 56h64a32 32 0 0029.35-19.25 7.94 7.94 0 017.3-4.75H336a32 32 0 0132 32z"></path>
                </svg>
                <div className='w-full text-3xs group-hover:text-gray md:hidden text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>Multimedia</div>
              </div>
              <span className='relative text-2xs text-gray-500 font-light group-hover:text-gray-700 hidden md:block'>
                <span className='absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis'>Multimedia</span>
              </span>
            </div>
          </li>
          <li>
            <div className='flex flex-col items-center gap-y-2 group cursor-pointer'>
              <div className='rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center gap-1 md:gap-2 w-full bg-sky-50 group-hover:bg-red-100 text-red-400 group-hover:text-red-500'>
                <svg className="fill-current pointer-events-none text-red-400 w-7 h-7" viewBox="0 0 24 24">
                  <path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z"></path>
                </svg>
                <div className='w-full text-3xs group-hover:text-gray md:hidden text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>Home & garden</div>
              </div>
              <span className='relative text-2xs text-gray-500 font-light group-hover:text-gray-700 hidden md:block'>
                <span className='absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis'>Home & garden</span>
              </span>
            </div>
          </li>
          <li>
            <div className='flex flex-col items-center gap-y-2 group cursor-pointer'>
              <div className='rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center gap-1 md:gap-2 w-full bg-sky-50 group-hover:bg-red-100 text-red-400 group-hover:text-red-500'>
                <svg className="fill-current pointer-events-none text-red-400 w-7 h-7" viewBox="0 0 512 512">
                  <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm143 304h-45.22a8 8 0 01-6.91-4l-16.14-27.68a8 8 0 01-.86-6l14.86-59.92a8 8 0 014.65-5.45l28.1-11.9a8 8 0 018.34 1.3l41.63 35.82a8 8 0 012.69 7.26 174.75 174.75 0 01-24.28 66.68A8 8 0 01399 352zM134.52 237.13l28.1 11.9a8 8 0 014.65 5.45l14.86 59.92a8 8 0 01-.86 6L165.13 348a8 8 0 01-6.91 4H113a8 8 0 01-6.82-3.81 174.75 174.75 0 01-24.28-66.68 8 8 0 012.69-7.26l41.63-35.82a8 8 0 018.3-1.3zm256.94-87.24l-18.07 51.38A8 8 0 01369 206l-29.58 12.53a8 8 0 01-8.26-1.24L274.9 170.1a8 8 0 01-2.9-6.1v-33.58a8 8 0 013.56-6.65l42.83-28.54a8 8 0 017.66-.67A176.92 176.92 0 01390 142a8 8 0 011.46 7.89zM193.6 95.23l42.84 28.54a8 8 0 013.56 6.65V164a8 8 0 01-2.86 6.13l-56.26 47.19a8 8 0 01-8.26 1.24L143 206a8 8 0 01-4.43-4.72L120.5 149.9a8 8 0 011.5-7.9 176.92 176.92 0 0164-47.48 8 8 0 017.6.71zm17.31 327.46L191.18 373a8 8 0 01.52-7l15.17-26a8 8 0 016.91-4h84.44a8 8 0 016.91 4l15.18 26a8 8 0 01.53 7l-19.59 49.67a8 8 0 01-5.69 4.87 176.58 176.58 0 01-79 0 8 8 0 01-5.65-4.85z"></path>
                </svg>
                <div className='w-full text-3xs group-hover:text-gray md:hidden text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>Hobbies</div>
              </div>
              <span className='relative text-2xs text-gray-500 font-light group-hover:text-gray-700 hidden md:block'>
                <span className='absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis'>Hobbies</span>
              </span>
            </div>
          </li>
          <li>
            <div className='flex flex-col items-center gap-y-2 group cursor-pointer'>
              <div className='rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center gap-1 md:gap-2 w-full bg-sky-50 group-hover:bg-red-100 text-red-400 group-hover:text-red-500'>
                <svg className="fill-current pointer-events-none text-red-400 w-7 h-7" viewBox="0 0 512 512">
                  <path d="M256 96c33.08 0 60.71-25.78 64-58 .3-3-3-6-6-6a13 13 0 00-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.21 16.21 0 00-5.3-.9h-.06a5.69 5.69 0 00-5.38 6c3.35 32.16 31 58 64 58z"></path><path d="M485.29 89.9L356 44.64a4 4 0 00-5.27 3.16 96 96 0 01-189.38 0 4 4 0 00-5.35-3.16L26.71 89.9A16 16 0 0016.28 108l16.63 88a16 16 0 0013.92 12.9l48.88 5.52a8 8 0 017.1 8.19l-7.33 240.9a16 16 0 009.1 14.94A17.49 17.49 0 00112 480h288a17.49 17.49 0 007.42-1.55 16 16 0 009.1-14.94l-7.33-240.9a8 8 0 017.1-8.19l48.88-5.52a16 16 0 0013.92-12.9l16.63-88a16 16 0 00-10.43-18.1z"></path>
                </svg>
                <div className='w-full text-3xs group-hover:text-gray md:hidden text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>Clothing</div>
              </div>
              <span className='relative text-2xs text-gray-500 font-light group-hover:text-gray-700 hidden md:block'>
                <span className='absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis'>Clothing</span>
              </span>
            </div>
          </li>
          <li>
            <div className='flex flex-col items-center gap-y-2 group cursor-pointer'>
              <div className='rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center gap-1 md:gap-2 w-full bg-sky-50 group-hover:bg-red-100 text-red-400 group-hover:text-red-500'>
                <svg className="fill-current pointer-events-none text-red-400 w-7 h-7" viewBox="0 0 512 512">
                  <path fill="none" d="M336 80H176a16 16 0 00-16 16v16h192V96a16 16 0 00-16-16z"></path>
                  <path d="M496 176a64.07 64.07 0 00-64-64h-48V96a48.05 48.05 0 00-48-48H176a48.05 48.05 0 00-48 48v16H80a64.07 64.07 0 00-64 64v48h480zm-144-64H160V96a16 16 0 0116-16h160a16 16 0 0116 16zm-16 152a24 24 0 01-24 24H200a24 24 0 01-24-24v-4a4 4 0 00-4-4H16v144a64 64 0 0064 64h352a64 64 0 0064-64V256H340a4 4 0 00-4 4z"></path>
                </svg>
                <div className='w-full text-3xs group-hover:text-gray md:hidden text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>Jobs</div>
              </div>
              <span className='relative text-2xs text-gray-500 font-light group-hover:text-gray-700 hidden md:block'>
                <span className='absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis'>Jobs</span>
              </span>
            </div>
          </li>
          <li>
            <div className='flex flex-col items-center gap-y-2 group cursor-pointer'>
              <div className='rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center gap-1 md:gap-2 w-full bg-sky-50 group-hover:bg-red-100 text-red-400 group-hover:text-red-500'>
                <svg className="fill-current pointer-events-none text-red-400 w-7 h-7" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"></path>
                </svg>
                <div className='w-full text-3xs group-hover:text-gray md:hidden text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>Companies</div>
              </div>
              <span className='relative text-2xs text-gray-500 font-light group-hover:text-gray-700 hidden md:block'>
                <span className='absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis'>Companies</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
      {iframeVisible && <div className='mt-6 md:mt-12'>
        <div aria-hidden="true" tabIndex={-1} className="relative w-full aspect-1000/300 max-w-[1050px] mx-auto mb-1 border border-gray-300 rounded-2xl overflow-hidden lg:block">
          <button tabIndex={-1} 
            className="p-1 rounded-full bg-gray-100 text-gray-400 absolute top-0 right-0 mr-1.5 mt-1.5 border border-gray-300"
            onClick={(e) => setIframeVisible(false)}
          >
            <svg className="fill-current pointer-events-none text-gray-400 w-5 h-5" viewBox="0 0 20 20">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            </svg>
          </button>
          <span className='py-0.5 px-2 text-3xs rounded-full bg-gray-100 text-gray-600 absolute top-0 left-0 ml-2 mt-2'>blah blah</span>
          <iframe loading='lazy' className='w-full h-full overflow-hidden' src="https://www.tayara.tn/static/homebanner.html"></iframe>
        </div>
      </div>
      }
    <div className='relative px-4'>
      <div className='text-4xl font-bold text-gray-700 font-arabic vertical-align: inherit py-5'>
        All announcements
      </div>
      <div className='bg-red-500 w-[180px] pb-[60px] pt-[10px] rounded-2xl flex items-center absolute z-0 pl-[20px]'>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="display inline-block w-[26px] h-[26px] text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z">
          </path>
        </svg>
        <div className='pl-[5px] text-white text-2xl font-bold'>
          Featured
        </div>
      </div>
      <div className='pt-[10px] z-10'>
        <Carousel />
      </div>
      <div className='pt-6 flex flex-row-reverse items-center'>
      <div>
        <svg className='fill-gray-700' stroke-width="0" viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z">
            </path>
            </g>
        </svg>
      </div>
      <div className='text-xl pr-[3px]'>
        :
      </div>
      <div className='text-xl pr-[3px]'>
        Arrangement
      </div>
    </div>
    </div>
    
    <div className='flex flex-wrap '>
        {data.map((resource, index) => {
          return (
            <div key={index} className='transition xl:w-1/4 2xl:w-1/6 md:w-1/3 p-4 sm:w-1/2 :scale-105 h-[500px]'>
              <Card />
            </div>
          );
        }
        )}`                                                                                                                                                                                                   `
      </div>
    </div>
  );
}

export default HomePage;
