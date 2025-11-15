import { CustomCheckboxProps } from '@/@types'

export default function CustomCheckbox({ checked, onChange }: CustomCheckboxProps) {
  return (
    <button
      type="button"
      onClick={() => onChange?.(!checked)}
      className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border transition duration-200 ${checked ? 'bg-main border-main' : 'border-main bg-white'} `}
    >
      <svg
        className={`h-4 w-4 text-white transition-opacity duration-200 ${
          checked ? 'opacity-100' : 'opacity-0'
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>

      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange?.(!checked)}
        className="hidden"
      />
    </button>
  )
}
