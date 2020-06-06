const initialState = {
    value: 0,
    anotherValue: 20
}

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE_VALUE":
            return {
                ...state,
                value: state.value + action.payload
            }
            
        case "DECREASE_VALUE":
            return {
                ...state,
                value: state.value - action.payload
            }
                
        default:
            return {
                ...state
            }
    }
}