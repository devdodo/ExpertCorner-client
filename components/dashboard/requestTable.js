import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import supabase, { supabaseUrl } from "../../services/supabase";

const RequestTable = () => {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [service, setService] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState(0)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault();

        if(startDate !== "" && endDate !== "" && service !== "" && description !== "" && duration !== 0){
            console.log("Check passed line 22")

            const data = {
                actualStart: startDate,
                endDate: endDate,
                status: "unconfirmed",
                observation: "nill",
                clientId: 4,
                taskDescription: description,
                serviceId: service,
                numDays: duration,
                totalPrice: 0,
                isPaid: false,
                regPrice: 0
            }

            const { error } = await supabase.from("requests").insert(data);
            if (error) {
                console.log(error.message);
            }else{
                console.log("Insertion successful");

                setStartDate("")
                setEndDate("")
                setService("")
                setDescription("")
                setDuration(0)
            }

        }else{
            setError(true)
            setErrorMessage("Kindly fill all the fields in the form.")
        }
    }

    return (
        <div className="w-[90%] sm:w-[80%]  my-9 mx-auto">
            <div class="relative overflow-hidden rounded border border-slate-200">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-md text-white uppercase bg-indigo-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-6">
                                Service Name
                            </th>
                            <th scope="col" class="px-6 py-6">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-6">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-6">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RequestTable;