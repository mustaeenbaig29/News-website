import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/NewsReducer'
import axios from 'axios'



const NewsContext = createContext();

const API = "https://bs-api-ssos.onrender.com/hero_section"

const intialState = {
    news: [],
}

const NewsProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, intialState)
    
    const getNews = async (url) => {
       try {
        const res = await axios.get(url);
        const news = await res.data;
        dispatch({type: "SET_NEWS", payload: news})
       } catch (error) {
        dispatch({type: "ERROR"})
       }
    }

    
    useEffect(()=>{
        getNews(API)
    }, [])


    return(
        <NewsContext.Provider value={{...state}}>
            {children}
        </NewsContext.Provider>
    )
}

const useNewsContext = () => {
    return(
        useContext(NewsContext)
    )
}

export {NewsContext, NewsProvider, useNewsContext}
