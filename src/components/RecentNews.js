import React from 'react'
import { NavLink } from 'react-router-dom';
import { useRecentNewsContext } from '../context/RecentNews'
import '../Global.css'

const RecentNews = () => {


  const {recentNews} = useRecentNewsContext();

  return (
   <div>
    {
      recentNews.map((curElem) => {
        return(
          <div class="news">
                    
                    <img src={curElem.image}/>
                    <div class="news_txt">
                        <button class="travel">{curElem.category}</button>
                        <br/>
                        <br/>
                        <NavLink to={`/singlepage2/${curElem.id}`}>
                        <h2>{curElem.title}</h2>
                        </NavLink>
                            <p className='p'>{curElem.owner}</p>
                    </div>
                </div>
        )
      })
    }
   </div>
  )
}

export default RecentNews