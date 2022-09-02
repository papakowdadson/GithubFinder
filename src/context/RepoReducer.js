

const RepoReducer = (state,action) => {
    switch (action.type) {
        case 'GET_REPO':
            return{
                ...state,
                repositories: action.payload,
                loading: false,

            }
        case 'SET_LOADING':
            return{
                ...state,
                loading:true,

            }
        case 'CLEAR_REPOS':
                return{
                    ...state,
                    repositories:[],
                }
            
        default:
            return state;
    }
  
}

export default RepoReducer