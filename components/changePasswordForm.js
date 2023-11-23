import Container from './container';
import Link from 'next/link'
import NewPasswordForm from '../authentication/newPasswordForm';

const ChangePasswordForm = () => {
    return(
        <>
            <Container>
                <div className="flex justify-center">
                    <div className="flex min-h-full w-full md:w-1/3 flex-col justify-center px-6 py-12 lg:px-8 border rounded">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Change Password</h2>
                        </div>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Enter your new password below
                        </p>
                        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                            <NewPasswordForm />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ChangePasswordForm;