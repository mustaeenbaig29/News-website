import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTopStoriesContext } from '../context/TopStoriesContext'

const TopStories = () => {

  const {news} = useTopStoriesContext()

  return (
    <>
    {
      news.map((curElem) => {
    return    <div class="stories1_img">
      <img src={curElem.image}/>
        <div class="stor_txt">
            <button class="travel1">{curElem.category}</button>
            <br/>
            <br/>
            <NavLink to={`singlepage3/${curElem.id}`}>
            <h2>{curElem.title}</h2>
            </NavLink>
            <br/>
            <div class="stor_p">
                <p>{curElem.owner}</p>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
            <p>{curElem.date}</p>
            </div>
        </div>
      </div>
      })
    }
    </>
  )
}

export default TopStories