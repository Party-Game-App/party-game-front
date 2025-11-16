import { PropsStepProgress } from '@/@types'

export default function ProgressBar({ step }: PropsStepProgress) {
  const percent = step === 1 ? 50 : 100
  const details = step === 1 ? 'Account Details' : 'Gamer Details'

  return (
    <section className="font-main flex flex-col gap-1">
      <section className="bg-light-2 h-1 w-full overflow-hidden rounded-full">
        <div
          className="bg-main h-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        ></div>
      </section>

      <p className="text-light-2 text-[10px]">
        Step {step} of 2: {details}
      </p>
    </section>
  )
}
