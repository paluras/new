
import React, { useRef, useEffect } from 'react';
import "./SlidingText.css";

const TickerTape = () => {
    const tickerContentRef = useRef(null);
  
    useEffect(() => {
      const tickerContentWidth = tickerContentRef.current.offsetWidth;
      const animationDuration = tickerContentWidth / 70; // Adjust the divisor to control the scrolling speed
      tickerContentRef.current.style.animationDuration = `${animationDuration}s`;
    }, []);
  return (
    <div className="ticker-tape">
      <div className="ticker-content" ref={tickerContentRef}>
        {/* Your ticker tape content goes here */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.zaharen.co/about-music ">
          Primordial Feelings is Zaharenco's first EP, which was published in
          November 2022 and is now available on all streaming platforms
        </a>
        <a href="https://www.zaharen.co/bio">
          • Who is Zaharenco and why am I on his site?
        </a>
        <a href="https://www.zaharen.co/visual">
          • Click here to view a working model of the installation
          Catoptro-tono, which was shown at arca.expo 1.3 in 2022{" "}
        </a>
        <a href="https://www.zaharen.co/inspiration">
          Which artists inspire Zaharenco, and did he steal any ideas from them?
        </a>
        <a href="https://www.zaharen.co/music ">
          • The most recent musical compositions by Zaharenco, including Piano
          Sonata No. 1 and Iona - a ballet for one dancer, orchestra, and live
          electronics, are now available for free listening on this website
        </a>
        • If you're still on home page, it means you're ready for the easter
        egg: top of the screen, click on the CRT text •
      </div>
    </div>
  );
};

export default TickerTape;