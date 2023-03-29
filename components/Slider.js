
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useEffect, useRef } from 'react';

function SliderList({ seatsActive, isOpenList, setIsOpenList, currentSlideId, setCurrentSlideId, propsTransform }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (currentSlideId) {
      const seatsId = currentSlideId.split("-")[1];

      sliderRef.current.slickGoTo(seatsActive.findIndex(obj => obj.id == seatsId))
    }
  }, [currentSlideId])

  return (
    <Drawer
      enableOverlay={false}
      open={isOpenList}
      direction='bottom'
      rootClassName='root-drawer-list'
      className='drawer-list mb-3 relative'
      onClose={() => setIsOpenList(prev => !prev)}
    >
      <Slider
        ref={sliderRef}
        speed={500}
        arrows={false}
        infinite={true}
        centerMode={true}
        slidesToScroll={1}
        centerPadding='40px'
        className="carousel-svg"
        afterChange={(e) => {
          setCurrentSlideId("TB-" + seatsActive[e].id)

          const targetRect = document.getElementById("TB-" + seatsActive[e].id);
          propsTransform.zoomToElement(targetRect, 2, 500, 'easeOut')
        }}
      >
        {
          seatsActive.map((item, index) =>
            <div key={index} id={"CARD-" + item.id} className="bg-green-400 rounded-lg w-full h-[244px] ">
              <div className='flex justify-center items-center w-full h-full'>
                <h3>{item.text}</h3>
              </div>
            </div>
          )
        }
      </Slider>
    </Drawer>
  )
}

export default SliderList