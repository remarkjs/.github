// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom)
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal

import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

const markdown = `
# Pluto

**Pluto** (minor-planet designation: *134340 Pluto*)
is a
[dwarf planet](https://en.wikipedia.org/wiki/Dwarf_planet)
in the
[Kuiper belt](https://en.wikipedia.org/wiki/Kuiper_belt).
`

const $error = document.querySelector('#error')!
const $result = document.querySelector<HTMLIFrameElement>('#result')!
const $source = document.querySelector('#source')!

try {
  $source.textContent = markdown

  const file = await unified()
    .use(remarkParse)
    // Add any remark plugins here
    .use(remarkRehype)
    // Add any rehype plugins here
    .use(rehypeStringify)
    .process(markdown)

  $error.textContent = ''
  $result.contentWindow!.document.body.innerHTML = String(file)
} catch (error) {
  $error.textContent = String(error)
  $result.contentWindow!.document.body.textContent = ''
}
