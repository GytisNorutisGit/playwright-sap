y# Playwright SAP Testing Project

This project uses Playwright for end-to-end testing.

## Setup

Install dependencies:
```bash
npm install
```

Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests in headed mode:
```bash
npm run test:headed
```

Run tests in debug mode:
```bash
npm run test:debug
```

Run tests in UI mode:
```bash
npm run test:ui
```

View test report:
```bash
npm run report
```

## Project Structure

- `tests/` - Test files
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies and scripts
