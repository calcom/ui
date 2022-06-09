import { Menu as HMenu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import * as React from 'react';
import { Fragment, ReactNode } from 'react';

type MenuItemDetails = {
  /**
   The icon for the menu item.
   */
  Icon?: ReactNode;
  /**
   The label of the menu item.
   */
  label: string;
  /**
   The event handler for the menu item click event.
   */
  onClick?: () => void;
};

type MenuProps = {
  /**
   Use the label prop to name the menu button
   */
  label: string;
  /**
   Use the items prop to describe the menu items.
   */
  items?: MenuItemDetails[][];
};

const MenuItem = ({ Icon, label, onClick }: MenuItemDetails & { key: any }) => (
  <HMenu.Item>
    {({ active }) => (
      <button
        className={`${
          active ? 'bg-violet-500 text-white' : 'text-gray-900'
        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
        onClick={onClick}
      >
        {Icon && (
          <Icon
            className={`w-5 h-5 mr-2 ${
              active ? 'text-white' : 'text-violet-500'
            }`}
          />
        )}
        {label}
      </button>
    )}
  </HMenu.Item>
);

/**
 Menus offer an easy way to build custom, accessible dropdown components with robust support for keyboard navigation.
 */
export const Menu = ({ items = [[]], label }: MenuProps) => (
  <HMenu as="div" className="relative inline-block text-left">
    <div>
      <HMenu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {label}
        <ChevronDownIcon
          className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </HMenu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <HMenu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {items.map((group) => (
          <div className="px-1 py-1">
            {group.map((item) => (
              <MenuItem key={item.label} {...item} />
            ))}
          </div>
        ))}
      </HMenu.Items>
    </Transition>
  </HMenu>
);
