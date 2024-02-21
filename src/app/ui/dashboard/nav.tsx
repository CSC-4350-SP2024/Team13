'use client'

import { CaretLeft, CaretRight, User } from '@phosphor-icons/react';
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
       <div className="flex flex-row h-16 justify-between rounded-2xl">
           <div className="flex space-x-3 py-3 px-5">
               <CaretLeft size={35} className="text-hex/70 hover:text-white" onClick={handleGoBack} />
               <CaretRight size={35} className="text-hex/70 hover:text-white" onClick={handleGoForward} />
           </div>


           <Link
               key='Profile'
               href='/dashboard/profile'
               className={clsx(
                   'px-5 py-3 hover:text-white',
                   {
                       'text-white': pathname === '/dashboard/profile',
                       'text-hex/70': pathname != '/dashboard/profile'
                   },
               )}
           >
               <User size={35}/>
           </Link>

       </div>
    );
}