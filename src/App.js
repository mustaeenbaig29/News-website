import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Business from './components/Business';
import LifeStyle from './components/LifeStyle';
import Technology from './components/Technology';
import Sports from './components/Sports';
import HeroSectionDetails from './components/HeroSectionDetails';
import RecentNewsDetails from './components/RecentNewsDetails';
import TopStoriesDetails from './components/TopStoriesDetails';
import TopStoriesDetails2 from './components/TopStoriesDetails2';
import TrendingNewsDetails from './components/TrendingNewsDetails';
import LifeStyleDetails from './components/LifeStyleDetails';
import BusinessDetails from './components/BusinessDetails';
import TechnologyDetails from './components/TechnologyDetails';
import SportsDetails from './components/SportsDetails';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/business' element={<Business/>}/>
      <Route exact path='/lifestyle' element={<LifeStyle/>}/>
      <Route exact path='/technology' element={<Technology/>}/>
      <Route exact path='/sports' element={<Sports/>}/>
      <Route exact path='/singlepage1/:id' element={<HeroSectionDetails/>}/>
      <Route exact path='/singlepage2/:id' element={<RecentNewsDetails/>}/>
      <Route exact path='/singlepage3/:id' element={<TopStoriesDetails/>}/>
      <Route exact path='/singlepage4/:id' element={<TopStoriesDetails2/>}/>
      <Route exact path='/singlepage5/:id' element={<TrendingNewsDetails/>}/>
      <Route exact path='/singlepage6/:id' element={<LifeStyleDetails/>}/>
      <Route exact path='/singlepage7/:id' element={<BusinessDetails/>}/>
      <Route exact path='/singlepage8/:id' element={<TechnologyDetails/>}/>
      <Route exact path='/singlepage9/:id' element={<SportsDetails/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
