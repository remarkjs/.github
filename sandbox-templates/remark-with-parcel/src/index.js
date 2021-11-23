// ⚠️ Important! Please make sure the dependencies are up to date.
// You can refresh them in the Dependencies section (left-bottom on CodeSandbox)

import {remark} from 'remark'

const sourceMarkdown = `
# heading

* list
* item

\`\`\`js
function () {}
\`\`\`
`

document.querySelector('#source').textContent = sourceMarkdown

remark()
  // .use remark plugins here
  .process(sourceMarkdown)
  .then((file) => {
    document.querySelector('#result').textContent = String(file)
  })
  .catch((error) => {
    document.querySelector('#error').textContent = error
  })
