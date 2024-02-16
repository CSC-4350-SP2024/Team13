import React from "react";
import SideNav from '@/app/ui/dashboard/(sidenav)/sidenav';
import Nav from "@/app/ui/dashboard/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-64 flex-none">
                <SideNav/>
            </div>
            <div className="flex flex-col flex-grow">
                <Nav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            {/*<div className="flex">*/}

            {/*    <div className="w-64 bg-gray-200">*/}

            {/*    </div>*/}


            {/*    <div className="flex flex-col flex-grow">*/}

            {/*        <nav className="bg-gray-800 text-white px-4 py-2">*/}
            {/*            <div className="container mx-auto">*/}

            {/*                <a href="#" className="text-xl font-bold">Logo</a>*/}
            {/*                <div className="flex justify-end space-x-4">*/}
            {/*                    <a href="#" className="hover:text-gray-300">Home</a>*/}
            {/*                    <a href="#" className="hover:text-gray-300">About</a>*/}
            {/*                    <a href="#" className="hover:text-gray-300">Contact</a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </nav>*/}


            {/*        <main className="p-4">*/}
            {/*            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>*/}
            {/*        </main>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
}