
import chatAgent from "./chatAgent.js";

async function summaryAgent(query) {
  return "[Summary Agent]\n" + await chatAgent("Summarize: " + query);
}

export default summaryAgent;
