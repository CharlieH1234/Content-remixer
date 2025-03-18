import { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState<string>('')
  const [outputText, setOutputText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleRemix = async () => {
    setIsLoading(true)
    try {
      // TODO: Implement API call to Claude
      // For now, just echo the input
      setOutputText(inputText)
    } catch (error) {
      console.error('Error remixing content:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Content Remixer</h1>
        
        <textarea
          className="w-full h-40 p-4 border rounded-lg"
          placeholder="Paste your content here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          onClick={handleRemix}
          disabled={isLoading || !inputText.trim()}
        >
          {isLoading ? 'Remixing...' : 'Remix Content'}
        </button>

        {outputText && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold mb-2">Remixed Output:</h2>
            <p className="whitespace-pre-wrap">{outputText}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App 