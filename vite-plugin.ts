export type BuildInfoFromRoot = {
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
