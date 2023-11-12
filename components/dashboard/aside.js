import Link from "next/link";
import { FaCalendar, FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Aside = () => {
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
                <Link href="/dashboard" className="flex items-center text-md bg-gray-100 text-indigo-700 py-4 pl-6 div-item mb-2">
                    <FaHome className="text-xl mr-3" />
                    Dashboard
                </Link>
                <Link href="/request" className="flex items-center text-md  text-gray-500 hover:bg-gray-100 hover:text-indigo-500 py-4 pl-6 div-item mb-2">
                    <FaCalendar className="text-xl mr-3 " />
                    Request
                </Link>
                <Link href="/profile" className="flex items-center text-md  text-gray-500 hover:bg-gray-100 hover:text-indigo-500 py-4 pl-6 div-item mb-2">
                    <FaUser className="text-xl mr-3 " />
                    Profile
                </Link>
                <Link href="/settings" className="flex items-center text-md  text-gray-500 hover:bg-gray-100 hover:text-indigo-500 py-4 pl-6 div-item mb-2">
                    <FaCog className="text-xl mr-3 " />
                    Settings
                </Link>
                <Link href="/settings" className="flex items-center text-md  text-gray-500 hover:bg-gray-100 hover:text-indigo-500 py-4 pl-6 div-item mb-2">
                    <FaSignOutAlt className="text-xl mr-3 " />
                    Logout
                </Link>
            </div>
        </div>
    )
}

export default Aside;