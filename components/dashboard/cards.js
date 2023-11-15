import { useState, useEffect } from 'react';
import { FaCalendar, FaCheck, FaSignal, FaMoneyBill } from "react-icons/fa";
import { useSelector } from "react-redux";
import supabase from "../../services/supabase";
import { selectUser } from "../../utilities/slices/userSlice";


const Cards = () => {
    const user = useSelector(selectUser);
    const [allRequests, setAllRequests] = useState(0);
    const [confirmed, setConfirmed] = useState(0);
    const [totalSpent, setTotalSpent] = useState("");
    const [topService, setTopService] = useState("");

    useEffect(() => {
        const getRequest = async (id) => {
            const { data, error } = await supabase
              .from("requests")
              .select("*, cabins(name)")
              .eq("clientId", id);
          
            if (error) {
              console.error(error);
              throw new Error("Request not found");
            }

            const confirmed = data.filter((data) => data.status === "checked-out")
            let totalPrice = 0;
            let serviceArray = [];
            confirmed.forEach((val) => {
                totalPrice += val.totalPrice
            })
            data.forEach((val) => {
                serviceArray.push(val.cabins.name)
            })

            const mode = (arr) => {
                return arr.sort((a,b) =>
                      arr.filter(v => v===a).length
                    - arr.filter(v => v===b).length
                ).pop();
            }
            
            setAllRequests(data.length)
            setConfirmed(confirmed.length)
            setTotalSpent(totalPrice)
            setTopService(mode(serviceArray))

            console.log(data)
        }

        getRequest(4);

    }, []);
    
    console.log(allRequests)

    return (
        <div className="w-[90%] sm:w-[80%]  mt-9 mx-auto">
            <div className="lg:flex justify-between">
                <div className="w-full lg:w-[23%] bg-white border border-slate-200 py-4 px-4 mb-4 rounded flex">
                    <div className="w-16 h-16 bg-indigo-100 flex justify-center items-center rounded-full mr-4">
                        <FaCalendar className="text-xl text-indigo-700" />
                    </div>
                    <div className="">
                        <p className="text-md text-gray-400 font-semibold">All Requests</p>
                        <h3 className="text-2xl text-gray-700 font-bold">{allRequests}</h3>
                    </div>
                </div>
                <div className="w-full lg:w-[23%] bg-white border border-slate-200 py-4 px-4 mb-4 rounded flex">
                    <div className="w-16 h-16 bg-red-100 flex justify-center items-center rounded-full mr-4">
                        <FaCheck className="text-xl text-red-700" />
                    </div>
                    <div className="">
                        <p className="text-md text-gray-400 font-semibold">Confirmed Requests</p>
                        <h3 className="text-2xl text-gray-700 font-bold">{confirmed}</h3>
                    </div>
                </div>
                <div className="w-full lg:w-[23%] bg-white border border-slate-200 py-4 px-4 mb-4 rounded flex">
                    <div className="w-16 h-16 bg-yellow-100 flex justify-center items-center rounded-full mr-4">
                        <FaSignal className="text-xl text-yellow-700" />
                    </div>
                    <div className="">
                        <p className="text-md text-gray-400 font-semibold">Top Service</p>
                        <h3 className="text-2xl text-gray-700 font-bold">{topService}</h3>
                    </div>
                </div>
                <div className="w-full lg:w-[23%] bg-white border border-slate-200 py-4 px-4 mb-4 rounded flex">
                    <div className="w-16 h-16 bg-green-100 flex justify-center items-center rounded-full mr-4">
                        <FaMoneyBill className="text-xl text-green-700" />
                    </div>
                    <div className="">
                        <p className="text-md text-gray-400 font-semibold">Total Spent</p>
                        <h3 className="text-2xl text-gray-700 font-bold">₦ {totalSpent}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;