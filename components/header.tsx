'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { DropdownDemo } from './layout/DropdownDemo';
import { TabMenuHorizontalDemo, TabMenuVerticalDemo } from './layout/TabMenuDemo';
import { RiMenu3Line } from '@remixicon/react';
import { DrawerDemo } from './layout/DrawerDemo';

const DynamicThemeSwitch = dynamic(() => import('./theme-switch'), {
  ssr: false,
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-stroke-soft-200 '>
      <header className='mx-auto flex h-fit items-center justify-between px-4 sm:px-6 lg:px-8'>

        <div className='text-2xl font-bold'>transcend</div>

        <div className='hidden md:block'>
          <TabMenuHorizontalDemo />
        </div>

        <div className='flex items-center gap-3'>
          <DropdownDemo />
          <DynamicThemeSwitch />
          <DrawerDemo />

        </div>
      </header>

    </div>
  );
}
