// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom)
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal

import Markdown from 'react-markdown'

const markdown = `
# Pluto

**Pluto** (minor-planet designation: *134340 Pluto*)
is a
[dwarf planet](https://en.wikipedia.org/wiki/Dwarf_planet)
in the
[Kuiper belt](https://en.wikipedia.org/wiki/Kuiper_belt).
`

function App() {
  return <Markdown>{markdown}</Markdown>
}

export default App
