// ⚠️ Important! Please make sure the dependencies are up to date.
// You can refresh them in the Dependencies section (left-bottom on CodeSandbox)

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const sourceMarkdown = `
# heading

* list
* item

\`\`\`js
function () {}
\`\`\`
`;

document.getElementById("source").textContent = sourceMarkdown;

unified()
  .use(remarkParse)
  // add any remark plugins here
  .use(remarkRehype)
  // add any rehype plugins here
  .use(rehypeStringify)
  .process(sourceMarkdown)
  .then(
    (file) =>
      (document.getElementById(
        "result"
      ).contentWindow.document.body.innerHTML = String(file))
  )
  .catch((err) => (document.getElementById("error").textContent = err));
