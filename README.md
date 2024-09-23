# LazyHexa

LazyHexa is a CLI tool designed to simplify the generation of code following [Hexagonal Architecture in NestJS](https://github.com/Sairyss/domain-driven-hexagon). Built on top of Plop.js, it supports creating modules, commands, and queries, automating repetitive tasks and helping you build scalable and maintainable applications faster.

### Features

- Generate NestJS modules with Hexagonal Architecture.
- Automatically create `commands`, `queries`, `entities`, `services`, `controllers`, and more.
- Supports CRUD operations: `Create`, `Read` (single and list), `Update`, `Delete`.

### Installation

```
npm install -D lazyhexa
```

Alternatively, you can use npx to run LazyHexa without installation:

```
npx lazyhexa
```

### Usage

##### Generate a Module

To generate a module with the required files:

```
npm run lazyhexa module
```

You'll be prompted for:

- **Module name:** The name of your module.
- **Root path:** The path where your modules are stored (default is `src`).
- **Skip if exists:** Option to skip file creation if it already exists.
- **Auto-add route:** Option to automatically add the module’s routes to `app.routes.ts`.

##### Generate a Command or Query

You can also generate a specific command or query for a module:

```
npm run lazyhexa operation
```

You'll be prompted for:

- **Module name:** The name of the module you want to add a command or query to.
- **Operation:** Choose from `create`, `update`, `delete`, `get`, or `getList`.
- **Root path:** The path where your modules are stored (default is `src`).
- **Skip if exists:** Option to skip file creation if it already exists.

##### Example

To generate a module called `User`, run:

```
npm run lazyhexa module
```

When prompted, enter `User` as the module name. This will generate the following structure:

```
src/modules/user/
│
├── user.module.ts
├── user.mapper.ts
├── user.di-token.ts
│
├── domain/
│   ├── user.entity.ts
│   ├── user.model.ts
│   └── user.type.ts
│
├── dtos/
│   └── user.response.ts
│
├── database/
│   ├── user.repository.port.ts
│   └── user.repository.ts
│
├── commands/
│   └── create-user/
│       ├── create-user.command.ts
│       ├── create-user.controller.ts
│       ├── create-user.request.ts
│       └── create-user.service.ts
│
├── queries/
│   └── get-user/
│       ├── get-user.query.ts
│       ├── get-user.controller.ts
│       └── get-user.service.ts
```
