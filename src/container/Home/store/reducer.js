import { createStore } from 'redux';

const initState = {
    newList: [],
    name: 'billy'
};

const reducer = (state=initState, action) => {
    // switch(action.type){
    //     default:
    //         return state
    // }
    return state
}

export default reducer;