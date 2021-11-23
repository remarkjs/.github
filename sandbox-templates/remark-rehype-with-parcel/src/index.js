// ⚠️ Important! Please make sure the dependencies are up to date.
// You can refresh them in the Dependencies section (left-bottom on CodeSandbox)

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

document.querySelector('#source').textContent = sourceMarkdown

unified()
  .use(remarkParse)
  // Add any remark plugins here
  .use(remarkRehype)
  // Add any rehype plugins here
  .use(rehypeStringify)
  .process(sourceMarkdown)
  .then((file) => {
    document.querySelector('#result').contentWindow.document.body.innerHTML =
      String(file)
  })
  .catch((error) => {
    document.querySelector('#error').textContent = error
  })
