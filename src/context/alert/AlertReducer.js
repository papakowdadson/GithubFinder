
const alertReducer =(action,state)=>{
    switch (action.type) {
        case 'SET_ALERT':
           return action.payoad ;
        
        case 'REMOVE_ALERT':
            return null;
        default:
           return state ;
    }
};
export default alertReducer;