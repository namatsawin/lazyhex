# LazyHex

LazyHex is a CLI tool designed to simplify the generation of code following [Hexagonal Architecture in NestJS](https://github.com/Sairyss/domain-driven-hexagon). With support for creating modules, commands, and queries, LazyHexNest automates repetitive tasks, helping you build scalable and maintainable applications faster.

### Features

- Generate NestJS modules with Hexagonal Architecture.
- Automatically create commands, queries, entities, services, controllers, and more.
- Supports CRUD operations: Create, Read (single and list), Update, Delete.
- Option to skip file creation if files already exist.
- Automatically add routes to your application if desired.

### Installation

```
npm install -g lazyhexnest
```

### Usage

##### Generate a Module

To generate a module with the required files:

```
npm lazyhex module
```

You'll be prompted for:

- Module name: The name of your module.
- Root path: The path where your modules are stored (default is src).
- Skip if exists: Option to skip file creation if it already exists.
- Auto-add route: Option to automatically add the module’s routes to app.routes.ts.
- Generate a Command or Query
- You can also generate a specific command or query for a module:

##### Generate a Command or Query

You can also generate a specific command or query for a module:

```
npm lazyhex operation
```

You'll be prompted for:

- Module name: The name of the module you want to add a command or query to.
- Operation: Choose from create, update, delete, get, or getList.
- Root path: The path where your modules are stored.
- Skip if exists: Option to skip file creation if it already exists.

##### Example

To generate a module called `User`, run:

```
npm lazyhex module
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
