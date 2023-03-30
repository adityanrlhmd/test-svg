import Video from '@components/Video';
import Head from 'next/head';
import { useState } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Tiktok() {
  const data = [
    {
      id: 1,
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      id: 2,
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
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

      <main className='max-w-md mx-auto overflow-auto scrollbar-hide relative bg-white min-h-screen flex flex-col'>
        <Slider
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
        </Slider>

        {/* <div className='sticky bottom-0 bg-blue-400 w-full'>
          adit
        </div> */}
      </main>
    </>
  )
}
