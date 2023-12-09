import Container from './container';
import SignupForm from '../authentication/signupForm';

const SignUp = () => {
    return(
        <>
            <Container>
                <div className="flex justify-center">
                    <div className="flex min-h-full w-full md:w-1/3 flex-col justify-center px-6 py-12 lg:px-8 border rounded">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Sign Up</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <SignupForm />
                    </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignUp;