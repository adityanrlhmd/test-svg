import Head from 'next/head';
import { useEffect, useState } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import SliderList from '@components/Slider';
import SVG from '@components/SVG';
import seats from "@data/seat.json";

export default function Test() {
  const [svgWidth, setSvgWidth] = useState(null);
  const [svgHeight, setSvgHeight] = useState(null);

  const [isOpenList, setIsOpenList] = useState(false);
  const [rectSelected, setRectSelected] = useState([]);

  const [currentSlideId, setCurrentSlideId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const windowHeight = window.innerHeight;

      setSvgWidth(1194)

      if (windowHeight > 824) {
        setSvgHeight(windowHeight);
      } else {
        setSvgHeight(824)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-md mx-auto'>
        {
          svgWidth && svgHeight ?
            <TransformWrapper
              initialScale={1}
              centerOnInit={true}
              disablePadding={true}
              doubleClick={{ disabled: true }}
            >
              {({ ...rest }) => (
                <>
                  <TransformComponent
                    wrapperStyle={{ maxWidth: "100%", maxHeight: "calc(100vh)" }}
                  >
                    <SVG
                      dataSeats={seats}
                      svgWidth={svgWidth}
                      svgHeight={svgHeight}
                      propsTransform={rest}
                      isOpenList={isOpenList}
                      setIsOpenList={setIsOpenList}
                      rectSelected={rectSelected}
                      setRectSelected={setRectSelected}
                      currentSlideId={currentSlideId}
                      setCurrentSlideId={setCurrentSlideId}
                    />
                  </TransformComponent>

                  <SliderList
                    propsTransform={rest}
                    isOpenList={isOpenList}
                    setIsOpenList={setIsOpenList}
                    currentSlideId={currentSlideId}
                    setCurrentSlideId={setCurrentSlideId}
                    seatsActive={seats.filter((seat) => seat.isAvailable)}
                  />
                </>
              )}
            </TransformWrapper>
            : null
        }
      </main>
    </>
  )
}
