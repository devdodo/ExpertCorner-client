import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../utilities/slices/userSlice";
import { useRouter } from "next/router";

const isAuthenticated = () => {
    const user = useSelector(selectUser);
    const checkAuth = user.isAuthenticated;
    
    useEffect(() => {
        if(!checkAuth){
            const router = useRouter();
            router.push("/signin", "/singin");
        }
    }, [])

    return user
}

export default isAuthenticated;
