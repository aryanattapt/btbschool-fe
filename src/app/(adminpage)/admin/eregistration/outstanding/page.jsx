import NavbarSidebarLayout from "../../_layouts/navigation";

const { default: ERegistrationOutstandingTable } = require("./_layout/form")

const ERegistrationOutstandingPage = () => {
    const data = []

    return <>
        <NavbarSidebarLayout>
            <ERegistrationOutstandingTable data={data}/>
        </NavbarSidebarLayout>
    </>
}

export default ERegistrationOutstandingPage;