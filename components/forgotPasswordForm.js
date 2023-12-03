import Container from './container';
import Link from 'next/link'
import PasswordForm from '../authentication/passwordForm';

const ForgotPasswordForm = () => {
    return(
        <>
            <Container>
                <div className="flex justify-center">
                    <div className="flex min-h-full w-full md:w-1/3 flex-col justify-center px-6 py-12 lg:px-8 border rounded">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Forgot Password</h2>
                        </div>
                        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-200">
                            Enter your email address below to get a link to reset your password
                        </p>
                        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                            <PasswordForm />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ForgotPasswordForm;