export async function processUserMessage(message: string): Promise<string> {
  // This is a simple mock response. In a real application, you would
  // connect this to your AI service (e.g., OpenAI API)
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
  
  const responses = [
    "I can help you find information about system installation and configuration.",
    "Would you like to learn more about the maintenance procedures?",
    "I can guide you through the technical specifications.",
    "Let me help you understand the safety guidelines.",
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}