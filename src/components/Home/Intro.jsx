import girl from '../../assets/girl.png';
import sparkle from '../../assets/sparkle.svg';
import jet from '../../assets/jet.svg';
import rightArrow from '../../assets/rightArrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

function Intro() {
  return (
    <div className=" flex flex-col " >
      {/* For Upper Text */}
      <div className=" w-full  flex justify-center " >
        <div className="w-2/5  text-center">
          <h6 className=" text-green-600 text-3xl font-hand-written  ">Success stories</h6>
          <h1 className=" text-font-black font-semibold text-5xl">{`Every success journey we've encountered.`}</h1>
        </div>
      </div>
      {/* Container For Image and carousel */}
      <div className=" w-full flex ">

        {/* For Image */}
        <div className=" w-full h-full relative flex-1  ">
          <div className=' h-[520px] rounded-5xl  overflow-hidden  m-32'>
            <img src={girl} alt="Girl Image" className=' object-cover ' />
          </div>

          {/* Discount Container */}
          <div className=' w-56 h-52 bg-white top-60 left-8 absolute flex flex-col p-4  rounded-2xl shadow-xl hover:scale-105 transition-all ease-in-out '>
            {/* For discount number */}
            <div className=' flex  relative p-2'>
              <div className='w-16 h-16 -top-7 -left-4 absolute '>
                <img src={sparkle} alt="sparkle" />
              </div>
              <p className='text-6xl font-semibold font-Switzer'>40%</p>
            </div>
            {/* For discount description */}
            <div className=' font-medium text-font-light-gray text-base'>
              Achieved reduction in project execution time by optimising team availability
            </div>
          </div>

          {/* For Days Container */}
          <div className='flex items-center justify-center bg-white bottom-44 left-20 absolute rounded-full shadow-xl gap-3 pl-3 pr-6 py-2 hover:scale-105 transition-all ease-in-out'>
            {/* For jet logo */}
            <div className=' size-10 flex justify-center bg-green-100 rounded-full'>
              <img src={jet} alt='jet logo' className='p-2 scale-90' />
            </div>
            {/* For Days Text */}
            <div className='flex flex-col'>
              <div className='font-bold text-lg'>10 DAYS</div>
              <div className='font-medium text-font-light-gray text-xs'>Staff Deployment</div>
            </div>

          </div>

          {/* For Savings Container */}
          <div className=" w-64 bg-green-950 flex flex-col gap-2 pt-8 p-5 rounded-xl shadow-xl right-24 bottom-24 absolute hover:scale-105 transition-all ease-in-out">
            <div className='flex gap-1 '>
              <span className='text-6xl font-semibold text-white '>$0.5</span>
              <span className='text-xl font-semibold text-[#A6A3A0] flex items-end pb-0.5 '>MILLION</span>
            </div>
            {/* For Saving Description */}
            <div className='font-medium text-[#CCCCCC] text-lg'>Reduced client expenses by saving on hiring and employee costs.</div>
          </div>
        </div>

        {/* For Carousel */}
        <div className=" flex-1 flex flex-col ">
          {/* For Carousel */}
          <div className=' flex-1 flex items-end '>
            <div className=' h-64 p-6  size-96' >
              <Swiper
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,

                }}

                modules={[Autoplay, Pagination]}
                className="mySwiper text-3xl font-semibold "
              >
                <SwiperSlide className='p-4 h-60 '>{`Enhance fortune 50 company's insights teams research capabilities`}</SwiperSlide>
                <SwiperSlide className='p-4 h-60 '>{`Enhance fortune 50 company's insights teams research capabilities`}</SwiperSlide>
                <SwiperSlide className='p-4 h-60 '>{`Enhance fortune 50 company's insights teams research capabilities`}</SwiperSlide>

              </Swiper>
            </div>
          </div>

          {/* For get started button */}
          <div className=' flex-1  flex items-center pl-12'>
            <button className="bg-button-black hover:bg-button-hover-black text-2xl text-white font-semibold py-5 px-8 rounded-full flex items-center gap-3">
              Explore More <img src={rightArrow} alt='explore more' className='size-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro