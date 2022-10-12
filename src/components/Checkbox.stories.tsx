import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    color: 'cyan'
  },
  argTypes: {
    color: {
      options: ['cyan', 'yellow'],
      control: {
        type: 'inline-radio'
      }
    }
  },
  decorators: [
    (story) => {
      return (
        <div className='flex items-center gap-2'>
          {story()}
          <Text size='sm'>Lembrar de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
