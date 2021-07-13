import React from 'react'
import Lottie from 'react-lottie';


function LottieWrapper({data, width, height, loop=true }) {
    const defaultOptions = {
        loop: loop,
        autoplay: true, 
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <Lottie options={defaultOptions}
              height={width}
              width={height}
              isStopped={false}
              isPaused={false}/>
    )
}

export default LottieWrapper
