const RecentNewsReducer = (state, action) => {
    switch(action.type) {
        case "SET_RECENT_NEWS" :
            return{
                ...state,
                recentNews: action.payload,
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

export default RecentNewsReducer