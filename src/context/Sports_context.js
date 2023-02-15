import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/BusinessReducer'
import axios from 'axios'


const SportsContext = createContext();

const API = "https://bs-api-ssos.onrender.com/sports"

const intialState = {
    news: [],
    singleNews: [],
}


const SportsContextProvider = ({children}) => {

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
        <SportsContext.Provider value={{...state, getSingleNews}}>
            {children}
        </SportsContext.Provider>
    )
}

const useSportsContext = () => {
    return(
        useContext(SportsContext)
    )
}

export {SportsContext, SportsContextProvider, useSportsContext}
