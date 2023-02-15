import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/BusinessReducer'
import axios from 'axios'


const TechnologyContext = createContext();

const API = "https://bs-api-ssos.onrender.com/technology"

const intialState = {
    news: [],
    singleNews: [],
}


const TechnologyContextProvider = ({children}) => {

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
        <TechnologyContext.Provider value={{...state, getSingleNews}}>
            {children}
        </TechnologyContext.Provider>
    )
}

const useTechnologyContext = () => {
    return(
        useContext(TechnologyContext)
    )
}

export {TechnologyContext, TechnologyContextProvider, useTechnologyContext}
