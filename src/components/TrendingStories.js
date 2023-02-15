import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNewsContext2 } from '../context/NewsContext2'
import "../Global.css"

const TrendingStories = () => {

    const {news} = useNewsContext2()

  return (
   <>
   {
   news.map((curElem) => {
    return  <div class="trending_news_cards">
        <div class="trending_news_img">
         <img src={curElem.image}/>
        </div>
        <div class="trending_news_txt">
         <button class="travel3">{curElem.category}</button>
         <br/>
         <br/>
        <NavLink to={`singlepage5/${curElem.id}`}>
        <h2>{curElem.title}.</h2>
        </NavLink>
         <br/>
         <div class="trending_news_txt_p">
             <p>{curElem.owner}</p>
         </div>
        </div>
     </div>
   })
   }
   </>
  )
}

export default TrendingStories