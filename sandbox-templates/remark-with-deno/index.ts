import {remark} from "npm:remark"

const markdown = `
# heading

* list
* item

\`\`\`js
function () {}
\`\`\`
`

const vfile = await remark().process(markdown)

console.log("resulting markdown:")
console.log(vfile.value)
