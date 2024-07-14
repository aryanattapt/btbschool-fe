'use client'
import {
    isLogin,
} from '../../../services/auth.service';
import { redirect } from "next/navigation";
import { useEffect } from "react";
import NavBar from './_components/navbar';
import SideBar from './_components/sidebar';

const AdminPage = () => {
    useEffect(() => {
        if(!isLogin()){
            redirect('/admin/signin')
        }
    }, [])

    return <>
        <NavBar/>
        <SideBar/>
    </>;
}

export default AdminPage;