# Contributing to React Toggly

We love your input! We want to make contributing to React Toggly as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Update the CHANGELOG.md following [Keep a Changelog](https://keepachangelog.com/) format
7. Issue that pull request!

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Make your changes
5. Build and test:
   ```bash
   npm run build
   npm run demo:preview
   ```

## Pull Request Format

When creating a pull request, please follow this format:

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## How Has This Been Tested?
Describe the tests you ran and how they verify your changes

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have updated the CHANGELOG.md file
- [ ] I have updated the version number (if applicable)

## Screenshots (if appropriate)
Add screenshots here

## Additional Notes
Any additional information that might be helpful
```

## Commit Message Format

We follow a semantic commit message format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for code style changes (formatting, etc)
- `refactor:` for code refactoring
- `test:` for test-related changes
- `chore:` for build process or auxiliary tool changes

Example:
```
fix: enhance disabled state styling with distinct colors

- Add specific colors for disabled background (#e9ecef)
- Remove opacity-based styling
- Ensure consistent appearance across themes
```

## License
By contributing, you agree that your contributions will be licensed under the same license as the project.
