// ⚠️ Important! Please make sure the dependencies are up to date.
// You can refresh them in the Dependencies section (left-bottom on CodeSandbox)

import { remark } from "remark";

const sourceMarkdown = `
# heading

* list
* item

\`\`\`js
function () {}
\`\`\`
`;

document.getElementById("source").textContent = sourceMarkdown;

remark()
  // .use remark plugins here
  .process(sourceMarkdown)
  .then(
    (file) => (document.getElementById("result").textContent = String(file))
  )
  .catch((err) => (document.getElementById("error").textContent = err));
