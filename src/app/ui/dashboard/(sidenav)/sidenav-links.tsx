'use client';

import { HomeIcon, MagnifyingGlassIcon, MusicalNoteIcon } from "@heroicons/react/16/solid";
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
        icon: MagnifyingGlassIcon
    },
    {
        name: 'Library',
        href: '/dashboard/library',
        icon: MusicalNoteIcon
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
                            'w-9 hover:text-white',
                            {
                                'text-white': pathname === link.href,
                                'text-hex/70': pathname != link.href
                            },
                        )}
                    >
                        <LinkIcon />
                        {/*<p className="hidden md:block">{link.name}</p>*/}
                    </Link>
                );
            })}
        </>
    );
}
