import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";

import { Envelope, Lock } from "phosphor-react";
import { Logo } from "./Logo";

const signinFormSchemaValidation = z.object({
  email: z.string().min(1, { message: "Informe o seu email" }).email({ message: "Formato de email inválido" }),
  password: z.string({
    required_error: "Informe sua senha"
  }).min(1, { message: 'Informe a sua senha' })
}).required()

type SigninFormType = z.infer<typeof signinFormSchemaValidation>

export function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SigninFormType>({
    resolver: zodResolver(signinFormSchemaValidation),
  })

  console.log(errors)

  function handleSigninForm(data: SigninFormType) {
    alert(JSON.stringify(data))
  }

  return (
    <div className="flex flex-col media-968:flex-row items-center py-14 justify-center gap-10 media-968:gap-[176px] w-full min-h-screen bg-background-universe bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center mx-6">
        <Logo className='h-[120px] media-968:h-[240px]' />
        <Heading size="md" classname='media-968:text-lg'>
          Ignite Lab
        </Heading>
        <Text size='sm' classname="text-gray-400 media-968:text-md">
          Faça login e comece a usar
        </Text>
      </div>

      <div className="flex flex-col w-full max-w-[464px] bg-gray-800 p-8 rounded-md gap-8 mx-6">
        <form
          onSubmit={handleSubmit(handleSigninForm)}
          className="flex flex-col w-full gap-4"
        >
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text classname="font-semibold">Endereço de email</Text>

            <TextInput.Root>
              <TextInput.Input
                id="email"
                type='email'
                error={!!errors.email}
                placeholder="johndoe@example.com"
                color="yellow"
                {...register('email')}
              >
                <TextInput.Icon>
                  <Envelope />
                </TextInput.Icon>
              </TextInput.Input>

              <TextInput.ErrorMessage errorMessage={errors.email?.message} />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className="flex flex-col gap-3">
            <Text classname="font-semibold">Sua senha</Text>

            <TextInput.Root>
              <TextInput.Input
                id="password"
                type="password"
                error={!!errors.password}
                color="yellow"
                placeholder="********"
                {...register('password')}
              >
                <TextInput.Icon>
                  <Lock />
                </TextInput.Icon>
              </TextInput.Input>

              <TextInput.ErrorMessage errorMessage={errors.password?.message} />
            </TextInput.Root>
          </label >

          <label htmlFor="remenber" className="flex items-center gap-2 cursor-pointer">
            <Checkbox color="yellow" id="remenber" />
            <Text classname="text-gray-200 text-xs">Lembrar de mim por 30 dias</Text>
          </label>

          <Button color="yellow" type="submit" className="mt-4">
            Entrar na plataforma
          </Button>
        </form>

        <footer className="flex flex-col items-center gap-4">
          <Text
            asChild
            classname="text-xs text-gray-400 underline"
          >
            <a href="#">Esqueceu sua senha?</a>
          </Text>
          <Text
            asChild
            classname="text-xs text-gray-400 underline"
          >
            <a href="#">Não possui conta? Crie uma agora!</a>
          </Text>
        </footer>
      </div>
    </div>
  )
}
