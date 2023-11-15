import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../utilities/slices/userSlice";
import { useRouter } from "next/router";

const isAuthenticated = () => {
    const user = useSelector(selectUser);
    const checkAuth = user.isAuthenticated;
    const router = useRouter();
    
    useEffect(() => {
        if(checkAuth == false){
            router.push("/signin", "/signin");
        }
    }, [])

    return user
}

export default isAuthenticated;
