import { useState ,useEffect} from 'react'
import './App.css'
import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import LandingPage from './Landing';
import Blog from './Blogs';
import Jazz from "./Jazz"
import Home from './Home';

function App() {


  const bioText=`Alexandru Zaharencu is a musician, composer, and multimedia artist. His music is distinguished by a dramatic component, a balance of predictability and honesty, and an approach to various genres ranging from jazz to contemporary music, film music, or sound design.
  He was born in Tulcea, Romania, in 1998, and spent 12 years there studying classical piano performance. He continued his education at the National University of Music in Bucharest, where he earned bachelor's degrees in jazz-pop composition under Andrei Tudor and a master's in modern composition under Diana Rotaru.
  As a composer, he has worked on numerous film and theater music projects, as well as advertising and choreographic projects. He additionally exhibited interactive installations such as Primordial feelings, an audio-visual installation based on the conversion of cathode ray tube TVs into oscilloscopes, which was shown at the Diploma 2021 festival, and Catoptro-tono v.1, which is based on catoptrophobia, the fear of mirrors, which was presented at arca.expo 1.3. In addition to his artistic work, he has worked as an audio engineer for music and film sound, as well as a sound designer or foley artist. Since 2021, he has been leading his fusion band Zaharenco, which combines jazz, classical architecture, and rock influences.
  `
const spotify = <div className='inspo-section'>
<iframe className='spotify' src="https://open.spotify.com/embed/track/1Qrg8KqiBpW07V7PNxwwwL?utm_source=generator&theme=0" width="100%" height="152px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe className='spotify' src="https://open.spotify.com/embed/track/1Qrg8KqiBpW07V7PNxwwwL?utm_source=generator&theme=0" width="100%" height="152px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe className='spotify' src="https://open.spotify.com/embed/track/1Qrg8KqiBpW07V7PNxwwwL?utm_source=generator&theme=0" width="100%" height="152px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe className='spotify' src="https://open.spotify.com/embed/track/1Qrg8KqiBpW07V7PNxwwwL?utm_source=generator&theme=0" width="100%" height="152px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>

  const mediaPhotos= <div className='media'>
      <img src="https://raw.githubusercontent.com/paluras/new/master/src/assets/Zahar/zahar3.JPG" alt="" />
      <img src="https://raw.githubusercontent.com/paluras/new/master/src/assets/Zahar/zahar2.JPG" alt="" />
      <img src="https://raw.githubusercontent.com/paluras/new/master/src/assets/Zahar/zahar4.JPG" alt="" />
      <img src="https://raw.githubusercontent.com/paluras/new/master/src/assets/Zahar/zahar5.png" alt="" />
      <img src="https://raw.githubusercontent.com/paluras/new/master/src/assets/Zahar/zahar6.JPG" alt="" />
      <img src="https://raw.githubusercontent.com/paluras/new/master/src/assets/Zahar/zahar7.jpg" alt="" />
  </div>
  const contacts = <div className="contact-text">
   <div><a href="mailto:zaharencu.alexandru@gmail.com?">Mail</a> </div>
    <div><a href='https://www.facebook.com/zaharen.co'>Facebook</a></div>
    <div><a href='https://www.instagram.com/zaharen.co/'>Instagram</a></div>
    <div><a href='https://www.youtube.com/@zaharenco'>Youtube</a></div>
    <div><a href='https://open.spotify.com/artist/4azDTEsE76hndB8paNOEe8?si=dBL-mht3RRapA-CO_-miEg&fbclid=IwAR2IwJVZyvZxF0uPJiI8uBJBqBTCiKa0-0b0wqabiZUxj5rDimbykAR5saY&nd=1'>Spotify</a></div>
    <div><a href='https://linktr.ee/zaharen.co?utm_source=linktree_profile_share&ltsid=56442ba0-afdf-4bbd-8046-e6c2f7bf8572'>LinkTree</a></div>
  </div>

const navItems = [
  { text: 'Bio', url: '/bio' },
  { text: 'Photos', url: '/photos' },
  { text: 'Inspo', url: '/inspiration' },
  { text: "Contact",url:"/contacts"}
]

const navItemsPort = [
  { text: 'Music', url: '/music' },
  { text: 'Film Composition', url: '/film' },
  { text: 'Multimedia Art', url: '/visual' },
  { text: "Mixing",url:"/mixing"}
]


  return (
   
      <>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/bio" element={<Blog 
        textBlog={bioText}
        tittleBlog={"Bio"}
        navItems={navItems}
         />}/>
        <Route path="/photos" element={<Blog 
        textBlog={"Photo photo photo"}
        tittleBlog={"Photos"}
        media={mediaPhotos}
        navItems={navItems}
         />}/>
        <Route path="/contacts" element={<Blog 
        textBlog={""}
        tittleBlog={"Contacts"}
        contact={contacts}
        navItems={navItems}
         />}/>
        <Route path="/inspiration" element={<Blog 
        textBlog={spotify}
        tittleBlog={"Inspiration"}
        navItems={navItems}
        />}/>
        <Route path="/music" element={<Blog 
        textBlog={"Music"}
        tittleBlog={"Music"}
        navItems={navItemsPort}

        />}/>
        <Route path="/film" element={<Blog 
        textBlog={"text"}
        tittleBlog={"Film Composition"}
        navItems={navItemsPort}
        />}/>
        <Route path="/visual" element={<Blog 
        textBlog={"text"}
        tittleBlog={"Visual"}
        navItems={navItemsPort}
        />}/>
        <Route path="/mixing" element={<Blog 
        textBlog={"text"}
        tittleBlog={"Mixing"}
        navItems={navItemsPort}
        />}/>
        <Route path="/jazz" element={<Jazz />}/>
      </Routes>
    
      </>
  )
}

export default App
