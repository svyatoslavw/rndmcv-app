# Commit Message Guidelines

We follow the commit message conventions as defined by `commitlint-config-conventional`, based on the Angular convention. Below are the common commit types and their descriptions:

## Commit Types

1. **build**

   - **Description**: Changes that affect the build system or external dependencies.
   - **Examples**:
     - `build: add commitlint configuration`
     - `build: upgrade to Next.js 14`

2. **chore**

   - **Description**: Routine tasks and maintenance activities that do not modify source code or tests.
   - **Examples**:
     - `chore: cleanup old log files`
     - `chore: add .editorconfig`

3. **ci**

   - **Description**: Changes to the continuous integration configuration files and scripts.
   - **Examples**:
     - `ci: add code coverage report`
     - `ci: update GitHub Actions workflow`

4. **docs**

   - **Description**: Documentation-only changes.
   - **Examples**:
     - `docs: add API documentation`
     - `docs: update README with new instructions`

5. **feat**

   - **Description**: A new feature or significant addition to the codebase.
   - **Examples**:
     - `feat: implement dark mode`
     - `feat: add user profile page`

6. **fix**

   - **Description**: A bug fix.
   - **Examples**:
     - `fix: resolve issue with form validation`
     - `fix: patch security vulnerability in dependency`

7. **perf**

   - **Description**: Changes that improve performance.
   - **Examples**:
     - `perf: enhance database query efficiency`
     - `perf: optimize image loading`

8. **refactor**

   - **Description**: Code changes that neither fix a bug nor add a feature but improve the code's structure and readability.
   - **Examples**:
     - `refactor: simplify user service logic`
     - `refactor: update class names for consistency`

9. **revert**

   - **Description**: Reverting a previous commit.
   - **Examples**:
     - `revert: revert commit #12345`

10. **style**

    - **Description**: Changes that do not affect the meaning of the code (e.g., formatting, adding missing semicolons).
    - **Examples**:
      - `style: format code according to ESLint rules`
      - `style: correct indentation`

11. **test**
    - **Description**: Adding or updating tests.
    - **Examples**:
      - `test: add unit tests for authentication`
      - `test: fix broken tests`

## Read More

<https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional>
