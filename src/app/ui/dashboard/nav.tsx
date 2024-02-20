'use client'

import { UserIcon, ChevronLeftIcon, ChevronRightIcon  } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

export default function Nav() {
    const pathname = usePathname();
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    }

    const handleGoForward = () => {
        router.forward();
    }

    return (
       <div className="flex flex-row h-16 justify-between bg-hex-gray rounded-2xl">
           <div className="flex space-x-1">
               <ChevronLeftIcon className="text-hex/70 w-10 hover:text-white" onClick={handleGoBack} />
               <ChevronRightIcon className="text-hex/70 w-10 hover:text-white" onClick={handleGoForward} />
           </div>


           <Link
               key='Profile'
               href='/dashboard/profile'
               className={clsx(
                   'flex w-8 hover:text-white',
                   {
                       'text-white': pathname === '/dashboard/profile',
                       'text-hex/70': pathname != '/dashboard/profile'
                   },
               )}
           >
               <UserIcon />
           </Link>

       </div>
    );
}