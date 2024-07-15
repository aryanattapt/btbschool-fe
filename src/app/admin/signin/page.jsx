'use client'
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SignInForm from "./_layouts/form";
import { isLogin } from "../../../../services/auth.service";

const SignInAdminPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if(isLogin()){
            setIsSignIn(true);
            router.push('/admin')
        } else{
            setIsSignIn(false);
        }
    }, [])

    if(isSignIn){
        return <>
            <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
                <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
        </>
    } else{
        return <>
            <SignInForm/>
        </>
    }
};

export default SignInAdminPage;