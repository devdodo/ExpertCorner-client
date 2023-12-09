import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import supabase from "../../services/supabase";
import Loader from "../../utilities/loader";
import { useSelector } from "react-redux";
import { selectUser } from "../../utilities/slices/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestForm = () => {
    const userData = useSelector(selectUser);
    const [userNIN] = useState(userData.user[0].NIN)
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [service, setService] = useState("")
    const [vendor, setVendor] = useState("")
    const [description, setDescription] = useState("")
    const [specialRequest, setSpecialRequest] = useState("")
    const [duration, setDuration] = useState(0)
    const [price, setPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [serviceList, setServiceList] = useState([])
    const [vendorList, setVendorList] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [vendorDetails, setVendorDetails] = useState([])

    console.log();

    const {user, isAuthenticated} = userData;
    const [{id}] = user;

    const [clientId, setClientId] = useState(id);

    useEffect(() => {
        getServiceList();
    }, []);

    const getServiceList = async () => {
        const { data, error } = await supabase
          .from("cabins")
          .select("id, name");
      
        if (error) {
          return
        }
        
        setServiceList(data);

    }

    const getVendorList = async (id) => {
        const serviceId = parseInt(id);

        const { data, error } = await supabase
          .from("vendors")
          .select("*")
          .eq("serviceTag", serviceId);
      
        if (error) {
          toast.error("No vendor found", {
            position: toast.POSITION.TOP_CENTER
        });
        }
        
        setVendorList(data);
    }

    const getPrice = async (id) => {

        const { data, error } = await supabase
          .from("vendors")
          .select("service_charge")
          .eq("id", id);
      
        if (error) {
          toast.error("No vendor found", {
            position: toast.POSITION.TOP_CENTER
        });
        }

        setPrice(data[0].service_charge);
        setTotalPrice(data[0].service_charge)
    }

    const handleVendorPrice = (vendorId) => {
        getPrice(vendorId)
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);

        if(startDate !== "" && endDate !== "" && service !== "" && description !== "" && duration !== 0 && vendor !== "" && specialRequest !== ""){
            getPrice(vendor)
            
            const total = parseInt(duration) * parseInt(price);

                const data = {
                    actualStart: startDate.toLocaleDateString(),
                    endDate: endDate.toLocaleDateString(),
                    status: "unconfirmed",
                    observation: specialRequest,
                    clientId,
                    taskDescription: description,
                    serviceId: service,
                    numDays: duration,
                    totalPrice: total,
                    isPaid: false,
                    regPrice: total,
                    vendorId: vendor
                }

                const { error } = await supabase.from("requests").insert(data);
                if (error) {
                    toast.error(error.message, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }else{
                    toast.success("Successful Request.", {
                        position: toast.POSITION.TOP_CENTER
                    });

                    setLoading(false);

                    setStartDate("")
                    setEndDate("")
                    setService("")
                    setDescription("")
                    setVendor("")
                    setSpecialRequest("")
                    setDuration(0)
                }

        }else{
            setLoading(false);
            setError(true)
            
            toast.error("Kindly fill all the fields in the form.", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    return (
        <div className="w-[90%] sm:w-[80%]  mt-9 mx-auto">
            <div className="bg-white p-8 rounded overflow-hidden">
                {userNIN === ""?<div><p className="block text-gray-700 text-md font-bold mb-2">Kindly update Profile NIN and Phone Number to request for services!</p></div> :
                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="service-dropdown">
                                Service
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-state" onChange={(e) => setService(e.target.value)} onBlur={(e) => getVendorList(e.target.value)}>
                                    <option value="">Select a service</option>
                                    {serviceList.map((service, index) => (
                                        <option key={index} value={service.id}>{service.name}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="service-dropdown">
                                Choose Vendor
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-state" onChange={(e) => setVendor(e.target.value)} onBlur={(e) => handleVendorPrice(e.target.value)}>
                                    <option value="">Choose a Vendor</option>
                                    {vendorList.map((vendor, index) => (
                                        <option key={index} value={vendor.id}>{vendor.nameOfVendor} - ₦ {vendor.service_charge} - {vendor.maxCapacityTag} hours per day</option>
                                    ))}
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
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="grid-password">
                                Special Request
                            </label>
                            <textarea
                            placeholder="Special request..."
                            className="w-full p-2 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setSpecialRequest(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="grid-city">
                            Number of Days
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-city" type="number" placeholder="0" onChange={(e) => {setDuration(e.target.value); e.target.value > 0 ?setTotalPrice(price*e.target.value): "" }} />
                        </div>
                        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                        <h3 className="block text-gray-500 text-sm font-bold mb-2">Total:</h3>
                        <h3 className="block text-gray-700 text-4xl font-bold">₦ {totalPrice}</h3>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="w-full py-2 text-lg flex justify-center font-medium text-center text-white bg-indigo-600 rounded-md ">
                        {loading ? <Loader /> : "Submit Request"}
                        </button>
                    </div>
                </form>
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default RequestForm;