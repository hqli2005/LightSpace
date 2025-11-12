# Monorepo Blog

This repository is a monorepo that contains two applications: a Next.js blog and a NestJS API.

## Applications

### Next.js Blog

The Next.js application is located in the `apps/next-blog` directory. It serves as the frontend for the blog.

- **Directory**: `apps/next-blog`
- **Main Page**: `src/app/page.tsx`
- **Layout Component**: `src/components/Layout.tsx`
- **Global Styles**: `src/styles/globals.css`
- **Configuration**: 
  - `package.json`: Lists dependencies and scripts.
  - `next.config.js`: Contains specific Next.js configurations.
  - `tsconfig.json`: TypeScript configuration for the Next.js app.

### NestJS API

The NestJS application is located in the `apps/nest-api` directory. It serves as the backend for the blog.

- **Directory**: `apps/nest-api`
- **Main Entry**: `src/main.ts`
- **Root Module**: `src/app.module.ts`
- **Controller**: `src/controllers/app.controller.ts`
- **Service**: `src/services/app.service.ts`
- **Configuration**: 
  - `package.json`: Lists dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration for the NestJS app.

## Deployment

The Next.js application is deployed to GitHub Pages. The deployment process is automated using GitHub Actions, configured in the `.github/workflows/deploy-blog.yml` file.

## Getting Started

To get started with this monorepo, you can install the dependencies and run the applications:

1. Install dependencies:
   ```
   pnpm install
   ```

2. Run the Next.js application:
   ```
   pnpm --filter next-blog run dev
   ```

3. Run the NestJS application:
   ```
   pnpm --filter nest-api run start
   ```

## Contributing

Feel free to submit issues or pull requests to improve the project!