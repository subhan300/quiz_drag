
export default (state, action) => {
    switch(action.type) {
     
        case 'ADD_RESULT':
            console.log(action.payload,"paylad")
            return {
                ...state,
                 result: [action.payload,...state.result]
            }
        case "COUNTER":
            return {
                counter:state.counter++
            }
        default:
            return state;
    }
}