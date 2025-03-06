'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { Form, Question, QuestionType } from '@/types/form'
// import { getForm, saveForm } from '@/services/api'
// import { useToast } from '@/components/ui/use-toast'
import { Loader2, Plus } from 'lucide-react'
// import QuestionBuilder from '@/components/question-builder'
import { v4 as uuidv4 } from 'uuid'

interface FormBuilderProps {
  onFormChange: (form: Form) => void
}

export default function FormBuilder({ onFormChange }: FormBuilderProps) {
  const [form, setForm] = useState<Form>({
    id: uuidv4(),
    title: 'Untitled Form',
    description: 'lorem',
    questions: [],
  })
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(true)
  //   const { toast } = useToast()

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
            <Input
              placeholder="Form Title"
              value={form.title}
              onChange={() => null}
            />
          </div>
          <div>
            <Textarea
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
        <Button onClick={() => null} variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Text
        </Button>
        <Button onClick={() => null} variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Number
        </Button>
        <Button onClick={() => null} variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Select
        </Button>
      </div>
    </div>
  )
}
