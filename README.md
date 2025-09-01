# PlaywrightPlayground

Check Node.js
```bash
node -v
npm -v
```
If you don't have Node.js

2 Options

1. Homebrew
```bash
brew install node
```

2. Node.js official site

Download LTS version
https://nodejs.org

## Installation

Clone the repository:

```bash
git clone <repo-url>
cd <repo-folder>

```

## Install dependencies 
```bash
npm install 
```

## Install Playwright browsers 
```bash
npx playwright install
```

Verify installation
```bash
npx playwright test --version
```

## Run 

Run All Tests
```bash
npx playwright test
```

Run a specific test file
```bash
npx playwright test tests/juiceshop.spec.js 
```
Run a specific test by name
```bash
npx playwright test -g "TC 3"
```
