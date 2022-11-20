# How to contribute

## Prerequisites

- Fork the repository and clone your fork.
- Create a branch and name it explicitly, like so: `feature/<issue-id>-<name-of-the-feature>`

## Development workflow

In most cases you'll start from `main` branch and merge back to `main` branch.

Refer to the [README](../README.md#running-the-project) to learn how to get the project started.

**Don’t forget to update documentation (readme) for your changes.**

**Please update npm lock file (`package-lock.json`) if you add or update dependencies.**

## Other notes

- If you have commit access to repository and want to make big change or not sure about something, make a new branch and open pull request.
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), like so: `feat(scope): topic`.
- Try naming files according to their exports (using camel case for functions and pascal for classes).
- Don’t commit generated files.
