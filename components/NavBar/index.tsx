import React, { useRef, useEffect } from 'react';
import { StoreContext } from '../../utils/store';

const NavBar: React.FC = () => {
  const { search } = React.useContext(StoreContext);
  const [ menuVisible, setMenuVisible ] = React.useState(false);
  const menuRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && !menuVisible) {
        setMenuVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  
  return (
    <>
      <div className='lg:w-full w-0 overflow-hidden  transform-gpu shadow-sm navbar min-h-12 fixed top-0 z-50 p-0 after:will-change-transform md:flex  after:transform-gpu after:absolute after:inset-0 after:z-[-1] after:backdrop-filter after:backdrop-blur-3xl  after:bg-white/80'>
        <div className='md:mx-2 flex-1 px-2 flex items-center'>
          <div className='relative'>
            <button className='bg-transparent px-3 min-h-[32px] border-none text-primary hover:bg-teal-50 rounded-xl' aria-label='Menu' type='button' aria-haspopup='true' aria-expanded='false'
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <svg className='fill-current stroke-0 w-[22px] h-[22px]' viewBox='0 0 512 512'>
                <path d='M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z' fill="#EE493A"></path>
              </svg>
            </button>
            
          </div>
          <div className='flex items-center basis-full space-x-7 px-2'>
            <a href="/" className='text-left'>
              <svg className="block mx-auto max-h-6 transition-all duration-300 w-[86px] h-[24px]" viewBox="0 0 165.53 46.384"><g transform="translate(-11.648 -13.2)">
                <path d="M11.945,30.143c.119.712,4.05.254,4.219.237h.356c.932,0,1.406.407,1.406,1.22,0,1.22-.051,3.05-.136,5.507-.085,2.44-.136,4.27-.136,5.49q0,6.125,8,6.117A13.028,13.028,0,0,0,32.7,46.748s.8-.559.915-.627c.407-.3.373-1.355.373-1.881s.051-1.355-.017-2.389a13.786,13.786,0,0,1,0-1.728c0-.407-.186-.61-.576-.61a9.691,9.691,0,0,0-1.813.322,5.592,5.592,0,0,1-1.339.152c-1.457,0-2-.237-2.508-1.034a6.806,6.806,0,0,1-.525-3.219c0-.424-.017-1.084-.034-1.965V31.8c0-.813.136-1.2.424-1.2l2.084-.22c.373,0,.983.017,1.847.034.864.034,1.05.051,1.423.051.525,0,.695-.2.8-.576a4.757,4.757,0,0,0,.1-1.576c0-.847.119-1.728.119-2.169,0-.424-.051-.847-.119-1.694a8.348,8.348,0,0,1-.051-.864c0-1.034-.576-.966-.881-1.017a12.911,12.911,0,0,0-2.084-.068,19.776,19.776,0,0,1-2.931-.339c-.525-.085-.8-.457-.8-1.355,0-.746.068-1.881.186-3.372s.169-2.609.169-3.355c0-.288-.22-.441-.695-.474-1.965-.1-3.016-.085-4.016-.152-.407-.034-1.355-.068-2.44-.136-.949-.068-1.627-.119-2.135-.119q-.61,0-.61,3.2c0-.119.034.169.119,2.542a11,11,0,0,1,0,2.321A1.484,1.484,0,0,1,16.5,22.4c-1.186.034-4.168.136-4.439.678a17.254,17.254,0,0,0-.119,7.065" transform="translate(0 0)" fill="#e64b41"/>
                <path d="M542.174,79.009c0,1.322.068,3.287.237,5.9.152,2.609.237,4.575.237,5.879,0,.695-.3,1.457-.9,1.508-2.135.152-4.575.237-7.32.237-.339,0-.339-.949-.661-1.881-.237-.729-.424-.644-.424-.644a.617.617,0,0,0-.508.169,7.921,7.921,0,0,1-6.184,2.321,10.4,10.4,0,0,1-8.336-3.965,13.335,13.335,0,0,1-3.118-8.878,13.912,13.912,0,0,1,3.219-9.59c2.236-2.508,5.3-3.728,9.183-3.761a14.506,14.506,0,0,1,6.388,1.118s.593.288.729-.2c.2-.83.135-.932.407-.949a25.228,25.228,0,0,1,3.338-.051s3.8.051,4.27.169c.271.068.39.237.39.407a2.759,2.759,0,0,1-.085.542,74.038,74.038,0,0,0-.864,11.674m-8.3.152a5.028,5.028,0,0,0-1.372-3.626,5.222,5.222,0,0,0-7.184-.017,5.014,5.014,0,0,0-1.372,3.643,4.922,4.922,0,0,0,1.44,3.575,4.689,4.689,0,0,0,3.507,1.491,4.825,4.825,0,0,0,3.592-1.423,5.026,5.026,0,0,0,1.389-3.643" transform="translate(-418.232 -44.02)" fill="#e64b41"/>
                <path d="M850.774,79.009c0,1.322.068,3.287.237,5.9.152,2.609.237,4.575.237,5.879,0,.695-.3,1.457-.9,1.508-2.135.152-4.575.237-7.32.237-.339,0-.339-.949-.661-1.881-.237-.729-.424-.644-.424-.644a.617.617,0,0,0-.508.169,7.921,7.921,0,0,1-6.184,2.321,10.4,10.4,0,0,1-8.336-3.965,13.335,13.335,0,0,1-3.118-8.878,13.912,13.912,0,0,1,3.219-9.59c2.236-2.508,5.3-3.728,9.183-3.761a14.505,14.505,0,0,1,6.388,1.118s.593.288.729-.2c.2-.83.135-.932.407-.949a25.229,25.229,0,0,1,3.338-.051s3.8.051,4.27.169c.271.068.39.237.39.407a2.765,2.765,0,0,1-.085.542,76.1,76.1,0,0,0-.864,11.674m-8.3.152a5.028,5.028,0,0,0-1.372-3.626,5.222,5.222,0,0,0-7.184-.017,5.014,5.014,0,0,0-1.372,3.643,4.923,4.923,0,0,0,1.44,3.575,4.689,4.689,0,0,0,3.507,1.491,4.825,4.825,0,0,0,3.592-1.423,4.957,4.957,0,0,0,1.389-3.643" transform="translate(-674.545 -44.02)" fill="#e64b41"/>
                <path d="M186.774,79.009c0,1.322.068,3.287.237,5.9.152,2.609.237,4.575.237,5.879,0,.695-.3,1.457-.9,1.508-2.135.152-4.575.237-7.32.237-.322,0-.339-.949-.661-1.881-.237-.729-.424-.644-.424-.644a.617.617,0,0,0-.508.169,7.921,7.921,0,0,1-6.184,2.321,10.4,10.4,0,0,1-8.336-3.965,13.334,13.334,0,0,1-3.118-8.878,13.994,13.994,0,0,1,3.219-9.59c2.237-2.508,5.3-3.728,9.183-3.761a14.544,14.544,0,0,1,6.388,1.118s.593.288.729-.2c.2-.83.136-.932.407-.949a25.229,25.229,0,0,1,3.338-.051s3.8.051,4.27.169c.271.068.39.237.39.407,0,.068-.034.254-.085.542a74.034,74.034,0,0,0-.864,11.674m-8.319.152a5.028,5.028,0,0,0-1.372-3.626,5.222,5.222,0,0,0-7.184-.017,5.014,5.014,0,0,0-1.372,3.643,4.922,4.922,0,0,0,1.44,3.575,4.689,4.689,0,0,0,3.507,1.491,4.825,4.825,0,0,0,3.592-1.423,4.957,4.957,0,0,0,1.389-3.643" transform="translate(-123.05 -44.02)" fill="#e64b41"/>
                <path d="M366.109,73.267a18.644,18.644,0,0,1-1.084,6.472s-.763,3.1-4.88,8.946c-5.9,8.37-9.641,11.708-9.641,11.708a21.3,21.3,0,0,1-7.235,3.9c-.712.186-.644-.1-.9-.271-.61-.407-2.287-3.626-2.626-4.592A15.616,15.616,0,0,1,339,97.7c-.186-.644.085-.966.373-1.067,8.4-3.168,7.743-6.506,7.743-6.506-.034-.729-.779-1.9-3.118-5.134-2.423-3.321-3.372-4.778-3.8-6.286a15.362,15.362,0,0,1-.407-5.337c.051-.61.017-1.542.051-2.8.034-1.237.051-2.186.051-2.8,0-.441.288-.678.847-.678.881,0,2.2.034,3.982.085s3.118.085,3.982.085c.356,0,.542.271.542.8,0,.474-.017,1.2-.085,2.186-.051.966-.085,1.694-.085,2.186,0,2.169.034,3.626.1,4.405a10.806,10.806,0,0,0,1.542,3.355c1.034,1.694,2.186,2.355,2.643,2.355.407,0,1.067-.83,2.016-2.525A8.564,8.564,0,0,0,356.4,77a16.339,16.339,0,0,0,.254-4.931c0-.457-.051-1.169-.136-2.118s-.136-1.66-.136-2.135c0-.322.186-.491.542-.491.881,0,2.186-.034,3.931-.1s3.05-.1,3.931-.1a.9.9,0,0,1,.9.678,20.007,20.007,0,0,1,.424,5.473" transform="translate(-271.835 -44.767)" fill="#e64b41"/>
                <path d="M719.775,74.325c0,.678-.373,1.034-1.1,1.034-.322,0-.813-.017-1.423-.068-.627-.034-1.491-.068-1.813-.068-1.423,0-2.05,1.152-2.525,1.677a7.766,7.766,0,0,0-.779,3.745c0,.762.017,1.9.034,3.423s.034,2.677.034,3.423c0,.508.034,1.254.1,2.27q.1,1.5.1,2.237c0,.424-.288.661-.847.712-.813.068-2.084.1-3.8.1q-2.44,0-3.914-.152c-.576-.068-.847-.356-.847-.864,0-1.389.017-3.49.034-6.286.017-2.779.017-4.88.017-6.269a51.864,51.864,0,0,0-1.1-11.555,1.887,1.887,0,0,1-.051-.39.525.525,0,0,1,.39-.525c.949-.1,4.151.017,4.151.017,1.9-.017,4.117-.017,4.2-.017.3,0,.61-.085.966.966a.78.78,0,0,0,.762.491,7.5,7.5,0,0,0,2.406-.525c1.711-.61,2.067-1,3.643-1,.966,0,1.593.2,1.593.627a21.235,21.235,0,0,1-.153,2.152c-.1,1-.169,1.508-.186,1.949,0,.508.017-.017.034.813.051,1.067.068,1.745.068,2.084" transform="translate(-573.299 -44.435)" fill="#e64b41"/>
              </g></svg>
            </a>
            <div className='flex-grow'>
              <div className='relative w-full md:max-w-3xl mx-auto group'>
                <form>
                  <input className="text-base cursor-text w-full input-md flex text-gray-500 rounded-full pr-20 outline-offset-0 outline-1 placeholder:text-gray-300 transition-all duration-300 focus:transition-all hover:outline-gray-400 focus:outline-offset-0 font-bold font-arabic undefined placeholder:text-gray-600  focus:max-w-full bg-transparent focus:bg-gray-200 pl-10 !outline-none :text-gray-500 w-full focus:placeholder:text-gray-500 rounded-lg h-10 bg-clip-padding text-gray-700 pr-3 w-full" placeholder="Search on tayara"
                  value={search[0]}
                  onChange={(e) => search[1](e.target.value)}
                  />
                  <span className="absolute inset-0 flex items-center justify-between pointer-events-none pl-3">
                    <span>
                      <svg className="text-gray-300 focus-within:text-gray-700 stroke-0" fill="none"viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    
                    {search[0] != '' && <button className="flex items-center absolute right-5">
                      <svg className="fill-current pointer-events-none text-gray w-4 h-4" viewBox="0 0 20 20" ><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg>
                    </button>}
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='gap-4 ml-2 flex items-center'>
          <button className="g-white text-gray-600 text-sm hover:text-gray-800 py-2 font-arabic font-medium px-2">
            <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-row">
              <span className="ml-0 mr-0">
                <svg className='fill-current stroke-current stroke-0 w-[22px] h-[22px]' viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9a9 9 0 00-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7a6.995 6.995 0 01-11.06 5.7l-1.42 1.44A9 9 0 1012 3z"></path>
                </svg>
              </span>
              <span className="sm:ml-0.5 justify-center flex w-full">Old version</span>
            </span>
          </button>
          <div className="relative">
            <button aria-label="Connexion" className="bg-transparent text-gray-600 text-sm hover:text-gray-800 py-2 font-arabic font-medium">
              <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-row">
                <span className="ml-0 mr-0">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15L10 12z"></path>
                    </g>
                  </svg>
                </span>
                <span className="sm:ml-0.5 justify-center flex w-full">Avis</span>
              </span>
            </button>
          </div>
          <a href="/login/">
            <button aria-label="Login" className="bg-transparent text-gray-600 text-sm hover:text-gray-800 py-4 font-arabic font-medium px-2">
              <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-row">
                <span className="ml-0 mr-0">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span className="sm:ml-0.5 justify-center flex w-full">Login/Register</span>
              </span>
            </button>
          </a>
          <span className="flex">
            <a href="/shops/">
              <button aria-label="Visit a store" className="bg-blue-500 hover:bg-blue-700 text-white py-4 font-arabic font-medium px-6 text-sm">
                <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-row">
                  <span className="ml-0 mr-0">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path>
                    </svg>
                  </span>
                  <span className="sm:ml-0.5 justify-center flex w-full">Visit a store</span>
                </span>
              </button>
            </a>
            <button aria-label="Post ad" className="bg-red-500 hover:bg-red-700 text-sm text-white py-4 font-arabic font-medium px-6">
              <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-row">
                <span className="ml-0 mr-0">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span className="sm:ml-0.5 justify-center flex w-full">Post an ad</span>
              </span>
            </button>
          </span>
        </div>
      </div>

      {menuVisible && 
      <div ref={menuRef} className="fixed top-[60px] right-2 lg:left-2 transform scale-100 opacity-100 z-50">
        <div className="w-64 rounded-lg p-2 shadow bg-cyan-50 text-primary-content">
          <a className="w-full p-2 hover:no-underline cursor-pointer border-none flex justify-between text-gray-700 font-arabic" href="#">
            <span>Need help ?</span>
            <span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            </span>
          </a>
          <a className="w-full p-2 hover:no-underline cursor-pointer border-none flex justify-between text-gray-700 font-arabic" href="https://tayarahelp.zendesk.com/hc/fr/requests/new" >
            <span >Contact us</span>
            <span >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            </span>
          </a>
          <a className="w-full p-2 hover:no-underline cursor-pointer border-none flex justify-between text-gray-700 font-arabic" href="/shops/" >
            <span >Professionals</span>
            <span >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            </span>
          </a>
          <a className="w-full p-2 hover:no-underline cursor-pointer border-none flex justify-between text-gray-700 font-arabic" href="/terms/" >
            <span >Terms of Use</span>
            <span >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            </span>
          </a>
          <a className="w-full p-2 hover:no-underline cursor-pointer border-none flex justify-between text-gray-700 font-arabic" href="/terms/#Utilisation%20des%20cookies%20et%20autres%20technologies" >
            <span >Cookie policies</span>
            <span >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      }
      <div className='lg:hidden w-full shadow-sm z-[99999] fixed top-0 right-0 left-0 w-screen h-12 will-change-transform pointer-events-auto transform-gpu bg-white/70'>
        <div className="grid grid-cols-12 px-2">
          <div className="col-span-5 flex items-center"></div>
          <div className="col-span-2 flex items-center justify-center">
            <a href="/">
              <svg className="py-2" strokeWidth="0" width="48" height="48" viewBox="0 0 20 20">
                <path fill="#EE493A" d="M16.28,17.49c0,.27,0,.89-.2,1.05l-.53.35a7.28,7.28,0,0,1-4,1.11q-4.5,0-4.5-3.44c0-.7,0-1.72.08-3.1s.07-2.42.07-3.1c0-.45-.28-.69-.8-.69H6.26c-.09,0-2.31.28-2.38-.13a9.37,9.37,0,0,1,.07-4c.15-.3,1.82-.35,2.5-.39a.84.84,0,0,0,.67-.62,7.38,7.38,0,0,0,0-1.33c0-1-.07-1.33-.07-1.4C7.05.6,7.16,0,7.39,0S8.07,0,8.6.07L10,.15c.57,0,1.15,0,2.28.09.27,0,.38.11.38.25,0,.42,0,1.06-.11,1.9s-.09,1.49-.09,1.89.15.73.46.77a15,15,0,0,0,1.64.2,6.65,6.65,0,0,1,1.18,0c.16,0,.49,0,.49.57a3.89,3.89,0,0,0,0,.49c0,.47.05.71.05,1s-.05.74-.05,1.22a2.41,2.41,0,0,1-.08.89.38.38,0,0,1-.43.33c-.22,0-.33,0-.82,0l-1,0-1.19.13c-.16,0-.23.2-.23.67v1.11c0,.5,0,.86,0,1.12a4,4,0,0,0,.29,1.8c.29.44.6.58,1.42.58a2.68,2.68,0,0,0,.74-.09,9.5,9.5,0,0,1,1-.18c.22,0,.33.11.33.34a7.85,7.85,0,0,0,0,1C16.32,16.72,16.28,17.18,16.28,17.49Z"></path>
              </svg>
            </a>
          </div>
          <div className="col-span-5 flex justify-end items-center">

            <button className="bg-white p-2 font-arabic px-2 font-bold border-none text-gray-700 text-xs font-medium hover:bg-transparent hover:text-gray-900">
              <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-row">
                <span className="ml-0 mr-0">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9a9 9 0 00-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7a6.995 6.995 0 01-11.06 5.7l-1.42 1.44A9 9 0 1012 3z"></path>
                  </svg>
                </span>
                <span className="sm:ml-0.5 justify-center flex w-full"></span>
              </span>
            </button>

            <button className="bg-white p-2 font-arabic px-2 font-bold border-none text-gray-700 text-xs font-medium hover:bg-transparent hover:text-gray-900">
              <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-row">
                <span className="ml-0 mr-0">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15L10 12z"></path>
                  </g></svg>
                </span>
                <span className="sm:ml-0.5 justify-center flex w-full"></span>
              </span>
            </button>

            <button className="bg-white p-2 font-arabic px-2 font-bold border-none text-gray-700 text-xs font-medium hover:bg-transparent hover:text-gray-900">
              <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-row">
                <span className="ml-0 mr-0">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#EE493A" d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z"></path>
                  </svg>
                </span>
                <span className="sm:ml-0.5 justify-center flex w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex w-full flex-col border-t border-gray-200 shadow-sm fixed bottom-0 left-0 right-0 z-[99999] bg-white/80 bg-blend-overlay after:backdrop-blur-3xl  after:bg-white/80">
        <div className="w-full font-arabic flex grid grid-cols-5 place-items-stretch">
            <a href="/">
                <button aria-label="Acceuil" className="btn normal-case font-bold border-none undefined line-clamp-1 w-full rounded-none font-normal text-2xs pt-1 !bg-transparent text-red-500">
                    <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-col">
                        <span className="ml-0 mr-0">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                            </svg>
                        </span>
                        <span className="sm:ml-0.5 justify-center flex w-full">Accueil</span>
                    </span>
                </button>
            </a>
            <a href="/shops/">
                <button aria-label="Boutiques" className="btn normal-case font-bold border-none undefined line-clamp-1 w-full rounded-none font-normal text-2xs pt-1 !bg-transparent text-slate-900/60">
                    <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-col">
                        <span className="ml-0 mr-0">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.148 2.971A2.008 2.008 0 0 0 17.434 2H6.566c-.698 0-1.355.372-1.714.971L2.143 7.485A.995.995 0 0 0 2 8a3.97 3.97 0 0 0 1 2.618V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.382A3.97 3.97 0 0 0 22 8a.995.995 0 0 0-.143-.515l-2.709-4.514zm.836 5.28A2.003 2.003 0 0 1 18 10c-1.103 0-2-.897-2-2 0-.068-.025-.128-.039-.192l.02-.004L15.22 4h2.214l2.55 4.251zM10.819 4h2.361l.813 4.065C13.958 9.137 13.08 10 12 10s-1.958-.863-1.993-1.935L10.819 4zM6.566 4H8.78l-.76 3.804.02.004C8.025 7.872 8 7.932 8 8c0 1.103-.897 2-2 2a2.003 2.003 0 0 1-1.984-1.749L6.566 4zM10 19v-3h4v3h-4zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.142c.321.083.652.142 1 .142a3.99 3.99 0 0 0 3-1.357c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357A3.99 3.99 0 0 0 18 12c.348 0 .679-.059 1-.142V19h-3z"></path>
                            </svg>
                        </span>
                        <span className="sm:ml-0.5 justify-center flex w-full">Boutiques</span>
                    </span>
                </button>
            </a>
            <a href="/search/">
                <button aria-label="Rechercher" className="btn normal-case font-bold border-none undefined line-clamp-1 w-full rounded-none font-normal text-2xs pt-1 !bg-transparent text-slate-900/60">
                    <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-col">
                        <span className="ml-0 mr-0">
                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </span>
                        <span className="sm:ml-0.5 justify-center flex w-full">Rechercher</span>
                    </span>
                </button>
            </a>
            <a href="/post-listing/">
              <button aria-label="Postuler annonce" className="btn normal-case font-bold border-none undefined line-clamp-1 w-full rounded-none font-normal text-2xs pt-1 !bg-transparent text-slate-900/60">
                <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-col">
                    <span className="ml-0 mr-0">
                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                    </span>
                    <span className="sm:ml-0.5 justify-center flex w-full">Annonce</span>
                </span>
            </button>
            </a>
            <a href="/login/">
                <button aria-label="Profil" className="btn normal-case font-bold border-none undefined line-clamp-1 w-full rounded-none font-normal text-2xs pt-1 !bg-transparent text-slate-900/60">
                    <span className="flex h-full w-full items-center gap-x-1 gap-y-[2.5px] flex-col">
                        <span className="ml-0 mr-0">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                            </svg>
                        </span>
                        <span className="sm:ml-0.5 justify-center flex w-full">Profil</span>
                    </span>
                </button>
            </a>
        </div>
      </div>
    </>
  );
}
export default NavBar;
