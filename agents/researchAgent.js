
import chatAgent from "./chatAgent.js";

async function researchAgent(query) {
  return "[Research Agent]\n" + await chatAgent("Provide a detailed research answer: " + query);
}

export default researchAgent;
