'use client'

import CustomCheckbox from '@/components/CustomCheckbox'
import ProgressBar from '@/components/ProgressBar'
import RegisterInput from '@/components/RegisterInput'
import { registerSchema, RegisterSchema } from '@/schemas/registerSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { WarningCircleIcon } from '@phosphor-icons/react'
import { Separator } from '@radix-ui/themes'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

export default function RegisterFlow() {
  const [step, setStep] = useState<1 | 2>(1)

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    control,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: {
      terms: false,
      marketing: true,
    },
  })

  const checkboxItems: {
    name: keyof RegisterSchema
    label: React.ReactNode
    defaultValue: boolean
  }[] = [
    {
      name: 'terms',
      label: (
        <>
          I agree to the terms of service and privacy policy, View{' '}
          <Link href="/terms-of-service" className="text-main underline">
            terms of service
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" className="text-main underline">
            privacy policy
          </Link>
          .
        </>
      ),
      defaultValue: false,
    },
    {
      name: 'marketing',
      label: 'Yes, send game news and promotions.',
      defaultValue: true,
    },
  ]

  async function validateFirstStep() {
    const fields: (keyof RegisterSchema)[] = ['nickname', 'email', 'password', 'terms']
    const valid = await trigger(fields)
    if (valid) setStep(2)
  }

  function onSubmit(data: RegisterSchema) {
    console.log('FORM DATA:', data)
  }

  return (
    <>
      <ProgressBar step={step} />

      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4 py-8!">
        {step === 1 && (
          <>
            <RegisterInput
              label="Nickname"
              nickname="nickname"
              type="nickname"
              placeholder="Enter your nickname here..."
              register={register}
              errors={errors}
            />

            <RegisterInput
              label="E-mail"
              nickname="email"
              type="email"
              placeholder="Enter your e-mail here..."
              register={register}
              errors={errors}
            />

            <RegisterInput
              label="Password"
              nickname="password"
              type="password"
              placeholder="Enter your password here..."
              register={register}
              errors={errors}
            />

            {checkboxItems.map((item) => (
              <section key={item.name} className="flex flex-col items-start justify-center gap-4">
                <div className="flex items-start justify-start gap-1">
                  <Controller
                    name={item.name}
                    control={control}
                    defaultValue={item.defaultValue}
                    render={({ field }) => (
                      <CustomCheckbox checked={!!field.value} onChange={field.onChange} />
                    )}
                  />

                  <p className="text-[12px]">{item.label}</p>
                </div>

                {item.name === 'terms' && errors.terms && (
                  <p className="flex items-start justify-start gap-1 text-[10px] text-red-400">
                    <WarningCircleIcon size={16} className="text-error" />
                    {errors.terms.message}
                  </p>
                )}

                <Separator size="4" className="bg-light-1! opacity-40" />
              </section>
            ))}

            <button
              type="button"
              onClick={validateFirstStep}
              disabled={!!errors.nickname || !!errors.email || !!errors.password}
              className={`group font-secondary bg-main text-light-2 border-main hover:text-main h-10 rounded-sm border-2 p-1! text-center text-lg font-bold duration-300 hover:bg-transparent ${
                errors.nickname || errors.email || errors.password
                  ? 'bg-light-3! hover:text-light-2! border-light-3! cursor-not-allowed opacity-50'
                  : 'cursor-pointer'
              }`}
            >
              <section className="relative flex h-full items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                    Next Step
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                    Next Step
                  </p>
                </div>
              </section>
            </button>
          </>
        )}
      </form>
    </>
  )
}
