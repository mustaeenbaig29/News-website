const NewsReducer = (state, action) => {
    switch(action.type) {
       case "SET_NEWS" :
           return{
               ...state,
               news: action.payload,
           }

       case "SET_SINGLE_NEWS" :
           return{
               ...state,
               singleNews: action.payload,
           }
   
   
       default:
           return state
    }
   }
   
   export default NewsReducer