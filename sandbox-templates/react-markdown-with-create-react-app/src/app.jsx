// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom)
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal

import React from 'react'
import Markdown from 'react-markdown'

const markdownSource = `
# heading

* list
* items

\`\`\`js
function () {}
\`\`\`
`

const App = () => <Markdown>{markdownSource}</Markdown>

export default App
