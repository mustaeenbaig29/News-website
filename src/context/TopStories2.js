import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/TopStoriesReducer2'
import axios from 'axios'



const TopStoriesContext2 = createContext();

const API = "https://bs-api-ssos.onrender.com/top_stories_2"

const intialState = {
    news: [],
    singleNews: [],
}

const TopStoriesProvider2 = ({children}) => {

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
        <TopStoriesContext2.Provider value={{...state, getSingleNews}}>
            {children}
        </TopStoriesContext2.Provider>
    )
}

const useTopStoriesContext2 = () => {
    return(
        useContext(TopStoriesContext2)
    )
}

export {TopStoriesContext2, TopStoriesProvider2, useTopStoriesContext2}
