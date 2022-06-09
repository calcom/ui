import { Dialog as HDialog, Transition } from '@headlessui/react';
import * as React from 'react';
import { Fragment, useState } from 'react';

export type DialogProps = {
  /**
   Label on the open call-to-action
   */
  openLabel: string;
  /**
   Label on the close call-to-action
   */
  closeLabel: string;
  /**
   Title text for the dialog panel.
   */
  title: string;
  /**
   Details text to dialog.
   */
  details: string;
  /**
   Handler for the open event.
   */
  onOpen?: () => void;
  /**
   Handler for the close event.
   */
  onClose?: () => void;
};

/**
 A fully-managed, renderless dialog component jam-packed with accessibility and keyboard features, perfect for building completely custom modal and dialog windows for your next application.
 */
export const Dialog = ({
  openLabel,
  closeLabel,
  title,
  details,
  onOpen = () => {},
  onClose = () => {},
}: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    onClose();
  }

  function openModal() {
    setIsOpen(true);
    onOpen();
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        {openLabel}
      </button>

      <Transition show={isOpen} as={Fragment}>
        <HDialog
          as="div"
          className="fixed inset-0 z-top overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <HDialog.Overlay className="fixed inset-0 bg-light-blue-900 opacity-see-through" />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <HDialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </HDialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{details}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    {closeLabel}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </HDialog>
      </Transition>
    </>
  );
};
