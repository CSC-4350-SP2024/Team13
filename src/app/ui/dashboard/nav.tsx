'use client'

import { UserIcon, ChevronLeftIcon, ChevronRightIcon  } from '@heroicons/react/16/solid';

export default function Nav() {
    return (
       <>
           <ChevronLeftIcon className="w-10" />
           <ChevronRightIcon className="w-10" />
           <UserIcon className="w-8 absolute top-2.5 right-2.5" />
       </>
    );
}