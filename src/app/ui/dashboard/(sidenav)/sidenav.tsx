import SideNavLinks from "@/app/ui/dashboard/(sidenav)/sidenav-links";
export default function SideNav() {
    return (
        <div className="flex flex-col min-w-24 ml-1.5 mr-1 bg-hex-gray/60 rounded-2xl items-center gap-6 py-5">
            <SideNavLinks />
        </div>
    );
}