export interface NavInfosProps {
  label: string
  url: string
}

export type PropsStepProgress = {
  step: 1 | 2
}

export interface RegisterInputProps {
  label: string
  nickname: string
  placeholder: string
  type: 'nickname' | 'email' | 'password'
  register: any
  errors?: any
}

export interface CustomCheckboxProps {
  checked?: boolean
  onChange?: (value: boolean) => void
  initialChecked?: boolean
}
