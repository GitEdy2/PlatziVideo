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

        default:
            return state;
    }

}

export default reducer;