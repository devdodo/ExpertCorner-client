import { useState, useEffect } from 'react';
import { FaCalendar, FaComment, FaCheck } from "react-icons/fa";
import { format, isToday } from "date-fns";
import supabase from "../../services/supabase";

const RequestBox = ({requestId}) => {
    const [requestData, setRequestData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getRequest = async (id) => {
        const { data, error } = await supabase
          .from("requests")
          .select("*, cabins(name)")
          .eq("id", id);
      
        if (error) {
          console.error(error);
        }

        getPrice(data[0].vendorId);
    
        setRequestData(data);
    }

    const getPrice = async (id) => {
        const { data, error } = await supabase
          .from("vendors")
          .select("service_charge")
          .eq("id", id);
      
        if (error) {
          console.error(error);
        }
    
        setTotalPrice(data);
    }

    useEffect(() => {
        getRequest(requestId);
    }, []);
    
    return (
        <div className="w-[90%] sm:w-[80%]  mt-9 mb-9 mx-auto">
            {requestData.length > 0 ? 
            <div className="bg-white rounded overflow-hidden">
                <div className="p-8 bg-indigo-700 flex items-center justify-between">
                    <div className="flex items-center">
                        <FaCalendar className="text-gray-200 text-2xl mr-4 font-bold" />
                        <h3 className="text-xl text-gray-200 font-bold">
                            {requestData[0].cabins.name} for {requestData[0].numDays > 1 ?`${requestData[0].numDays} Days`: `${requestData[0].numDays} Day`}
                        </h3>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-100 text">
                            {format(new Date(requestData[0].actualStart), "EEE, MMM dd yyyy")} - {format(new Date(requestData[0].endDate), "EEE, MMM dd yyyy")}
                        </h3>
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-gray-600 flex items-center mb-4">
                        <div>
                            <FaComment className="text-indigo-500 text-lg mr-4 font-bold" />
                        </div>
                        <div className="flex">
                            <h3 className="font-bold text-lg mr-6">Task Details:</h3>
                            <h3 className="font-medium text-lg">{requestData[0].taskDescription}</h3>
                        </div>
                    </div>
                    <div className="text-gray-600 flex items-center mb-4">
                        <div>
                            <FaCheck className="text-indigo-500 text-lg mr-4 font-bold" />
                        </div>
                        <div className="flex">
                            <h3 className="font-bold text-lg mr-6">Special Request:</h3>
                            <h3 className="font-medium text-lg">{requestData[0].observation}</h3>
                        </div>
                    </div>
                    
                    <div className="text-gray-600 flex items-center mb-8">
                        <div>
                            <FaCalendar className="text-indigo-500 text-lg mr-4 font-bold" />
                        </div>
                        <div className="flex">
                            <h3 className="font-bold text-lg mr-6">Duration (Days):</h3>
                            <h3 className="font-medium text-lg">{requestData[0].numDays}</h3>
                        </div>
                    </div>

                    <div className={`${requestData[0].status === "unconfirmed"? "bg-yellow-100 text-yellow-600": "bg-green-200 text-green-700"} px-8  py-6 mb-6 rounded flex justify-between`}>
                        <h3 className="text-xl font-bold">Total Cost: <span className="font-medium">₦ {totalPrice.length > 0 ? totalPrice[0].service_charge :"" }</span></h3>
                        <h3 className="text-md font-bold">{requestData[0].status}</h3>
                    </div>
                    <div className="flex justify-end">
                        <p className="text-xs font-bold text-gray-500">Requested: {format(new Date(requestData[0].created_at), "EEE, MMM dd yyyy")}</p>
                    </div>
                </div>
            </div>
            : 
            "Wait"}
        </div>
    )
}

export default RequestBox;