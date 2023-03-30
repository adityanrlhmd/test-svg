import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
// import ReactPlayer from 'react-player';

const ReactPlayer = dynamic(() => import('react-player').then((module) => module), { ssr: false })

function Video({ item, index, currentSlide }) {
  const videoRef = useRef(null);

  const [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    if (currentSlide === index) {
      setIsPlay(true)
    } else {
      setIsPlay(false)
    }
  }, [currentSlide])

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${index % 2 == 0 ? 'bg-green-400' : 'bg-red-400'}`}>
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
      {isPlay ? 'play' : 'pause'}
      <ReactPlayer
        url={item.url}
        controls={true}
        width={'100%'}
        height={'100%'}
        loop={true}
        playing={isPlay}
        volume={0.5}
        muted={false}
      />
      {/* <video
        ref={videoRef}
        width="100%"
        height="100%"
        loop={true}
        muted={true}
      >
        <source src={item.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={() => videoRef.current.muted = !videoRef.current.muted}>mute</button> */}
    </div>
  )
}

export default Video