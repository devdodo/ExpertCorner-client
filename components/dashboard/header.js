import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../../utilities/slices/userSlice";
import { useRouter } from "next/router";
import { FaCalendar, FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../utilities/slices/userSlice";

const Header = () => {
    const user = useSelector(selectUser);
    const checkAuth = user.isAuthenticated;
    const dispatch = useDispatch();
    const router = useRouter();
    const [toggle, setToggle] = useState(false) 

    console.log(user.user)

    useEffect(() => {
        if(checkAuth == false){
            router.push("/signin", "/signin");
        }
    }, [])

    console.log(user);

    const handleLogout = () => {
        dispatch(logout());
        router.push("/signin", "/signin");
        return;
    }

    const toggleNav = () => {
        if(toggle){
            setToggle(false)
        }else{
            setToggle(true)
        }
    }

    const nav = [
        {
            title: "Dashboard",
            link: "/dashboard",
            icon: <FaHome className="text-lg mr-3" />,
            active: false
        },
        {
            title: "Request",
            link: "/request",
            icon: <FaCalendar className="text-lg mr-3" />,
            active: false
        },
        {
            title: "Profile",
            link: "/profile",
            icon: <FaUser className="text-lg mr-3" />,
            active: false
        },
        // {
        //     title: "Settings",
        //     link: "/settings",
        //     icon: <FaCog className="text-lg mr-3" />,
        //     active: false
        // }
    ]

    return (
        <>
            <div className="fixed w-full h-min bg-white py-2 px-6 border-b border-b-slate-200 z-40">
                <div className="w-full md:w-[75%] flex justify-between md:justify-end">
                    <div className="pt-3 block md:hidden">
                        <Link href="/dashboard" className="w-full text-3xl flex justify-center">
                            <img src="../../img/new-logo.png" className="w-28" />
                        </Link>
                    </div>
                    <div className="pt-3 hidden md:block md:justify-end">
                        <div className="flex">
                            <div className="text-md font-semibold text-gray-500 mr-4">{user.user !== null?user.user[0].fullName:"" }</div>
                            <div>
                                <FaUserCircle className="text-3xl text-gray-600" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-3 block md:hidden">
                        <FaBars className="text-3xl text-black" onClick={toggleNav} />
                    </div>
                </div>
                
                <div className={`${toggle?"flex flex-col":"hidden"} text-gray-800 text-base font-semibold pt-3`}>
                    {nav.map((row, index) => (
                        row.active 
                        ?
                        <Link key={index} href={row.link} className="flex items-center text-sm bg-gray-100 text-indigo-700 py-4 pl-6 div-item mb-2">
                            {row.icon}
                            {row.title}
                        </Link>
                        : 
                        <Link key={index} href={row.link} className="flex items-center text-sm  text-gray-500 hover:bg-gray-100 hover:text-indigo-500 py-4 pl-6 div-item mb-2">
                            {row.icon}
                            {row.title}
                        </Link>
                    ))}
                    <div onClick={handleLogout} className="flex items-center text-sm cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-indigo-500 py-4 pl-6 div-item mb-2">
                        <FaSignOutAlt className="text-lg mr-3" />
                        Logout
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;