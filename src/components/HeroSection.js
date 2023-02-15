import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNewsContext } from '../context/NewsContext'
import '../Global.css'

const HeroSection = () => {

    const {news} = useNewsContext();

  return (
   <div>
    {
        news.map((curElem, index) => {
            return  <div className="hero_section_content" key={index}>
           <NavLink to={`/singlepage1/${curElem.id}`}>
           <img src={curElem.image}/>
            <div className="hero_section_txt">
                <h1>{curElem.title}</h1>
            </div>
            <div className="hero_section_txt_2">
                <p>{curElem.owner}</p>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <p>{curElem.date}</p>
            </div>
           </NavLink>
        </div>
        })
    }
    
  
    
   </div>

  )
}

export default HeroSection