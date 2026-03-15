
import chatAgent from "./chatAgent.js";
import codeAgent from "./codeAgent.js";
import summaryAgent from "./summaryAgent.js";
import mathAgent from "./mathAgent.js";
import researchAgent from "./researchAgent.js";

async function routerAgent(query) {
  const q = query.toLowerCase();

  if (q.includes("code") || q.includes("program")) {
    return codeAgent(query);
  }

  if (q.includes("summarize") || q.includes("summary")) {
    return summaryAgent(query);
  }

  if (q.includes("solve") || q.includes("math")) {
    return mathAgent(query);
  }

  if (q.includes("research") || q.includes("explain")) {
    return researchAgent(query);
  }

  return chatAgent(query);
}

export default routerAgent;
