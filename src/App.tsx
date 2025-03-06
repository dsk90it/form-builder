import { FormBuilder, Header } from '@/components/composites'

function App() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <Header />
        <div className="flex-1 overflow-y-auto px-6 pb-6 md:px-10 md:pb-10">
          <FormBuilder onFormChange={() => {}} />
        </div>
      </div>

      <div className="md:bg-muted hidden md:flex md:flex-col md:gap-4">
        <p className="sticky top-0 p-6 font-semibold md:p-10">Preview</p>
        <div className="flex-1 overflow-y-auto px-6 pb-6 md:px-10 md:pb-10"></div>
      </div>
    </div>
  )
}

export default App
