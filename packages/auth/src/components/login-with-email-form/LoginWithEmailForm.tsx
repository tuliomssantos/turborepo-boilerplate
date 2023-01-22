'use client'

import { z } from 'zod'

import { signIn } from 'next-auth/react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  email: z.string().email('Email inválido'),
})

type FormSchemaType = z.infer<typeof formSchema>

export default function LoginWithEmailForm({
  callbackUrl,
}: {
  callbackUrl: string
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormSchemaType> = data => {
    console.log('🚀 ~ file: LoginWithEmailForm.tsx:47 ~ data', data)

    signIn('email', { email: data.email, callbackUrl })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <button>Login</button>
    </form>
  )
}
