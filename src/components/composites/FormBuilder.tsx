import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BaseButton, BaseInput, BaseLabel, BaseTextArea } from '@/components/ui'
import type { Form } from '@/types/form'
import { Loader2 } from 'lucide-react'

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
    return <Loader2 className="mx-auto h-8 w-8 animate-spin" />
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <BaseLabel htmlFor="form-title">Title</BaseLabel>
        <BaseInput
          id="form-title"
          placeholder="Form Title"
          value={form.title}
          onChange={() => null}
        />
      </div>

      <div className="space-y-3">
        <BaseLabel htmlFor="form-desc">Description</BaseLabel>
        <BaseTextArea
          id="form-desc"
          placeholder="Short Description"
          className="resize-none"
        />
      </div>

      <div className="space-y-3">
        <BaseButton>Add Fields</BaseButton>
      </div>
    </div>
  )
}

export default FormBuilder
