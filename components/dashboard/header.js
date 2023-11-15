import Link from 'next/link';
import { FaBars, FaUserCircle } from "react-icons/fa";

const Header = ({user}) => {
    return (
        <>
            <div className="h-20 bg-white py-2 px-6 border-b border-b-slate-200">
                <div className="flex justify-between md:justify-end">
                    <div className="pt-3 block md:hidden">
                        <Link href="index.html" className="w-full text-3xl flex justify-center">
                            <img src="../../img/new-logo.png" className="w-28" />
                        </Link>
                    </div>
                    <div className="pt-3 hidden md:block">
                        <div className="flex">
                            <div className="text-md font-semibold text-gray-500 mr-4">{user.user.user_metadata.fullName     }</div>
                            <div>
                                <FaUserCircle className="text-3xl text-gray-600" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-3 block md:hidden">
                        <FaBars className="text-3xl" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;