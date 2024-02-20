import React from "react";
import SideNav from '@/app/ui/dashboard/(sidenav)/sidenav';
import Nav from "@/app/ui/dashboard/nav";
import MediaCenter from "@/app/ui/dashboard/(media_player)/mediacenter";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col bg-black h-screen">

            <div className="flex flex-row h-full">
                <SideNav />

                {/*Main Page Content*/}
                <div className="flex flex-col w-screen ml-1 mr-1.5 bg-hex-gray/80 rounded-2xl">
                        <Nav />
                        {/*Page Content*/}
                        <div className="flex justify-center text-white">{children}</div>
                </div>
            </div>

            <MediaCenter />
        </div>
    );
}
