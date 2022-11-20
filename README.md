# Clean Architecture

<sup>`By Johana Bukal, Alexandre Fontaine, Colin Espinas.`</sup>

This project is an exercise on the theme of clean code, clean architecture and test driven development.

The goal of the exercise is to create an app to manage customers documents (bills, quotes, etc.).

## Structure

This repository is a mono-repo using `npm` workspaces. This allows to share dependencies between the different apps (frontend and backend).

We could only go so far as to create the backend.

## Technology stack

| Name   | Usage                                         |
| ------ | --------------------------------------------- |
| Vitest | Test framework to test our code.              |
| Nitro  | Web server framework to create api endpoints. |
| nanoid | Generate random UUID.                         |

## Running the project

To get and install the project:

```sh
> git clone git@github.com:IIM-Creative-Technology/RenduCleanCodeA5-IWM1.git
> cd RenduCleanCodeA5-IWM1
> npm install
```

To get the backend running for development:

```sh
> npm run dev -w backend
```

> To run a script in a workspace just use `-w <workspace>` and `-ws` to run it in all workspaces at once. Learn more about workspaces [here](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true#running-commands-in-the-context-of-workspaces).

To run tests:

```sh
> npm run test -w <workspace>
```

To get test coverage report:

```sh
> npm run coverage -w <workspace>
```

## API usage

Once the backend is running you should have access to different API routes:

| Method | Path            | Description                                       |
| ------ | --------------- | ------------------------------------------------- |
| GET    | `/clients`      | Get all clients.                                  |
| GET    | `/clients/<id>` | Get client with `<id>`.                           |
| POST   | `/clients`      | Add a client from request body data.              |
| PATCH  | `/clients/<id>` | Update client with `<id>` from request body data. |
| DELETE | `/client/<id>`  | Delete client with `<id>`.                        |

## Contributing

**Please read through the [contributing guidelines](./.github/CONTRIBUTING.md) for more details.**
