# Gemini Code Assistant Context

This document provides context for the Gemini Code Assistant to understand the `openai-agents-js` project.

## Project Overview

The `openai-agents-js` project is a TypeScript-based monorepo for building multi-agent workflows. It is provider-agnostic, supporting OpenAI APIs and more. The project is structured as a pnpm workspace, with packages located in the `packages/` directory, examples in the `examples/` directory, and documentation in the `docs/` directory.

### Core Concepts

- **Agents**: LLMs configured with instructions, tools, guardrails, and handoffs.
- **Handoffs**: Specialized tool calls for transferring control between agents.
- **Guardrails**: Configurable safety checks for input and output validation.
- **Tracing**: Built-in tracking of agent runs, allowing you to view, debug, and optimize your workflows.

### Key Technologies

- **TypeScript**: The primary language for the project.
- **pnpm**: Used for package management and workspace orchestration.
- **Vite/Vitest**: Used for testing.
- **ESLint**: Used for linting.
- **Prettier**: Used for code formatting.
- **Changesets**: Used for version management and changelog generation.
- **Astro**: Used for the documentation site.

## Building and Running

The project uses pnpm for all build, test, and run commands.

### Build

- `pnpm build`: Build all packages.
- `pnpm -r build-check`: Type-check all packages without emitting files.

### Testing

- `pnpm test`: Run all tests.
- `pnpm test:watch`: Run tests in watch mode.
- `pnpm test:coverage`: Run tests with coverage.
- `pnpm test:integration`: Run integration tests.
- `npx vitest run path/to/test.ts`: Run a single test file.

### Linting

- `pnpm lint`: Run ESLint.
- `pnpm lint:fix`: Run ESLint and automatically fix issues.

### Running Examples

The `examples/` directory contains numerous examples. To run an example, use the `pnpm examples:<example-name>` command. For example:

- `pnpm examples:basic`: Run the basic example.
- `pnpm examples:agents-as-tools`: Run the agents-as-tools example.

### Documentation

- `pnpm docs:dev`: Serve the documentation site locally at `http://localhost:4321`.

## Development Conventions

### Code Style

- **Formatting**: Single quotes, 2-space indentation, trailing commas (enforced by Prettier).
- **Imports**: Group by external/internal, no unused imports, sort alphabetically.
- **Types**: Strict TypeScript, explicit types, no `any` except for shims.
- **Naming**: `camelCase` for variables/functions, `PascalCase` for classes/types/interfaces.
- **Error Handling**: Custom error classes extending `AgentsError`, with descriptive messages.
- **Comments**: JSDoc for public APIs.

### Commits and Versioning

- **Commits**: Conventional Commits format (e.g., `feat:`, `fix:`, `docs:`).
- **Versioning**: [Changesets](https://github.com/changesets/changesets) are used for version management. Run `pnpm changeset` to create a new changeset for a pull request.

### Contribution Guidelines

- Fork the repository and create a branch from `main`.
- Ensure the following commands pass before submitting a pull request: `pnpm build && pnpm test && pnpm lint`.
- If applicable, generate a changeset.
- Use squash merging for pull requests.
