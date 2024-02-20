import React from "react";
import SideNav from '@/app/ui/dashboard/(sidenav)/sidenav';
import Nav from "@/app/ui/dashboard/nav";
import MediaCenter from "@/app/ui/dashboard/(media_player)/mediacenter";
import SideNavLinks from "@/app/ui/dashboard/(sidenav)/sidenav-links";
import Library from "@/app/ui/dashboard/(sidenav)/library";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col">

            <div className="flex flex-row relative">

                {/*px-3 py-4 gap-2*/}
                <div className="flex flex-col min-w-20 h-dvh bg-orange-600 overflow-auto items-center py-2.5 gap-4">
                    <SideNav />
                </div>


                <div className="flex flex-col">
                    <div className="flex flex-row h-14 w-screen bg-blue-600">
                        <Nav />
                    </div>

                    {/*Page Content*/}
                    <div>{children}</div>
                </div>

            </div>

            {/*MediaCenter*/}
            <div className="flex flex-row fixed inset-x-0 bottom-0 h-24 bg-black justify-center">
                <p>Media Center</p>
            </div>
        </div>
    );
}
