# Gemini 2.5 Pro Thinking Example

This example demonstrates Gemini 2.5 Pro with thinking/reasoning capabilities using the Vercel AI SDK integration with OpenAI Agents SDK.

## Features

- ✅ **Thinking Support**: Uses Gemini's thinking capabilities with `thinkingConfig`
- ✅ **Reasoning Infrastructure**: Leverages the implemented reasoning support in the AI SDK extension
- ✅ **Gemini 2.5 Pro**: Latest Gemini model with advanced thinking capabilities
- ✅ **Usage Tracking**: Shows token usage including thinking tokens
- ✅ **Content Verification**: Confirms thinking content is properly captured

## Setup

1. Install dependencies:

```bash
cd examples/ai-sdk
pnpm install
```

2. Set up your Google AI API key:

```bash
export GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

## Usage

Run the example:

```bash
pnpm start:reasoning
```

## What It Does

The example creates an agent that:

1. Uses Gemini 2.5 Pro with thinking enabled (`thinkingBudget: 1024`, `includeThoughts: true`)
2. Asks a classic reasoning puzzle (lily pad doubling problem)
3. Shows the model's step-by-step thinking process
4. Displays token usage information
5. Verifies that thinking content was properly captured

## Expected Output

```
🤖 Testing Gemini 2.5 Pro with reasoning...

Question: A lily pad doubles in size every day. If it takes 30 days to cover the entire pond, on which day did it cover half the pond? Explain your reasoning step by step.

--- Agent Response ---

[Gemini's thinking/reasoning process will be shown here]

Final Answer: The lily pad covered half the pond on day 29.

--- Usage Information ---
Input tokens: 45
Output tokens: 234
Total tokens: 279

✅ Reasoning content was successfully captured!
```

## Configuration

The example configures Gemini with:

```typescript
thinkingConfig: {
  thinkingBudget: 1024,  // Maximum tokens for thinking
  includeThoughts: true, // Include thinking content in response
}
```

## Troubleshooting

- **No thinking content**: Gemini's thinking may be returned as regular text rather than structured reasoning
- **API errors**: Verify your `GOOGLE_GENERATIVE_AI_API_KEY` is set correctly
- **Missing dependencies**: Run `pnpm install` in the examples/ai-sdk directory
- **Model compatibility**: Ensure you're using a compatible version of the Google AI SDK
