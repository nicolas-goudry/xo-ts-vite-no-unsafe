import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'

export type BuildInfoFromSrc = {
  git: {
    branch: string
    commitId: string
    shortCommitId: string
    commitTime: string | number
  }
  build: {
    name: string
    version: string
    time: string | number
  }
}

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
