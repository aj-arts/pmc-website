# Product Management Club Website

## Getting Started

To run the development server, run:

```bash
pnpm dev
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The pipeline automatically runs on:

- Every push to `main` branch
- Every push to feature branches (e.g., `deepti-branch`)
- Every Pull Request to `main`

### Pipeline Steps

1. **Lint and Format Check** - Validates code quality and formatting
2. **Build** - Ensures the application builds successfully

See [.github/workflows/WORKFLOW.md](.github/workflows/WORKFLOW.md) for detailed workflow instructions.