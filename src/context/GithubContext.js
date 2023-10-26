import { createContext,useReducer } from "react";
import RepoReducer from "./RepoReducer";

export const GithubContext=createContext();



function GithubContextProvider({children}) {
    const initialState={
        repositories:[],
        loading:false,
    }
    const [state,dispatch]= useReducer(RepoReducer,initialState)

    const setLoading=()=>dispatch({type:'SET_LOADING',
})


    const fetchRepoData = async (repoName) => {
      console.log('==============fetching repos============')
        setLoading();
        const params = new URLSearchParams({
          q:repoName
        });
          try {
            const response = await fetch(
              `${process.env.REACT_APP_GITHUB_URL}/search/repositories?${params}`,
              // {
              //   headers: {
              //     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
              //   },
              // }
            );
            const {items} = await response.json();
            console.log(items);
            dispatch({
                type:'GET_REPO',
                payload:items
            })
          } catch (error) {
            console.log(error);
          }
        
      };
      const handleClearRepo=()=>dispatch({
        type:'CLEAR_REPOS'
      })
  return (
    <GithubContext.Provider value={{fetchRepoData,handleClearRepo,loading:state.loading,repositoriesData:state.repositories}}>

    <div>{children}</div>
    </GithubContext.Provider>
  )
}

export default GithubContextProvider