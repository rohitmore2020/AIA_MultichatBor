
import chatAgent from "./chatAgent.js";

async function codeAgent(query) {
  return "[Code Agent]\n" + await chatAgent("Explain with code: " + query);
}

export default codeAgent;
