import { Agent, run } from '@openai/agents';
import { aisdk } from '@openai/agents-extensions';
import { google } from '@ai-sdk/google';

/**
 * Example demonstrating Gemini 2.5 Pro with reasoning capabilities
 * using the Vercel AI SDK integration with OpenAI Agents SDK.
 *
 * This example shows how the AI SDK extension now properly handles
 * reasoning content from models that support it.
 */
async function main() {
  // Initialize Gemini 2.5 Pro with reasoning enabled
  const model = aisdk(google('gemini-2.5-pro'));

  // Create an agent that will benefit from reasoning
  const reasoningAgent = new Agent({
    name: 'Reasoning Assistant',
    instructions: `
      You are a helpful assistant with advanced reasoning capabilities.
      When faced with complex problems, break them down step by step.
      Show your reasoning process clearly before providing final answers.
      Use logical thinking to analyze problems from multiple angles.
    `,
    model,
    modelSettings: {
      providerData: {
        google: {
          thinking_config: {
            thinkingBudget: 8192,
            includeThoughts: true,
          },
        },
      },
    },
  });

  console.log('🤖 Testing Gemini 2.5 Pro with reasoning...\n');

  // Test with a reasoning-intensive question
  const question = `
    A lily pad doubles in size every day. If it takes 30 days to cover the entire pond,
    on which day did it cover half the pond? Explain your reasoning step by step.
  `;

  console.log('Question:', question.trim());
  console.log('\n--- Agent Response ---\n');

  try {
    const result = await run(reasoningAgent, question);

    console.log('Final Answer:', result.finalOutput);

    // Show usage information from the last raw response
    const lastResponse = result.rawResponses[result.rawResponses.length - 1];
    if (lastResponse?.usage) {
      console.log('\n--- Usage Information ---');
      console.log(`Input tokens: ${lastResponse.usage.inputTokens}`);
      console.log(`Output tokens: ${lastResponse.usage.outputTokens}`);
      console.log(`Total tokens: ${lastResponse.usage.totalTokens}`);
    }

    // Check if reasoning was included in the response
    const hasReasoning = result.output.some(
      (item) => item.type === 'reasoning',
    );
    if (hasReasoning) {
      console.log('\n✅ Reasoning content was successfully captured!');
    } else {
      console.log('\n⚠️  No reasoning content found in response');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the example
main().catch(console.error);
