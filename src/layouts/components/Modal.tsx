import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";
import React, { Fragment, useState } from "react";
import Button from "./shared/button";

//interface AlertDialogProps {}

const AlertDialog = ({children}: {
  children: React.ReactNode
}) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPrimitive.Trigger asChild>
        {/* <Button>Click</Button> */}
        {children}
      </AlertDialogPrimitive.Trigger>
      <AlertDialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <AlertDialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <AlertDialogPrimitive.Content
              forceMount
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-white dark:bg-[#1c1c1c]",
                "focus:outline-none focus-visible:ring focus-visible:ring-[#1c1c1c] focus-visible:ring-opacity-75"
              )}
            >
              <AlertDialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                メールを送信しますか？
              </AlertDialogPrimitive.Title>
              {/* <AlertDialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogPrimitive.Description> */}
              <div className="mt-4 flex justify-end space-x-2">
                <AlertDialogPrimitive.Cancel
                  className={clsx(
                    "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                    "bg-white text-[#424242] hover:bg-gray-50 dark:bg-[#424242] dark:text-gray-100 hover:dark:bg-[#424242]",
                    "border border-gray-300 dark:border-transparent",
                    "focus:outline-none focus-visible:ring focus-visible:ring-[#424242] focus-visible:ring-opacity-75"
                  )}
                >
                  いいえ
                </AlertDialogPrimitive.Cancel>
                <AlertDialogPrimitive.Action
                  className={clsx(
                    "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                    "bg-[#1c1c1c] text-white hover:bg-[#1c1c1c] dark:bg-[#1c1c1c] dark:text-gray-100 dark:hover:bg-[#1c1c1c]",
                    "border border-transparent",
                    "focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
                  )}
                >
                  はい
                </AlertDialogPrimitive.Action>
              </div>
            </AlertDialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};

export { AlertDialog };