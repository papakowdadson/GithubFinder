import { createContext,useState } from "react";

export const UserContext=createContext();



function UserContextProvider({children}) {
    const [loading, setLoading] = useState(false);
  const [userData, setuserData] = useState([]);

    const fetchUserData = async (userName) => {
        setLoading(true);
        const params = new URLSearchParams({
          q:userName
        });
          try {
            const response = await fetch(
              `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
            );
            const {items} = await response.json();   
            console.log('===============================res===============')
            console.log(items);
            setuserData(items);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        
      };

      const handleClear=(e)=>{
        e.preventDefault()
        setuserData([]);
      }

  return (
    <UserContext.Provider value={{fetchUserData,handleClear,loading,userData}}>

    <div>{children}</div>
    </UserContext.Provider>
  )
}

export default UserContextProvider