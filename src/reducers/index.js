const reducer = (state, action) => {
    
    switch(action.type)
    {
        case 'SET_FAVORITE':
            if(state.myList.filter((items) => items.id === action.payload.id).length === 0) {
                return {
                    ...state,
                    myList: [...state.myList, action.payload],
                    trends: state.trends.filter(item => item.id !== action.payload.id),
                    originals: state.originals.filter(item => item.id !== action.payload.id),
                };
            } else {
                return {
                    ...state,
                };
            }

        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload),
                originals: state.originals.filter(item => item.id !== action.payload.id)
            };

        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            }

        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload,
            }

        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload,
            }

        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) 
                || state.original.find(item => item.id === Number(action.payload))
                || []
            }

        case 'GET_VIDEO_SEARCH':
            return {
                ...state,
                searchResult: state.trends.filter((item) => item.title.toLowerCase().search(action.payload.toLowerCase()) !== -1) ||
                state.originals.filter((item) => item.title.toLowerCase().search(action.payload.toLowerCase()) !== -1) || [],
            }

        default:
            return state;
    }

}

export default reducer;