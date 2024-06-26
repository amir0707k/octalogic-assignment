import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, required, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background pl-10 py-2 text-sm",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
