import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NewsProvider } from './context/NewsContext';
import { RecentNewsProvider } from './context/RecentNews';
import { TopStoriesProvider } from './context/TopStoriesContext';
import { TopStoriesProvider2 } from './context/TopStories2';
import { NewsProvider2 } from './context/NewsContext2';
import { BusinessContextProvider } from './context/BusinessContext';
import { LifestyleContextProvider } from './context/Lifestyle_context';
import { TechnologyContextProvider } from './context/Technology_context';
import { SportsContextProvider } from './context/Sports_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <NewsProvider>
   <RecentNewsProvider>
  <TopStoriesProvider>
  <TopStoriesProvider2>
  <NewsProvider2>
  <BusinessContextProvider>
  <LifestyleContextProvider>
  <TechnologyContextProvider>
  <SportsContextProvider>
  <App/>
  </SportsContextProvider>
  </TechnologyContextProvider>
  </LifestyleContextProvider>
  </BusinessContextProvider>
  </NewsProvider2>
  </TopStoriesProvider2>
  </TopStoriesProvider>
   </RecentNewsProvider>
   </NewsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
