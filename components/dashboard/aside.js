import Link from "next/link";
import { FaCalendar, FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { logout } from "../../utilities/slices/userSlice";
import { useRouter } from 'next/router';


const Aside = ({index}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push("/signin", "/signin");
        return;
    }

    const nav = [
        {
            title: "Dashboard",
            link: "/dashboard",
            icon: <FaHome className="text-xl mr-3" />,
            active: false
        },
        {
            title: "Request",
            link: "/request",
            icon: <FaCalendar className="text-xl mr-3" />,
            active: false
        },
        {
            title: "Profile",
            link: "/profile",
            icon: <FaUser className="text-xl mr-3" />,
            active: false
        },
        // {
        //     title: "Settings",
        //     link: "/settings",
        //     icon: <FaCog className="text-xl mr-3" />,
        //     active: false
        // }
    ]

    nav[index].active = true


    return (
        <div className="bg-white h-screen w-72 hidden fixed md:block border-r border-r-slate-200">
            <div className="p-8 mb-4">
                <Link href="index.html" className="w-full text-3xl flex justify-center">
                    <img src="../../img/new-logo.png" className="w-36" />
                </Link>
                <div className="text-center">
                    <h3 className="mt-4 text-sm font-bold text-gray-300">Control Center</h3>
                </div>
            </div> 
            <div className="flex flex-col text-gray-800 text-base font-semibold pt-3">
                {nav.map((row, index) => (
                    row.active 
                    ?
                    <Link key={index} href={row.link} className="flex items-center text-md bg-gray-100 text-indigo-700 py-4 pl-6 div-item mb-2">
                        {row.icon}
                        {row.title}
                    </Link>
                    : 
                    <Link key={index} href={row.link} className="flex items-center text-md  text-gray-500 hover:bg-gray-100 hover:text-indigo-500 py-4 pl-6 div-item mb-2">
                        {row.icon}
                        {row.title}
                    </Link>
                ))}
                <div onClick={handleLogout} className="flex items-center text-md cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-indigo-500 py-4 pl-6 div-item mb-2">
                    <FaSignOutAlt className="text-xl mr-3" />
                    Logout
                </div>
            </div>
        </div>
    )
}

export default Aside;