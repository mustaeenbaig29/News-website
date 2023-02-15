import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from '../reducer/RecentNewsReducer'


const RecentNewsContext = createContext();

const API = "https://bs-api-ssos.onrender.com/recent_news"

const intialState = {
    recentNews: [],
    singleNews: [],
}

const RecentNewsProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, intialState)
    
    const getNews = async (url) => {
       try {
        const res = await axios.get(url);
        const recentNews = await res.data;
        dispatch({type: "SET_RECENT_NEWS", payload: recentNews})
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
        <RecentNewsContext.Provider value={{...state,getSingleNews}}>
            {children}
        </RecentNewsContext.Provider>
    )
}

const useRecentNewsContext = () => {
    return(
        useContext(RecentNewsContext)
    )
}

export {RecentNewsContext, RecentNewsProvider, useRecentNewsContext}
