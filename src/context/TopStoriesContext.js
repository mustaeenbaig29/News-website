import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/NewsReducer'
import axios from 'axios'



const TopStoriesContext = createContext();

const API = "https://bs-api-ssos.onrender.com/top_stories"

const intialState = {
    news: [],
}

const TopStoriesProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, intialState)
    
    const getNews = async (url) => {
       try {
        const res = await axios.get(url);
        const news = await res.data;
        dispatch({type: "SET_NEWS", payload: news})
        console.log(news)
       } catch (error) {
        dispatch({type: "ERROR"})
       }
    }

    useEffect(()=>{
        getNews(API)
    }, [])


    return(
        <TopStoriesContext.Provider value={{...state}}>
            {children}
        </TopStoriesContext.Provider>
    )
}

const useTopStoriesContext = () => {
    return(
        useContext(TopStoriesContext)
    )
}

export {TopStoriesContext, TopStoriesProvider, useTopStoriesContext}
