'use client';

import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: HomeIcon
    },
    {
        name: 'Browse',
        href: '/dashboard/browse',
        icon: MagnifyingGlassIcon,
    }
];

export default function SideNavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-start gap-6 rounded-md p-2 text-md font-medium hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'text-white': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-8" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
