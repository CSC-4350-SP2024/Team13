import SideNavLinks from "@/app/ui/dashboard/(sidenav)/sidenav-links";
import Library from "@/app/ui/dashboard/(sidenav)/library";
export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 gap-2 md:px-2">
            <div className="flex bg-slate-700 rounded-2xl space-x-2 md:flex-col md:py-3 md:space-x-0 md:space-y-2">
                <SideNavLinks />
            </div>
            <div className="flex flex-col justify-between bg-slate-700 rounded-2xl py-3 px-3 space-y-5 ">
                <Library />
            </div>
        </div>

        // <div className="flex h-screen bg-indigo-950">
        //
        //     <div className="bg-indigo-950 text-gray-100 flex-shrink-0 w-64">
        //         <div className="flex items-center justify-center h-16 border-b border-gray-700">
        //             <span className="text-lg font-semibold">SideNav</span>
        //         </div>
        //         <nav className="flex-1">
        //             <a href="#" className="block py-2 px-4 hover:bg-gray-700">Home</a>
        //             <a href="#" className="block py-2 px-4 hover:bg-gray-700">About</a>
        //             <a href="#" className="block py-2 px-4 hover:bg-gray-700">Services</a>
        //             <a href="#" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
        //         </nav>
        //     </div>
        //
        // </div>
    );
}