'use client';

import { MagnifyingGlass, House, Waveform } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: House,
        size: 32,
        weight: 'fill'
    },
    {
        name: 'Browse',
        href: '/dashboard/browse',
        icon: MagnifyingGlass,
        size: 32,
        weight: 'regular'
    },
    {
        name: 'Library',
        href: '/dashboard/library',
        icon: Waveform,
        size: 32,
        weight: 'regular'
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
                            'hover:text-white',
                            {
                                'text-white': pathname === link.href,
                                'text-hex/70': pathname != link.href
                            },
                        )}
                    >
                        <LinkIcon size={link.size} weight={link.weight} />
                        {/*<p className="hidden md:block">{link.name}</p>*/}
                    </Link>
                );
            })}
        </>
    );
}
