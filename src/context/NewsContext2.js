import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/NewsReducer2'
import axios from 'axios'



const NewsContext2 = createContext();

const API = "https://bs-api-ssos.onrender.com/trending_news"

const intialState = {
    news: [],
    singleNews: [],
}

const NewsProvider2 = ({children}) => {

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

    const getSingleNews = async (url) => {
        try {
         const res = await axios.get(url);
         const singleNews = await res.data;
         dispatch({type: "SET_SINGLE_NEWS", payload: singleNews})
        } catch (error) {
         dispatch({type: "ERROR"})
        }
     }

    useEffect(()=>{
        getNews(API)
    }, [])


    return(
        <NewsContext2.Provider value={{...state, getSingleNews}}>
            {children}
        </NewsContext2.Provider>
    )
}

const useNewsContext2 = () => {
    return(
        useContext(NewsContext2)
    )
}

export {NewsContext2, NewsProvider2, useNewsContext2}
