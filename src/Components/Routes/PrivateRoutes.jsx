
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    const location = useLocation();
    // console.log(location.pathname);
    if(loading){
        return <span className="loading flex justify-center items-center mx-auto my-72 loading-spinner loading-lg"></span>
    }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;