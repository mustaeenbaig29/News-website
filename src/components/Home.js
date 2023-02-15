import React from 'react'
import HeroSection from './HeroSection'
import '../Global.css'
import RecentNews from './RecentNews'
import TopStories from './TopStories'
import TopStories2 from './TopStories2'
import TrendingStories from './TrendingStories'

const Home = () => {
  return (
   <>
    <div className="hero_section">
        <div className="hero_section_boxes">
            <HeroSection/>
            <div className="hero_section_content_2">
                <h2>Recent News</h2>
               <RecentNews/>
            </div>
        </div>
    </div>

    <div class="top_stories">
    <div class="txt">
        <h1>Top Stories</h1>
    </div>
    <div class="stories1">
      <TopStories/>
    </div>
    <div class="stories2">
       <TopStories2/>
    </div>
   </div>

   <div class="trending_news">
        <div class="txt">
            <h1>Trending News</h1>
        </div>
        <br/>
        <br/>
        <div class="trending_news_card">
            <TrendingStories/>
    </div>
    </div>
    
    

  

    
   </>
  )
}

export default Home