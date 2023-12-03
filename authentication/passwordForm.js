import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Loader from "../utilities/loader";
import supabase from "../services/supabase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordForm = () => {
    const [email, setEmail] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (email == "" ) {
            toast.error("Please enter your Email Address below!", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);
            return;
        }

        try {
            const user = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: 'http://localhost:3000/changePassword',
            });

            toast.success("Request Successful, check your mail!", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoading(false);
            setEmail("");

          } catch (err) {
            toast.error("Request Unsuccesful", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);
            // Handle login error, e.g., show an error message
            // toast.error("Provided email or password are incorrect");
          }
    }

    return(
        <>
            <form className="space-y-6" onSubmit={handleSubmit}>
                
                <div>
                    <div className="mt-4 mb-4">
                        <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-700 dark:text-white mb-2">Email address</label>
                        <input name="email" type="email" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="Enter email Address..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 py-4 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{loading ? <Loader /> : "Reset Password"}</button>
                </div>
            </form>
            <ToastContainer />
        </>
    )
}

export default PasswordForm;