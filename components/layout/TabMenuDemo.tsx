'use client';

import { RiArrowRightSLine, RiLayoutGridLine } from '@remixicon/react';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';

export function TabMenuHorizontalDemo() {
  return (
    <TabMenuHorizontal.Root defaultValue='overview'>
      <TabMenuHorizontal.List>
        {TABS.map((tab) => (
          <TabMenuHorizontal.Trigger key={tab.value} value={tab.value}>
            <TabMenuHorizontal.Icon as={RiLayoutGridLine} />
            {tab.label}
            <TabMenuHorizontal.ArrowIcon as={RiArrowRightSLine} />
          </TabMenuHorizontal.Trigger>
        ))}
      </TabMenuHorizontal.List>
    </TabMenuHorizontal.Root>
  );
}

export function TabMenuVerticalDemo() {
  return (
    <div className='flex flex-col space-y-2 p-4'>
      {TABS.map((tab) => (
        <button
          key={tab.value}
          className='flex items-center gap-2 p-2 rounded hover:bg-blue-100'
        >
          <RiLayoutGridLine size={20} />
          {tab.label}
          <RiArrowRightSLine size={20} />
        </button>
      ))}
    </div>
  );
}

const TABS = [
  { value: 'overview', label: 'Overview' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'settings', label: 'Settings' },
];
