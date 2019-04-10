const readline = require('readline')

const main = async () => {
  const text = await line()
  const count = await int()
  let found = 0
  let i = 0
  let word
  while (i < count) {
    word = await line()
    if (text.indexOf(word) !== -1) found ++
    i ++
  }
  console.log(found)
}

// The following are just helpers to read the input
const lines = []
let lineIndex = 0
const rl = readline.createInterface(process.stdin)
rl.on('line', line => lines.push(line))

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
const line = async () => {
  while (lines.length <= lineIndex)
    await wait(10)
  const result = lines[lineIndex].trim()
  lines[lineIndex] = null
  lineIndex ++
  return result
}
const words = async () => (await line()).split(' ')
const int = async () => parseInt(await line())
const ints = async () => (await words()).map(x => parseInt(x))


main()