import { Outlet } from "react-router"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { AppSidebar } from "./sidebar"

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div className="">
                    <header><SidebarTrigger /></header>
                    <main><Outlet /></main>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashboardLayout