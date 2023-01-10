export const initialState = {
    user: null,
    playlist :[],
    playing:false,
    item: null,
   //REMOVE AFTER FINISHED DEVELOPING..
    // token:
    // 'BQBSZLPJytzqSXacPhgpg2pbm6qpfM3jAz2tL-pZYwqe29-ncgwNvfJnSxeJ4871z3xOcbyWp3LKZPynnSGSXJb8Mas5M1gw_-QFTfG6hBPgB48mZ9eYvsXyi9WFxx73pyyb-8OoYyq1KnDETESesRoyyDgWra1Z3xeIUNBV1a7mschHkNiTJ2D1_xcla60'


};

const reducer = (state,action) => {
    console.log(action);
    //Action -> type ,[payload]
    switch (action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user:action.user
            };
            case 'SET_TOKEN':
            return {
                ...state,
                token : action.token
            }
            
            case 'SET_PLAYLISTS' :
                return{
                    ...state,
                    playlists : action.playlists
                }

                case 'SET_DISCOVER_WEEKLY':
                    return {
                        ...state,
                        discover_weekly: action.discover_weekly,
                    }
            default:
                
    }
}

export default reducer;