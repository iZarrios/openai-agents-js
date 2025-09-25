# AI SDK Examples

This directory contains examples showing how to run the Agents SDK with models provided by the [Vercel AI SDK](https://sdk.vercel.ai).

## Basic Example ([index.ts](./index.ts))

Shows basic usage with OpenRouter and other providers:

- Wraps AI SDK providers with `aisdk` from `@openai/agents-extensions`
- Creates a weather tool and demonstrates agent handoffs
- Supports multiple providers (OpenAI, Anthropic, Google, etc.)

**Run:**

```bash
pnpm -F ai-sdk start
```

## Gemini Reasoning Example ([gemini-reasoning.ts](./gemini-reasoning.ts))

Demonstrates Gemini 2.5 Pro with advanced reasoning capabilities:

- Uses Gemini 2.5 Pro with `reasoningEffort: 'high'`
- Shows how reasoning content is properly captured and displayed
- Includes usage tracking for reasoning tokens
- Perfect example of the reasoning support added to the AI SDK extension

**Setup:**

```bash
export GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

**Run:**

```bash
pnpm -F ai-sdk start:reasoning
```

## Streaming Example ([stream.ts](./stream.ts))

Shows how to use streaming responses with AI SDK models.

**Run:**

```bash
pnpm -F ai-sdk start:stream
```
