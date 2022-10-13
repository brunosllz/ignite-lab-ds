import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  color?: 'cyan' | 'yellow'
}

export function Button({ children, asChild, color = 'cyan', className }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={clsx("w-full py-3 px-4 rounded font-semibold text-black text-sm transition-colors outline-none focus:ring-2 focus:ring-white", {
      'bg-cyan-500 hover:bg-cyan-400': color === 'cyan',
      'bg-yellow-500 hover:bg-yellow-400': color === 'yellow',
    },
      className)}
    >
      {children}
    </Comp>
  )
}