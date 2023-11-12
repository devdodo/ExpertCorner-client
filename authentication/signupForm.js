import { useState } from "react";
import { signup as signupApi } from "../services/apiAuth";
import supabase from "../services/supabase";
import { useRouter } from "next/router";

const SingUpForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email == "" || fullName == "" || password == "" || confirmPassword == "" ) {
            setErrorMessage("Please enter all inputs below");
            setLoginError(true);

            return;
        }

        if (fullName.length < 4) {
            setErrorMessage("Full Name cannot be less than four characters");
            setLoginError(true);

            return;
        }

        if (password.length < 8) {
            setErrorMessage("Password cannot be less than 8 characters");
            setLoginError(true);

            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            setLoginError(true);

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
                console.log(error.message);
            }else{
                console.log("Insertion successful");
                router.push("/signin", { replace: true });
            }

            // Handle successful login, e.g., store user data in state or context
            // queryClient.setQueryData(["user"], user.user);
          } catch (err) {
            setErrorMessage("User creation was unsuccessful!");
            setLoginError(true);
            // Handle login error, e.g., show an error message
            // toast.error("Provided email or password are incorrect");
          }
    }

    return(
        <>
            <form className="space-y-6
            " onSubmit={handleSubmit}>
                {loginError ? 
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">SignUp Error: </strong>
                        <span className="block sm:inline">{errorMessage}</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                    </div>
                : ""}
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
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept Terms and Conditions</label>
                </div>
                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 py-4 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                </div>
            </form>
        </>
    )
}

export default SingUpForm;