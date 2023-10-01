import {  createContext } from "react";
import App from "../App";



export const userContext = createContext(null);



const UserProvider = ({children}) => {

const obj = {
    name: 'Rahim Badsa'
}

    return (
        <userContext.Provider value={obj}> 
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;