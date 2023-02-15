import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/BusinessReducer'
import axios from 'axios'


const BusinessContext = createContext();

const API = "https://bs-api-ssos.onrender.com/business"

const intialState = {
    news: [],
    singleNews: [],
}


const BusinessContextProvider = ({children}) => {

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
        <BusinessContext.Provider value={{...state, getSingleNews}}>
            {children}
        </BusinessContext.Provider>
    )
}

const useBusinessContext = () => {
    return(
        useContext(BusinessContext)
    )
}

export {BusinessContext, BusinessContextProvider, useBusinessContext}
