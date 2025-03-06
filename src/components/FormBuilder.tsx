'use client'

import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  BaseButton,
  BaseInput,
  BaseTextArea,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui'
import type { Form, Question, QuestionType } from '@/types/form'
import { Loader2, Plus } from 'lucide-react'

// import { getForm, saveForm } from '@/services/api'
// import { useToast } from '@/components/ui/use-toast'
// import QuestionBuilder from '@/components/question-builder'

interface FormBuilderProps {
  onFormChange: (form: Form) => void
}
function FormBuilder({ onFormChange }: FormBuilderProps) {
  const [form, setForm] = useState<Form>({
    id: uuidv4(),
    title: 'Untitled Form',
    description: '',
    questions: [],
  })
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(true)

  useEffect(() => {}, [])

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Form Details</span>
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <BaseInput
              placeholder="Form Title"
              value={form.title}
              onChange={() => null}
            />
          </div>
          <div>
            <BaseTextArea
              placeholder="Form Description"
              value={form.description || ''}
              onChange={() => null}
              className="resize-none"
            />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">{/* Questions Builder */}</div>

      <div className="flex gap-2">
        <BaseButton onClick={() => null} variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Text
        </BaseButton>
        <BaseButton onClick={() => null} variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Number
        </BaseButton>
        <BaseButton onClick={() => null} variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Select
        </BaseButton>
      </div>
    </div>
  )
}

export default FormBuilder
