"use client";
import React from "react";
import NavbarSidebarLayout from "../../../_layouts/navigation";
import AdminRegistrationDetailContent from "../../_components/Detail";
import AdminRegistrationHeader from "../../_components/Header";
import AdminRegistrationMainContent from "../../_components/MainContent";

const AdminRegistrationDetail = () => {

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
