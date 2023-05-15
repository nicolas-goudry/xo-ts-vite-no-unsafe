import type {BuildInfoFromRoot} from '../vite-plugin'
import type {BuildInfoFromSrc} from './main'

const response = await fetch('/some-url')
// This is not OK for typescript-eslint
const data: BuildInfoFromRoot = await response.json()

// It’s ok from a local type though
type BuildInfoFromLocal = {
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
const data2 = (await response.json()) as unknown as BuildInfoFromLocal

// OK also if type import is from under src directory
const data3 = (await response.json()) as unknown as BuildInfoFromSrc

function App() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default App
