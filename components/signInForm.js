import Container from "./container";
import Link from "next/link";
import LoginForm from "../authentication/loginForm";

const SignInForm = () => {
  return (
    <>
      <Container>
        <div className="flex justify-center">
          <div className="flex min-h-full w-full md:w-1/3 flex-col justify-center px-6 py-12 lg:px-8 border rounded">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                Sign In
              </h2>
              <p className="text-lg text-indigo-700 text-center mt-3 animate-pulse">
                Sign in to speedily connect to a Vendor
              </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <LoginForm />

              <p className="mt-10 text-center text-sm text-gray-500 dark:text-white">
                Not a member?
                <Link
                  href="/signup"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Click here to register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignInForm;
