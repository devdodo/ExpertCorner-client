import { useState } from 'react';
import supabase, { supabaseUrl } from "../../services/supabase";
import { FaCalendar, FaCheck, FaSignal, FaMoneyBill } from "react-icons/fa";


const Cards = () => {
    return (
        <div className="w-[90%] sm:w-[80%]  mt-9 mx-auto">
            <div className="lg:flex justify-between">
                <div className="w-full lg:w-[23%] bg-white border border-slate-200 py-4 px-4 mb-4 rounded flex">
                    <div className="w-16 h-16 bg-indigo-100 flex justify-center items-center rounded-full mr-4">
                        <FaCalendar className="text-xl text-indigo-700" />
                    </div>
                    <div clasName="">
                        <p className="text-md text-gray-400 font-semibold">Requests</p>
                        <h3 className="text-2xl text-gray-700 font-bold">1</h3>
                    </div>
                </div>
                <div className="w-full lg:w-[23%] bg-white border border-slate-200 py-4 px-4 mb-4 rounded flex">
                    <div className="w-16 h-16 bg-red-100 flex justify-center items-center rounded-full mr-4">
                        <FaCheck className="text-xl text-red-700" />
                    </div>
                    <div clasName="">
                        <p className="text-md text-gray-400 font-semibold">Confirmed Requests</p>
                        <h3 className="text-2xl text-gray-700 font-bold">1</h3>
                    </div>
                </div>
                <div className="w-full lg:w-[23%] bg-white border border-slate-200 py-4 px-4 mb-4 rounded flex">
                    <div className="w-16 h-16 bg-yellow-100 flex justify-center items-center rounded-full mr-4">
                        <FaSignal className="text-xl text-yellow-700" />
                    </div>
                    <div clasName="">
                        <p className="text-md text-gray-400 font-semibold">Recent Service</p>
                        <h3 className="text-2xl text-gray-700 font-bold">Tiler</h3>
                    </div>
                </div>
                <div className="w-full lg:w-[23%] bg-white border border-slate-200 py-4 px-4 mb-4 rounded flex">
                    <div className="w-16 h-16 bg-green-100 flex justify-center items-center rounded-full mr-4">
                        <FaMoneyBill className="text-xl text-green-700" />
                    </div>
                    <div clasName="">
                        <p className="text-md text-gray-400 font-semibold">Total Spent</p>
                        <h3 className="text-2xl text-gray-700 font-bold">₦ 2,000</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;