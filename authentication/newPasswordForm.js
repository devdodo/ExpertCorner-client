import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Loader from "../utilities/loader";
import supabase from "../services/supabase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewPasswordForm = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (password == "" || confirmPassword == "" ) {
            toast.error("Please enter all inputs below", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);
            return;
        }

        if (password.length < 8 ) {
            toast.error("Passwords must be more than 8 characters", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);
            return;
        }

        if (password !== confirmPassword ) {
            toast.error("Passwords do not match", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);
            return;
        }

        try {
            const user = await supabase.auth.updateUser({ password: confirmPassword })
            toast.success("Password reset successful", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoading(false);
            router.push("/signin", "/signin");

          } catch (err) {
            toast.error("Password reset unsuccessful", {
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
                        <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700 mb-2">Password</label>
                        <input name="password" type="password" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white"  placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700 mb-2">Confirm Password</label>
                        <input name="password" type="password" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white"  placeholder="Enter password..." onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 py-4 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{loading ? <Loader /> : "Change Password"}</button>
                </div>
            </form>
            <ToastContainer />
        </>
    )
}

export default NewPasswordForm;