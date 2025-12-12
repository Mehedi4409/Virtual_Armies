import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: "bg-[#736795] hover:bg-yellow-50 text-primary-foreground hover:text-black",
        secondary:
          "bg-[#48a9a6] hover:bg-yellow-50 text-primary-foreground hover:text-black",
        white:
          "bg-slate-100 hover:bg-[#F4F7D5] hover:text-accent-foreground dark:hover:bg-accent/50",
        nav: "bg-[#48a9a6] text-white rounded-md",
        navWhite: "bg-slate-100 rounded-md",
        menu: "bg-slate-100 rounded-sm ring-1 ring-slate-300",
        serviceOption: "ring-1 ring-slate-300 rounded-lg w-full text-left px-3 py-3 text-sm md:text-md",
        serviceOptionActive:
        "border-black bg-slate-600 text-white dark:text-black",
        fotterContactButton: "ring-1 ring-slate-300 bg-white/10 hover:bg-white/20 space-x-2 rounded-lg w-full text-left px-6 py-3 text-sm md:text-md",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 w-32 hover:w-34 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        service: "h-12",
        fotterContactButtonSize: "h-12 w-40 hover:w-42",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
