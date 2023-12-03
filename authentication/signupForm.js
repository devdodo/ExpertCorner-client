import { useState } from "react";
import { signup as signupApi } from "../services/apiAuth";
import supabase from "../services/supabase";
import { useRouter } from "next/router";
import Loader from "../utilities/loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingUpForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (email == "" || fullName == "" || password == "" || confirmPassword == "" ) {
            toast.error("Please enter all inputs below", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);

            return;
        }

        if (fullName.length < 4) {
            toast.error("Full Name cannot be less than four characters", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);

            return;
        }

        if (password.length < 8) {
            toast.error("Password cannot be less than 8 characters", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);

            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoginError(true);
            setLoading(false);

            return;
        }

        try {
            const user = await signupApi({ fullName, email, password });
            console.log("Successful Sign up");
            console.log(user.user);

            const data = {
                fullName,
                email,
                UID: user.user.id
            }
            const { error } = await supabase.from("clients").insert(data);
            if (error) {
                setLoading(false);
                console.log(error.message);
            }else{
                toast.success("User created successfully", {
                    position: toast.POSITION.TOP_CENTER
                });
                router.push("/signin", { replace: true });
            }

            // Handle successful login, e.g., store user data in state or context
            // queryClient.setQueryData(["user"], user.user);
          } catch (err) {
            toast.error("User creation was unsuccessful!", {
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
            <form className="space-y-6
            " onSubmit={handleSubmit}>
                <div>
                    <div className="mt-4 mb-4">
                        <label htmlFor="fullname" className="block text-md font-medium leading-6 text-gray-700 mb-2">Full Name</label>
                        <input name="fullname" type="text" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="Enter your fullname..." onChange={(e) => setFullName(e.target.value)} />
                    </div>
                </div>

                <div>
                    <div className="mt-4 mb-4">
                        <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-700 mb-2">Email address</label>
                        <input name="email" type="email" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="Enter email Address..." onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="mt-4 mb-4">
                    <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700 mb-2">Password</label>
                    <input name="password" type="password" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white"  placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700 mb-2">Confirm Password</label>
                    <input name="password" type="password" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white"  placeholder="Enter password..." onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Accept Terms and Conditions</label>
                </div>
                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 py-4 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{loading ? <Loader /> : "Sign Up"}</button>
                </div>
            </form>
            <ToastContainer />
        </>
    )
}

export default SingUpForm;