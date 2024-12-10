"use client";
import { Button, Card, Spinner, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';
import { login } from "../../../../../../services/auth.service";

const SignInForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [loginPayload, setLoginPayload] = useState({ username: '', password: '' });
    const router = useRouter();

    const loginHandler = async () => {
        setIsLoading(true);
        try {
            await login(loginPayload);
            router.push('/admin');
        } catch (err) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Signin Notification!',
                text: err || 'An error occurred',
                icon: 'error',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const formChangeHandler = (e) => {
        const { name, value } = e.target;
        setLoginPayload(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            loginHandler();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-100">
            <div className="my-6 text-center">
                <span className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Bina Tunas Bangsa Admin Dashboard
                </span>
            </div>
            <Card className="w-full max-w-md bg-white shadow-lg p-6">
                <h1 className="mb-6 text-xl font-bold text-gray-800 dark:text-white md:text-2xl">
                    Sign in to platform
                </h1>
                <div>
                    <div className="mb-4">
                        <Label htmlFor="username" className="block text-gray-700 dark:text-gray-300">Your Username</Label>
                        <TextInput
                            id="username"
                            name="username"
                            placeholder="Username"
                            type="text"
                            onChange={formChangeHandler}
                            onKeyDown={handleKeyDown}
                            className="mt-1 w-full"
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="password" className="block text-gray-700 dark:text-gray-300">Your Password</Label>
                        <TextInput
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            type="password"
                            onChange={formChangeHandler}
                            onKeyDown={handleKeyDown}
                            className="mt-1 w-full"
                        />
                    </div>
                    <div className="mb-6">
                        <div className="flex flex-col items-center">
                            <Button
                                type="button"
                                className="w-full"
                                onClick={loginHandler}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Spinner aria-label="Spinner button example" size="sm" />
                                        <span className="pl-3">Please Wait...</span>
                                    </>
                                ) : (
                                    'Login to your account'
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default SignInForm;
