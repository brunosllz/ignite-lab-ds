import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  color?: 'cyan' | 'yellow'
}

export function Checkbox({ color = 'cyan', ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={clsx('w-6 h-6 p-[2px] bg-gray-700 rounded hover:ring-1 focus:ring-1', {
        'ring-cyan-500': color === 'cyan',
        'ring-yellow-500': color === 'yellow',
      })}
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check
          weight='bold'
          className={clsx('w-5 h-5', {
            'text-cyan-500': color === 'cyan',
            'text-yellow-500': color === 'yellow',
          })}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}