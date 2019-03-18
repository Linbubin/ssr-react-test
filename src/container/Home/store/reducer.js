import { CHANGE_LIST } from './contants';

const initState = {
    newList: [],
    name: 'billy'
};

const reducer = (state=initState, action) => {
    switch(action.type){
        case CHANGE_LIST:
           return {
                ...state,
                newList: action.list
            }
        default:
            return state
    }
}

export default reducer;