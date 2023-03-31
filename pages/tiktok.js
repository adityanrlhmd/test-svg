import Video from '@components/Video';
import Head from 'next/head';
import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

export default function Tiktok() {
  const data = [
    {
      id: 1,
      url: 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4'
    },
    {
      id: 2,
      url: 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4'
    },
    {
      id: 3,
      url: 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-lg mx-auto overflow-auto scrollbar-hide relative bg-white h-screen flex flex-col'>
        <div className='grow flex'>
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            autoHeight={true}
            className="video-swiper !m-0 h-full w-full"
            onActiveIndexChange={(e) => setCurrentSlide(e.activeIndex)}
          >
            {
              data.map((item, index) =>
                <SwiperSlide
                  key={index}
                  className=" relative"
                >
                {/* <div className={`h-full w-full ${index % 2 == 0 ? 'bg-green-400' : 'bg-red-400'}`} /> */}
                  <Video
                    item={item}
                    index={index}
                    currentSlide={currentSlide}
                  />
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
        {/* <Slider
          className="carousel-vertical grow"
          adaptiveHeight={true}
          centerMode={false}
          infinite={false}
          slidesToScroll={1}
          speed={500}
          onEdge={(e) => console.log(e)}
          arrows={false}
          vertical={true}
          verticalSwiping={true}
          afterChange={(currentSlide) => {
            setCurrentSlide(currentSlide)

            console.log(currentSlide);
          }}
        >
          {
            data.map((item, index) =>
              <Video
                key={index}
                item={item}
                index={index}
                currentSlide={currentSlide}
              />
            )
          }
        </Slider> */}

        <div className='sticky bottom-0 bg-blue-400 w-full '>
          adit
        </div>
      </main>
    </>
  )
}
