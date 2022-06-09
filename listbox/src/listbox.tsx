import { Listbox as HListbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import * as React from 'react';
import { Fragment, useState } from 'react';

export type ListboxItem = { name: string };

export type ListboxProps = {
  /**
   The items as { name: string } objects to populate the list box.
   */
  items?: ListboxItem[];
  /**
   The handled for the 'selected' event.
   */
  onSelected?: (item: ListboxItem) => void;
};

/**
 Listboxes are a great foundation for building custom, accessible select menus for your app, complete with robust support for keyboard navigation.
 */
export const Listbox = ({
  items = [],
  onSelected = () => {},
}: ListboxProps) => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <HListbox
      as="div"
      className="w-full max-w-md"
      value={selected}
      onChange={(name) => {
        setSelected(name);
        onSelected(name);
      }}
    >
      <div className="relative mt-1">
        <HListbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span className="block truncate">{selected.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </HListbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <HListbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {items.map((item, idx) => (
              <HListbox.Option
                key={idx}
                className={({ active }) =>
                  `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={item}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? 'font-medium' : 'font-normal'
                      } block truncate`}
                    >
                      {item.name}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? 'text-amber-600' : 'text-amber-600'
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </HListbox.Option>
            ))}
          </HListbox.Options>
        </Transition>
      </div>
    </HListbox>
  );
};
