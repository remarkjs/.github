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

async function main() {
  document.querySelector('#source').textContent = sourceMarkdown

  try {
    const file = await unified()
      .use(remarkParse)
      // Add any remark plugins here
      .use(remarkRehype)
      // Add any rehype plugins here
      .use(rehypeStringify)
      .process(sourceMarkdown)

    document.querySelector('#result').contentWindow.document.body.innerHTML =
      String(file)
  } catch (error) {
    document.querySelector('#error').textContent = error
  }
}

main()
