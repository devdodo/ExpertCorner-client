import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import supabase, { supabaseUrl } from "../../services/supabase";

const RequestForm = () => {
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
        <div className="w-[90%] sm:w-[80%]  mt-9 mx-auto">
            <div className="bg-white p-8 rounded overflow-hidden">
                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="service-dropdown">
                            Service
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-state" onChange={(e) => setService(e.target.value)}>
                                <option value="">Select a service</option>
                                <option value="196">Tiler</option>
                                <option value="196">Barber</option>
                                <option value="196">Math Teacher</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="grid-first-name">
                                Start Date
                            </label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="w-full py-3 px-4 pr-8 leading-tight border bg-gray-200 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                                placeholderText="Select Start Date"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="grid-last-name">
                                End Date
                            </label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                className="w-full py-3 px-4 pr-8 leading-tight border bg-gray-200 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                                placeholderText="Select End Date"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="grid-password">
                                Request Description
                            </label>
                            <textarea
                            placeholder="Describe your request"
                            className="w-full p-2 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="grid-city">
                            Number of Days
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-city" type="number" placeholder="0" onChange={(e) => setDuration(e.target.value)} />
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="w-full py-2 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RequestForm;