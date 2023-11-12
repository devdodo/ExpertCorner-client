import { useState } from "react";
import { login as loginApi } from "../services/apiAuth";
import { useRouter } from "next/router";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email == "" || password == "" ) {
            setErrorMessage("Please enter all inputs below");
            setLoginError(true);

            return;
        }

        try {
            const user = await loginApi({ email, password });
            // Handle successful login, e.g., store user data in state or context
            // queryClient.setQueryData(["user"], user.user);
            router.push("/dashboard", { replace: true });
          } catch (err) {
            setErrorMessage("Invalid Username and Password");
            setLoginError(true);
            // Handle login error, e.g., show an error message
            // toast.error("Provided email or password are incorrect");
          }
    }

    return(
        <>
            <form className="space-y-6" onSubmit={handleSubmit}>
                {loginError ? 
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Login Error: </strong>
                        <span className="block sm:inline">{errorMessage}</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                    </div>
                : ""}
                <div>
                    <div className="mt-4 mb-4">
                        <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-700 mb-2">Email address</label>
                        <input name="email" type="email" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="Enter email Address..." onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700 mb-2">Password</label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input name="password" type="password" className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white"  placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 py-4 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm;