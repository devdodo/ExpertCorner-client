import { useState, useEffect } from 'react';
import supabase from "../../services/supabase";

const RequestTable = ({user}) => {
    const [requestRows, setRequestRows] = useState([])
    const [userId, setUserId] = useState(0)

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
            
            setRequestRows(data);
        }

        getRequest(userId);

    }, []);
    
    return (
        <div className="w-[90%] sm:w-[80%]  my-9 mx-auto">
            <div className="relative overflow-hidden rounded border border-slate-200">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-md text-white uppercase bg-indigo-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-6">
                                Service Name
                            </th>
                            <th scope="col" className="px-6 py-6">
                                Start Date
                            </th>
                            <th scope="col" className="px-6 py-6">
                                End Date
                            </th>
                            <th scope="col" className="px-6 py-6">
                                Number of Days
                            </th>
                            <th scope="col" className="px-6 py-6">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {requestRows.length === 0 ?
                        <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">No result found!</td>
                        </tr> 
                        :
                        requestRows.map((row, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {row.cabins.name}
                                </th>
                                <td className="px-6 py-4">
                                    {row.actualStart}
                                </td>
                                <td className="px-6 py-4">
                                    {row.endDate}
                                </td>
                                <td className="px-6 py-4">
                                    {row.numDays}
                                </td>
                                <td className="px-6 py-4">
                                    {row.status}
                                </td>
                                <td className="px-6 py-4">
                                    <p>View More</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RequestTable;