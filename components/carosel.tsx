import { useState, useRef, useEffect } from 'react';
interface datainfo{
    link:string,
    imageUrl:string,
    title:string
}
const data:Array<datainfo>=[
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
    {
        link:"",
        imageUrl:'https://cdn.tayara.tn/08/0811245c-30bd-45e4-b11b-0136accb374f-w300~',
        title:""
    },
]

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex/5;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? (carousel.current.scrollWidth - carousel.current.offsetWidth)*5
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto bg-slate-400 ">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}

            className={"mx-[20px] text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"+(isDisabled('prev')?" invisible":"")}
          > 
          <div className='w-[80px] h-[80px] bg-white rounded-full  flex items-center'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12  text-black mx-auto "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
          </div>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className={" mx-[60px] text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"+(isDisabled('next')?" hidden":" ")}
          >
            <div className='w-[80px] h-[80px] bg-white rounded-full  flex items-center'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12  text-black mx-auto "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                />
                </svg>
            </div>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth  touch-pan-x z-0 "
        >
          {data.map((resource, index) => {
            return (
              <div  key={index} className="transition hover:duration-500 my-[20px] hover:scale-105 carousel-item text-center relative  w-[255px] h-[330px] snap-start mx-[10px]">
                  <div className="aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 w-full h-full rounded-xl overflow-hidden relative">
                        <img  className="w-full h-full" src="./assets/images/carosel.jpg"></img>
                        <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col place-content-between text-white text-semibold">
                        <div className="text-2xl my-2">
                            4000 TND
                        </div>
                        <div className="text-xl my-2">
                            This is the test values
                        </div>
                        </div>
                    </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;