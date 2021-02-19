import React, {useState, useEffect, useContext} from "react";


const AppContext = React.createContext()

const AppProvider = ({children}) => {
const [show, setShow] = useState(false);
const [value, setValue] = useState("")
const [error, setError] = useState({type:false, msg:""})
const handleSubmit = (e) => {
    var mailformat = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
    e.preventDefault();
    if(value.match(mailformat)){
        setError({type:false, msg:""})
    }if(value === ""){
        setError({type:true, msg:"Enter Email Address"})
    }
    else{
        setError({type:true, msg:"Invalid Email Address"})
    }
}
return (
    <AppContext.Provider value={{show, setShow, value,setValue, error, handleSubmit}}>
        {children}
    </AppContext.Provider>
)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppProvider, AppContext}