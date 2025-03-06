import { TextCursorInput } from 'lucide-react'
import { BaseButton } from '@/components/ui'

function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between gap-4 p-6 md:p-10">
      <div className="flex items-center gap-3">
        <TextCursorInput /> <span className="font-semibold">Form Builder</span>
      </div>

      <BaseButton className="md:hidden" size="sm">
        Preview
      </BaseButton>
    </header>
  )
}

export default Header
