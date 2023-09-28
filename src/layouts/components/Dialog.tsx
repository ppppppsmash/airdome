import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { BsFiletypePdf } from 'react-icons/bs'
import { BiDownload } from 'react-icons/bi'
import Link from 'next/link';

const DialogParts = () => {
  return (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="z-50 fixed lg:bottom-4 lg:right-20 lg:w-[260px] lg:h-[55px]
        bottom-24 right-4 w-[60px] h-[60px] hover:scale-[0.9] transition
        text-black shadow-blackA7 hover:bg-mauve3 inline-flex items-center
        justify-center bg-white px-[15px] leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none rounded-full">
      <BsFiletypePdf size={22} /><span className="lg:block lg:text-[20px] pl-2 font-thin hidden">气膜资料请求</span>
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-50" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed z-50 top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[20px] font-medium mb-8 dark:text-black">
          下载/浏览 气膜PDF文件
        </Dialog.Title>
        <Dialog.Description className="bg-white text-mauve11 mt-[10px] ml-2 mb-5 text-[15px] leading-normal">
          <p className="mb-4 flex gap-x-2">
            <BiDownload size={20} /><Link className="mb-4 border-black border-b-2 border-dotted dark:text-gray-900" target="_blank" href="/file/Broadwell_Logistic_and_Warehouse_Dome.pdf">博德维物流与气膜说明.pdf</Link>
          </p>
          <p className="flex gap-x-2">
            <BiDownload size={20} /><Link className="border-black border-b-2 border-dotted dark:text-gray-900" target="_blank" href="/file/Broadwell_Air_Dome_General_Instruction.pdf">博德维气膜一般说明.pdf</Link>
            <p className='hidden'>test</p>
          </p>
        </Dialog.Description>

        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
};

export default DialogParts;