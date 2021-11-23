// ⚠️ Important! Please make sure the dependencies are up to date.
// You can refresh them in the Dependencies section (left-bottom on CodeSandbox)

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
