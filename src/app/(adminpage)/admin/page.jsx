'use client'
import { isLogin } from '../../../../services/auth.service';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NavBar from './_components/navbar';
import SideBar from './_components/sidebar';
import { Spinner } from 'flowbite-react';

const AdminPage = () => {
    const router = useRouter();
    const [isSignIn, setIsSignIn] = useState(null);

    useEffect(() => {
        if(!isLogin()){
            setIsSignIn(false);
            router.push('/admin/signin')
        } else{
            setIsSignIn(true);
        }
    }, []);

    if(isSignIn){
        return <>
            <NavBar/>
            <SideBar/>
        </>;
    } else {
        return <>
            <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
                <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
        </>
    }
}

export default AdminPage;