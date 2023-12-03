import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../../utilities/slices/userSlice";
import Link from 'next/link';
import supabase from "../../services/supabase";

const RequestTable = () => {
    const userData = useSelector(selectUser);
    const [requestRows, setRequestRows] = useState([])
    const {user, isAuthenticated} = userData;
    const [{id}] = user
    const [userId, setUserId] = useState(id)

    useEffect(() => {

        const getRequest = async (id) => {
            const { data, error } = await supabase
              .from("requests")
              .select("*, cabins(name)")
              .eq("clientId", id);
          
            if (error) {
              console.error(error);
              return
            }
            
            setRequestRows(data);
        }

        getRequest(userId);

    }, []);
    
    return (
        <div className="w-[90%] sm:w-[80%]  my-9 mx-auto">
            <div className="relative overflow-x-auto rounded border border-slate-200">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-md text-white uppercase bg-indigo-700">
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
                    {requestRows.length !== 0 ?
                        <tbody>
                        {
                            requestRows.map((row, index) => (
                                <tr key={index} className="bg-white border-b  dark:border-gray-700 font-bold">
                                    <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-gray-700">
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
                                        <Link href={`/request/${row.id}`} className="bg-indigo-700 hover:bg-indigo-900 py-1 px-6 rounded text-white">
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                        : ""
                        }
                </table>
                {requestRows.length === 0
                ?
                    <div className="w-[100%] text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">No result found!</div>
                    </div>
                :
                ""
                }
            </div>
        </div>
    )
}

export default RequestTable;