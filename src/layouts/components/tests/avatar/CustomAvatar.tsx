import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

const CustomAvatar = () => (
  <div className="flex gap-5" data-testid="custom-avatar">
    <Avatar.Root
      className="bg-blackA3 inline-flex h-[45px]
        w-[45px] select-none items-center justify-center overflow-hidden
        rounded-full align-middle"
    >
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover
          border-gray-950border-2"
        src="https://ca.slack-edge.com/T0GHK1W5R-U04Q8JLESN9-8db6765b8d3a-48"
        alt="Colm Tuite"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center
          justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
)

export default CustomAvatar;