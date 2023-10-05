import { CREATE_RECIPE } from './action-types';

let initialState = {
    allMyGames: [],
    myGames: [],
    myG: [],
    game: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_RECIPE:
            return {
              ...state, 
              allMyGames: [...state.allMyGames, payload]
            };    

        default:
            return {...state};
    }
};

export default reducer;