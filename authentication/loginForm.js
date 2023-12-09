import { useState } from "react";
import Link from 'next/link';
import { login as loginApi, logClient as clientLogin } from "../services/apiAuth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../utilities/slices/userSlice";
import Loader from "../utilities/loader";
import supabase from "../services/supabase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (email == "" || password == "" ) {
            toast.error("Please enter all inputs below", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);
            return;
        }

        try {
            const user = await loginApi({ email, password });
            if(user.user != null){
                const { data, error } = await supabase
                .from("clients")
                .select("id,email,fullName,UID,NIN")
                .eq("email", email);
            
                if (error) {
                console.error(error);
                toast.error("Invalid username and password", {
                    position: toast.POSITION.TOP_CENTER
                });
                }

                dispatch(login(data))
            }
            router.push("/dashboard", "/dashboard");

          } catch (err) {
            toast.error("Invalid username and password", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);
          }
    }

    return(
        <>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <div className="mt-4 mb-4">
                        <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-700 dark:text-white mb-2">Email address</label>
                        <input name="email" type="email" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="Enter email Address..." onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700 dark:text-white mb-2">Password</label>
                        <div className="text-sm">
                            <Link href="/forgotPassword" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input name="password" type="password" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white"  placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 py-4 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{loading ? <Loader /> : "Sign In"}</button>
                </div>
            </form>
            <ToastContainer />
        </>
    )
}

export default LoginForm;