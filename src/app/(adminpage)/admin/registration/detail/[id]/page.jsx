"use client";
import { useRouter } from "next/navigation";
import React from "react";
import NavbarSidebarLayout from "../../../_layouts/navigation";
import AdminRegistrationHeader from "../../_components/Header";
import AdminRegistrationMainContent from "../../_components/MainContent";
import AdminRegistrationDetailContent from "../../_components/Detail";

const AdminRegistrationDetail = () => {
	const router = useRouter();

	return (
		<NavbarSidebarLayout>
			<div>
				<AdminRegistrationHeader />
				<AdminRegistrationMainContent title={"Registration Detail"}>
					<AdminRegistrationDetailContent />
				</AdminRegistrationMainContent>
			</div>
		</NavbarSidebarLayout>
	);
};

export default AdminRegistrationDetail;
