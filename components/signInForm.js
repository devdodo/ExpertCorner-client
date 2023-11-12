import Container from './container';
import LoginForm from '../authentication/loginForm';

const SignInForm = () => {
    return(
        <>
            <Container>
                <div className="flex justify-center">
                    <div className="flex min-h-full w-full md:w-1/3 flex-col justify-center px-6 py-12 lg:px-8 border rounded">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <LoginForm />

                        <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Click here to register</a>
                        </p>
                    </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignInForm;