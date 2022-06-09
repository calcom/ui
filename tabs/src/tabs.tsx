import { Tab as HTab } from '@headlessui/react';
import * as React from 'react';
import { ReactNode, useState } from 'react';

export type TabProps = {
  label: string;
  panel?: ReactNode;
};

export type TabsProps = {
  /**
   Use the items prop to describe the tabs items.
   */
  items: TabProps[];
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 Easily create accessible, fully customizable tab interfaces, with robust focus management and keyboard navigation support.
 */
export const Tabs = ({ items }: TabsProps) => {
  const [tabs] = useState(items);

  return (
    <HTab.Group as="div" className="w-full max-w-md">
      <HTab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        {tabs.map((tab, idx) => (
          <HTab
            key={idx}
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            {tab.label}
          </HTab>
        ))}
      </HTab.List>
      <HTab.Panels className="mt-2">
        {tabs.map((tab, idx) => (
          <HTab.Panel
            key={idx}
            className={classNames(
              'bg-white rounded-xl p-3',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
            )}
          >
            {!!tab.panel && <tab.panel />}
          </HTab.Panel>
        ))}
      </HTab.Panels>
    </HTab.Group>
  );
};
