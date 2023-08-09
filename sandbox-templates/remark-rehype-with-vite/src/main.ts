// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom)
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal

import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const sourceMarkdown = `
# heading

* list
* item

\`\`\`js
function () {}
\`\`\`
`

try {
  document.querySelector<HTMLPreElement>('#source')!.textContent =
    sourceMarkdown

  const file = await unified()
    .use(remarkParse)
    // Add any remark plugins here
    .use(remarkRehype)
    // Add any rehype plugins here
    .use(rehypeStringify)
    .process(sourceMarkdown)

  document.querySelector<HTMLIFrameElement>(
    '#result'
  )!.contentWindow!.document.body.innerHTML = String(file)
  document.querySelector<HTMLPreElement>('#error')!.textContent = ''
} catch (error) {
  document.querySelector<HTMLPreElement>('#error')!.textContent = String(error)
}
