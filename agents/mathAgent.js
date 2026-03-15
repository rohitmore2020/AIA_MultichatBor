
import chatAgent from "./chatAgent.js";

async function mathAgent(query) {
  return "[Math Agent]\n" + await chatAgent("Solve this math problem step by step: " + query);
}

export default mathAgent;
