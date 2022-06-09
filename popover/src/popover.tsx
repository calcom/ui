import { Popover as HPopover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import * as React from 'react';
import { Fragment, ReactNode } from 'react';

export type PopoverProps = {
  /**
   Title text for the popover panel.
   */
  title: string;
  /**
   Items for the popover panel.
   */
  items?: {
    /**
     The name of the item.
     */
    name: string;
    /**
     The description text for the item.
     */
    description: string;
    /**
     The href to link to on click.
     */
    href: string;
    /**
     *
     */
    icon?: ReactNode;
  }[][];
};

/**
 Popovers are perfect for floating panels with arbitrary content like navigation menus, mobile menus and flyout menus.
 */
export const Popover = ({ title, items = [[]] }: PopoverProps) => (
  <HPopover className="relative">
    {({ open }) => (
      <>
        <HPopover.Button
          className={`
            ${open ? '' : 'text-opacity-90'}
            text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span>{title}</span>
          <ChevronDownIcon
            className={`${open ? '' : 'text-opacity-70'}
              ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
            aria-hidden="true"
          />
        </HPopover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <HPopover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              {items.map((group, idx) => (
                <div
                  className={`
                  ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  relative grid gap-8 p-7 lg:grid-cols-2`}
                >
                  {group.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`
                      ${
                        idx % 2 === 0 ? 'hover:bg-gray-50' : 'hover:bg-gray-100'
                      }
                      flex items-center p-2 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                    >
                      {!!item.icon && (
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <item.icon
                            aria-hidden="true"
                            className="text-orange-300"
                          />
                        </div>
                      )}
                      <div
                        className={`
                        ${!!item.icon ? 'ml-4' : 'ml-2'}`}
                      >
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </HPopover.Panel>
        </Transition>
      </>
    )}
  </HPopover>
);
