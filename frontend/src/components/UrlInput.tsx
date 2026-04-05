
import { useState } from 'react'
import ResultCard from './ResultCard'

function UrlInput() {
  const [url, setUrl] = useState('')

  return (
    <div>
      <input
        type="text"
        placeholder="Paste a long URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={() => console.log(url)}>Shorten</button>
      <ResultCard url={url} />
    </div>
  )
}

export default UrlInput