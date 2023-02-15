import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTopStoriesContext2 } from '../context/TopStories2'

const TopStories2 = () => {
    const {news} = useTopStoriesContext2()
  return (
   <div>
    {news.map((curElem) => {
        return  <div class="stories2_img"> 
        <img src={curElem.image}/>
        <div class="stor2_txt">
            <button class="travel1">{curElem.category}</button>
            <br/>
            <br/>
           <NavLink to={`/singlepage4/${curElem.id}`}>
           <h2>{curElem.title}</h2>
           </NavLink>
            <br/>
            <div class="stor2_p">
                <p>{curElem.owner}</p>
               
            </div>
        </div>
        
    </div>
    })}
   </div>
  )
}

export default TopStories2