// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom)
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal

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
