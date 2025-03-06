export type QuestionType = 'text' | 'number' | 'select'

export interface BaseQuestion {
  id: string
  type: QuestionType
  label: string
  required: boolean
  defaultValue?: unknown
  isValid?: boolean
  isSaving?: boolean
  error?: string
}

export interface TextQuestion extends BaseQuestion {
  type: 'text'
  defaultValue?: string
  minLength?: number
  maxLength?: number
}

export interface NumberQuestion extends BaseQuestion {
  type: 'number'
  defaultValue?: number
  min?: number
  max?: number
}

export interface SelectQuestion extends BaseQuestion {
  type: 'select'
  options: { label: string; value: string | number }[]
  defaultValue?: string | number
}

export type Question = TextQuestion | NumberQuestion | SelectQuestion

export interface Form {
  id: string
  title: string
  description?: string
  questions: Question[]
}

export interface FormValues {
  [key: string]: unknown
}
