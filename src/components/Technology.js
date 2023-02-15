import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTechnologyContext } from '../context/Technology_context';

const Technology = () => {

    const {news} = useTechnologyContext();

  return (
   <>
    <div class="page_navigation">
    <h1>Category: Technology</h1>
</div>
   <div className='listing'>
   <div class="trending_news">
        <div class="trending_news_card">
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
               <NavLink to={`/singlepage8/${curElem.id}`}>
               <h2>{curElem.title}</h2>
               </NavLink>
               <br/>
               <div class="trending_news_txt_p">
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
        </div> 
    </div>
   </div>
   </>
  )
}

export default Technology