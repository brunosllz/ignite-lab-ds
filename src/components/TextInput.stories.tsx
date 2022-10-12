import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from './TextInput'

import { Envelope, Lock } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Input placeholder='johndoe@email.com' color='yellow'>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
      </TextInput.Input>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder='johndoe@email.com' />
    )
  }
}

export const WithErrorAndMessageError: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input placeholder='************' error={true}>
        <TextInput.Icon>
          <Lock />
        </TextInput.Icon>
      </TextInput.Input>,
      <TextInput.ErrorMessage errorMessage='Informe a sua senha' />
    ]
  },
}
