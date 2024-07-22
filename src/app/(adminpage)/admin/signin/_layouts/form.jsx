'use client'
import { Button, Card, Spinner, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';
import { login } from "../../../../../../services/auth.service";

const SignInForm = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [loginPayload, setLoginPaylod] = useState({});
    const router = useRouter();

    const loginHandler = () => {
        setIsLoading(true);
        login(loginPayload).then(_ => {
            setIsLoading(false);
            router.push('/admin')
        }).catch(err => {
            setIsLoading(false);
            Swal.fire({
                allowOutsideClick: false,
                title: 'Signin Notification!',
                text: err,
                icon: 'error',
            });
        });
    };

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            setLoginPaylod(prevState => ({
                ...prevState,
                [name]: files
            }));
        } else{
            setLoginPaylod(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    return <>
        <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
            <div className="my-6 flex items-center gap-x-1 lg:my-0">
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                    Bina Tunas Bangsa Admin Dashboard
                </span>
            </div>
            <Card horizontal imgSrc="" imgAlt="" className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block">
                <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
                    Sign in to platform
                </h1>
                <div>
                    <div className="mb-4 flex flex-col gap-y-3">
                    <Label htmlFor="username">Your Username</Label>
                    <TextInput id="username" name="username" placeholder="Username" type="text" onChange={formChangeHandler}/>
                </div>
                <div className="mb-6 flex flex-col gap-y-3">
                    <Label htmlFor="password">Your password</Label>
                    <TextInput id="password" name="password" placeholder="••••••••" type="password" onChange={formChangeHandler}/>
                </div>
                {/* <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <Checkbox id="rememberMe" name="rememberMe" />
                        <Label htmlFor="rememberMe">Remember me</Label>
                    </div>
                    <a href="#" className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300">
                        Lost Password?
                    </a>
                </div> */}
                <div className="mb-6">
                    <div className="flex flex-col items-center justify-center px-6">
                        <Button type="submit" className="w-full lg:w-auto" onClick={loginHandler} disabled={isLoading}>
                            {
                                isLoading ? <>
                                    <Spinner aria-label="Spinner button example" size="sm" />
                                    <span className="pl-3">Please Wait...</span>
                                </> : <>
                                    Login to your account   
                                </>
                            }
                        </Button>
                    </div>
                    </div>
                    {/* <p className="text-sm text-gray-500 dark:text-gray-300">
                        Not registered?&nbsp;
                        <a href="#" className="text-primary-600 dark:text-primary-300">
                            Create account
                        </a>
                    </p> */}
                </div>
            </Card>
        </div>
    </>
};

export default SignInForm;