import { useState, useEffect } from "react";
import { format, isToday } from "date-fns";
import Loader from "../../utilities/loader";
import supabase from "../../services/supabase";
import { useSelector, useDispatch } from "react-redux";
import { login, selectUser } from "../../utilities/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestForm = () => {
  const userSlice = useSelector(selectUser);
  const [userData, setUserData] = useState([]);
  const [phone, setPhone] = useState("");
  // const [bvn, setBvn] = useState("")
  const [location, setLocation] = useState("");
  const [nin, setNin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const { user, isAuthenticated } = userSlice;
  const [{ id }] = user;

  const getRequest = async (id) => {
    const { data, error } = await supabase
      .from("clients")
      .select("*")
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }
    console.log(data, "this is first");

    setUserData(data);
    setPhone(data[0].phoneNumber);
    // setBvn(data[0].bvn)
    setLocation(data[0].stateOfResidence);
    setNin(data[0].NIN);
  };

  useEffect(() => {
    getRequest(id);

    console.log(userData, "this is second");
  }, []);

  const updateClient = async (id) => {
    const { data, error } = await supabase
    .from("clients")
    .select("id,email,fullName,UID,NIN")
    .eq("id", id);

    if (error) {
    console.error(error);
    toast.error("Invalid username and password", {
        position: toast.POSITION.TOP_CENTER
    });
    }

    dispatch(login(data))
  }
  const updateTable = async (obj, id) => {
    const { data, error } = await supabase
      .from("clients")
      .update(obj)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error(error);
      setLoading(false);
      toast.error("An Error Occured try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    updateClient(id);
    setLoading(false);
    toast.success("Profile updated successfully.", {
      position: toast.POSITION.TOP_CENTER,
    });
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const obj = {
      phoneNumber: phone,
      // bvn,
      stateOfResidence: location,
      NIN: nin,
    };

    updateTable(obj, userData[0].id);
  };

  return (
    <div className="w-[90%] sm:w-[80%]  mt-9 mb-9 mx-auto">
      {userData.length > 0 ? (
        <div className="bg-white p-8 rounded overflow-hidden">
          <div className="relative w-32 h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-36 h-36 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="py-4">
            <h3 className="text-lg font-semibold text-gray-700">
              User Information
            </h3>
            <div className="py-4">
              <div className="flex mb-4">
                <h3 className="text-gray-600 text-md font-semibold w-40">
                  Full Name:
                </h3>
                <h3 className="text-gray-700 text-md font-medium w-40">
                  {userData[0].fullName}
                </h3>
              </div>
              <div className="flex mb-4">
                <h3 className="text-gray-600 text-md font-semibold w-40">
                  Email Address:
                </h3>
                <h3 className="text-gray-700 text-md font-medium w-40">
                  {userData[0].email}
                </h3>
              </div>
              <div className="flex">
                <h3 className="text-gray-600 text-md font-semibold w-40">
                  Signed Up:
                </h3>
                <h3 className="text-gray-700 text-md font-medium w-40">
                  {format(new Date(userData[0].created_at), "EEE, MMM dd yyyy")}
                </h3>
              </div>
            </div>
          </div>
          <hr className="py-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-6">
            Edit Personal Information
          </h3>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block text-gray-500 text-sm font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Full Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-city"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block text-gray-500 text-sm font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-city"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            {/* <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="grid-city">
                                Bank Verification Number(BVN)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-city" type="text" value={bvn} onChange={(e) => setBvn(e.target.value)} />
                        </div>
                    </div> */}
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block text-gray-500 text-sm font-bold mb-2"
                  htmlFor="grid-city"
                >
                  National Identification Number (NIN)
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-city"
                  type="text"
                  value={nin}
                  onChange={(e) => setNin(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full py-2 text-lg flex justify-center font-medium text-center text-white bg-indigo-600 rounded-md ">
                {loading ? <Loader /> : "Update Profile"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        "Waiting"
      )}
      <ToastContainer />
    </div>
  );
};

export default RequestForm;
