import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations'; // custom helper for GSAP animations
import { explore1Img, explore2Img, exploreVideo } from '../utils'; // assets
import gsap from 'gsap';

const Features = () => {
  // Reference to the video element so we can control it with JS
  const videoRef = useRef();

  // useGSAP hook to run GSAP animations after component mounts
  useGSAP(() => {
    // Animate the video when it scrolls into view
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',            // element that triggers the scroll animation
        toggleActions: 'play pause reverse restart', // defines actions on enter/leave
        start: '-10% bottom',                // start animation slightly before the element fully enters view
      },
      onComplete: () => {
        // Play the video when animation is complete
        videoRef.current.play();
      }
    });

    // Animate the section title into view by moving it vertically to y:0 and making it fully opaque
    animateWithGsap('#features_title', { y: 0, opacity: 1 });

    // Animate images inside .g_grow class: scale to normal size & fade in with smooth ease
    // scrub: 5.5 keeps animation linked to scroll with a smoothing factor
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );

    // Animate texts inside .g_text class: move up to y:0 and fade in
    animateWithGsap(
      '.g_text',
      { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
    );
  }, []); // empty dependency array to run only once on mount

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        {/* Section title */}
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Explore the full story.</h1>
        </div>
        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          {/* Static headline about iPhone */}
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            {/* Video section */}
            <div className="relative h-[50vh] w-full flex items-center">
              <video 
                playsInline 
                id="exploreVideo" 
                className="w-full h-full object-cover object-center"
                preload="none"
                muted 
                autoPlay 
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            {/* Images and text content */}
            <div className="flex flex-col w-full relative">
              {/* Two titanium product images */}
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                </div>
              </div>

              {/* Text descriptions about titanium */}
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{' '}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium design
                    </span>,
                    using the same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of any metal, making these our{' '}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
