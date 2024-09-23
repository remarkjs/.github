// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom)
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal

import {remark} from 'remark'

const markdown = `
# Pluto

**Pluto** (minor-planet designation: *134340 Pluto*)
is a
[dwarf planet](https://en.wikipedia.org/wiki/Dwarf_planet)
in the
[Kuiper belt](https://en.wikipedia.org/wiki/Kuiper_belt).
`

const $error = document.querySelector('#error')!
const $result = document.querySelector('#result')!
const $source = document.querySelector('#source')!

try {
  $source.textContent = markdown

  const file = await remark()
    // .use remark plugins here
    .process(markdown)

  $error.textContent = ''
  $result.textContent = String(file)
} catch (error) {
  $error.textContent = String(error)
  $result.textContent = ''
}
