import { TextCursorInput } from 'lucide-react'

function App() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <header className="flex items-center gap-3">
          <TextCursorInput />{' '}
          <span className="font-semibold">Form Builder</span>
        </header>
      </div>
      <div className="bg-muted flex flex-col gap-4 p-6 md:p-10"></div>
    </div>
  )
}

export default App
