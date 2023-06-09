import React from "react";
import { useState, useEffect ,lazy, Suspense  } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function LandingPage({ crt, handleClickCRT }) {
  const [count, setCount] = useState(true);
  const [start, setStart] = useState("tv-main");
  const [mainPage, setMainPage] = useState("page");
  const [displays, setDisplay] = useState("flex");
  const [clicked, setClicked] = useState(false);
  const [secondDisplay, setSecondDisplay] = useState("0");
  const [compenentOverflow, setComponentOverflow] = useState("hidden");
  const [shouldRender, setShouldRender] = useState(false);
  const [one, setOne] = useState('0')

  useEffect(() => {
    const hasRendered = sessionStorage.getItem("hasRendered");
    if (!hasRendered) {
      // Set the flag to indicate that the content has been rendered
      sessionStorage.setItem("hasRendered", "true");
      setShouldRender(true);
     
    }
    if (hasRendered){
      setOne("1")
    }
  }, []);

  useEffect(() => {
    let theDisplay1;
    let theDisplay2;
    let componentDisplay;
    if (clicked) {
      theDisplay1 = setTimeout(() => {
        setDisplay("none");
      }, 2000);
      theDisplay2 = setTimeout(() => {
        setSecondDisplay("1");
      }, 300);
      componentDisplay = setTimeout(() => {
        setComponentOverflow("scroll");
      }, 500);
    }
    return () => clearTimeout(theDisplay1, theDisplay2, componentDisplay);
  }, [clicked]);

  function handleClick() {
    setCount(count);
    count ? setStart("tv-main-2") : setStart("tv-main");
    count ? setMainPage("page-main") : setStart("page");
    count ? setOne("1") : setOne("0")
    setClicked(true);
  }

  const [selectedButton, setSelectedButton] = useState("Button 1");

  const handleClickDisplay = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="App">
      {shouldRender && (
        <div style={{ display: `${displays}` }} className="img-container">
          <img onClick={handleClick} className={start} src="/tv.png" alt="tv landing page"></img>
        </div>
      )}
      <div className="white"></div>
      <div style={{ opacity: `${one}` }}>
        <div
          style={{ overflowY: `${compenentOverflow}` }}
          className="components"
        >
          <main className={`main ${crt}`}>
            <Nav handleClickCRT={handleClickCRT} number={100} />
            <div className="for-fix">
            <img
              className="logo"
              src="/Zaharenco-logo.png"
              alt="logo-zaharenco"
            />

            <div className="container">
              <div className="container-left">
                <ul>
                  <li onClick={() => handleClickDisplay("Button 1")}>About</li>
                  <li onClick={() => handleClickDisplay("Button 2")}>
                    Portfolio
                  </li>
                  <li onClick={() => handleClickDisplay("Button 3")}>Band</li>
                  <li onClick={() => handleClickDisplay("Button 4")}>
                    Horoscop
                  </li>
                </ul>
              </div>
              <div className="container-right">
                {selectedButton === "Button 1" && (
                  <div className="table">
                     <Link to="/bio"><div className="row">
                      <div className="title">
                        Bio
                      </div>
                      <div className="dots"></div>
                      <div className="value">245</div>
                    </div>
                    </Link>
                    <Link to="/photos"> <div className="row">
                    
                      <div className="title">
                        Photos
                      </div>
                      <div className="dots"></div>
                      <div className="value">254</div>
                    </div>
                    </Link>
                    <Link to="/inspiration"><div className="row">
                      <div className="title">
                        Inspiration
                      </div>
                      <div className="dots"></div>
                      <div className="value">222</div>
                    </div></Link>
                    <Link to="/contacts"> <div className="row">
                      <div className="title">
                         Contacts
                      </div>
                      <div className="dots"></div>
                      <div className="value">745</div>
                    </div>
                    </Link>
                  </div>
                )}
                {selectedButton === "Button 2" && (
                  <div className="table">
                    <Link to="/music"> <div className="row">
                      <div className="title">
                       Music
                      </div>
                      <div className="dots"></div>
                      <div className="value">124</div>
                    </div></Link>
                    <Link to="/film"> <div className="row">
                      <div className="title">
                       Film
                      </div>
                      <div className="dots"></div>
                      <div className="value">135</div>
                    </div></Link>
                    <Link to="/visual"><div className="row">
                      <div className="title">
                        Multimedia
                      </div>
                      <div className="dots"></div>
                      <div className="value">412</div>
                    </div></Link>
                    <Link to="/mixing"> <div className="row">
                      <div className="title">
                       Mixing
                      </div>
                      <div className="dots"></div>
                      <div className="value">765</div>
                    </div></Link>
                  </div>
                )}
                {selectedButton === "Button 3" && (
                  <div className="table">
                    <Link to="/about-music"><div className="row">
                      <div className="title">
                        About
                      </div>
                      <div className="dots"></div>
                      <div className="value">245</div>
                    </div></Link>
                    <Link to="/events"> <div className="row">
                      <div className="title">
                        Event
                      </div>
                      <div className="dots"></div>
                      <div className="value">254</div>
                    </div></Link>
                    <Link to="/music-media"> <div className="row">
                      <div className="title">
                        Media
                      </div>
                      <div className="dots"></div>
                      <div className="value">222</div>
                    </div></Link>
                  </div>
                )}
                {selectedButton === "Button 4" && (
                  <div className="table">
                    <div className="row">
                      <div className="title">Horoscop</div>
                      <div className="dots"></div>
                      <div className="value">111</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="container-lower">
              <p>
                Zaharenco is a jazz quartet whose music aims to explore the New
                Jazz scene by fusing jazz with classical and rock influences. He
                submits his works to the issue of musical predictability,
                seeking a balance between predictability and uncertainty, and
                thus managing to reach a wide range of emotions.
              </p>
              <div className="colored-box">
                <p>
                  Primordial feelings, his first EP, is an exposition of the 2
                  main topics addressed: the impulsive being and the
                  ever-changing sentimental self.
                </p>
              </div>
              <div className="line-border">
                <div className="line"></div>
                <p>www.zaharen.co</p>
                <div className="line"></div>
              </div>
            </div>
            </div>
            <Footer />
            <div className="place-ex"></div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
