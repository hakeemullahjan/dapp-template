/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const execSync = require('child_process').execSync

let fetchAbiCommand = 'npm exec fetch-abi output=src/contracts'

process.argv.forEach((arg, index) => {
  if (index > 1) {
    fetchAbiCommand += ` ${arg}`
  }
})

execSync(fetchAbiCommand)
execSync('npm run typechain')
