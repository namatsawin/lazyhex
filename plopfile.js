module.exports = (plop) => {
  //#region module
  plop.setGenerator('module', {
    description: 'Generate a module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name?',
      },
      {
        type: 'input',
        name: 'rootPath',
        message: 'Enter the root path for your modules (e.g., src):',
        default: 'src',
      },
      {
        type: 'confirm',
        name: 'skipIfExists',
        message: 'Do you want to skip if a file exists?',
        default: true
      },
      {
        type: 'confirm',
        name: `addRouteAuto`,
        message: `Would you like to automatically add your route to app.routes.ts? (Note: Manual addition is recommended to ensure accuracy.)`,
        default: false,
      },
    ],
    actions: function (data) {
      if (!data.name) throw new Error('The module name is required.');
      
      const basePath = `${data.rootPath}/modules/{{dashCase name}}`;
  
      const actions = [
        // Module and core files
        {
          type: 'add',
          path: `${basePath}/{{dashCase name}}.module.ts`,
          templateFile: 'templates/module/module.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/{{dashCase name}}.mapper.ts`,
          templateFile: 'templates/module/mapper.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/{{dashCase name}}.di-token.ts`,
          templateFile: 'templates/module/di-token.hbs',
          skipIfExists: data.skipIfExists
        },
        // Domain files
        {
          type: 'add',
          path: `${basePath}/domain/{{dashCase name}}.entity.ts`,
          templateFile: 'templates/module/domain/entity.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/domain/{{dashCase name}}.model.ts`,
          templateFile: 'templates/module/domain/model.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/domain/{{dashCase name}}.type.ts`,
          templateFile: 'templates/module/domain/type.hbs',
          skipIfExists: data.skipIfExists
        },
        
        // Dtos files
        {
          type: 'add',
          path: `${basePath}/dtos/{{dashCase name}}.response.ts`,
          templateFile: 'templates/module/dtos/response.hbs',
          skipIfExists: data.skipIfExists
        },

        // Database files
        {
          type: 'add',
          path: `${basePath}/database/{{dashCase name}}.repository.port.ts`,
          templateFile: 'templates/module/database/repository-port.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/database/{{dashCase name}}.repository.ts`,
          templateFile: 'templates/module/database/repository.hbs',
          skipIfExists: data.skipIfExists
        },

        // Create command Files
        {
          type: 'add',
          path: `${basePath}/commands/create-{{dashCase name}}/create-{{dashCase name}}.command.ts`,
          templateFile: 'templates/module/commands/create/command.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/commands/create-{{dashCase name}}/create-{{dashCase name}}.controller.ts`,
          templateFile: 'templates/module/commands/create/controller.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/commands/create-{{dashCase name}}/create-{{dashCase name}}.request.ts`,
          templateFile: 'templates/module/commands/create/request.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/commands/create-{{dashCase name}}/create-{{dashCase name}}.service.ts`,
          templateFile: 'templates/module/commands/create/service.hbs',
          skipIfExists: data.skipIfExists
        },
        

        // Update command files
        {
          type: 'add',
          path: `${basePath}/commands/update-{{dashCase name}}/update-{{dashCase name}}.command.ts`,
          templateFile: 'templates/module/commands/update/command.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/commands/update-{{dashCase name}}/update-{{dashCase name}}.controller.ts`,
          templateFile: 'templates/module/commands/update/controller.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/commands/update-{{dashCase name}}/update-{{dashCase name}}.request.ts`,
          templateFile: 'templates/module/commands/update/request.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/commands/update-{{dashCase name}}/update-{{dashCase name}}.service.ts`,
          templateFile: 'templates/module/commands/update/service.hbs',
          skipIfExists: data.skipIfExists
        },

        // Delete command files
        {
          type: 'add',
          path: `${basePath}/commands/delete-{{dashCase name}}/delete-{{dashCase name}}.command.ts`,
          templateFile: 'templates/module/commands/delete/command.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/commands/delete-{{dashCase name}}/delete-{{dashCase name}}.controller.ts`,
          templateFile: 'templates/module/commands/delete/controller.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/commands/delete-{{dashCase name}}/delete-{{dashCase name}}.service.ts`,
          templateFile: 'templates/module/commands/delete/service.hbs',
          skipIfExists: data.skipIfExists
        },

        // Get query files
        {
          type: 'add',
          path: `${basePath}/queries/get-{{dashCase name}}/get-{{dashCase name}}.query.ts`,
          templateFile: 'templates/module/queries/get/query.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/queries/get-{{dashCase name}}/get-{{dashCase name}}.controller.ts`,
          templateFile: 'templates/module/queries/get/controller.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/queries/get-{{dashCase name}}/get-{{dashCase name}}.service.ts`,
          templateFile: 'templates/module/queries/get/service.hbs',
          skipIfExists: data.skipIfExists
        },

        // Get list query files
        {
          type: 'add',
          path: `${basePath}/queries/get-{{dashCase name}}-list/get-{{dashCase name}}-list.query.ts`,
          templateFile: 'templates/module/queries/get-list/query.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/queries/get-{{dashCase name}}-list/get-{{dashCase name}}-list.controller.ts`,
          templateFile: 'templates/module/queries/get-list/controller.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/queries/get-{{dashCase name}}-list/get-{{dashCase name}}-list.service.ts`,
          templateFile: 'templates/module/queries/get-list/service.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/queries/get-{{dashCase name}}-list/get-{{dashCase name}}-list.request.ts`,
          templateFile: 'templates/module/queries/get-list/request.hbs',
          skipIfExists: data.skipIfExists
        },
        {
          type: 'add',
          path: `${basePath}/queries/get-{{dashCase name}}-list/get-{{dashCase name}}-list.response.ts`,
          templateFile: 'templates/module/queries/get-list/response.hbs',
          skipIfExists: data.skipIfExists
        },
      ]

      if (data.addRouteAuto) {
        actions.push(
          // {
          //   type: 'add',
          //   path: `${data.rootPath}/configs/app.routes.ts`,
          //   templateFile: 'templates/configs/app.routes.hbs',
          //   skipIfExists: true
          // },
          {
            type: 'modify',
            path: `${data.rootPath}/configs/app.routes.ts`,
            pattern: /(\n\};)/,
            template: `\n
  {{camelCase name}}: {
    root: \`{{dashCase name}}s\`,
    getList: \`{{dashCase name}}s\`,
    get: \`/{{dashCase name}}s/:id\`,
    create: \`/{{dashCase name}}s\`,
    update: \`/{{dashCase name}}s/:id\`,
    delete: \`/{{dashCase name}}s/:id\`,
  },
};`
          }
        )
      }

      return actions
    },
  });
  //#endregion

  //#region command
  plop.setGenerator('operation', {
    description: 'Generate a command/query',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name?',
      },
      {
        type: 'list',
        name: `operation`,
        choices: ['create', 'update', 'delete', 'get', 'getList'],
      },
      {
        type: 'input',
        name: 'rootPath',
        message: 'Enter the root path for your modules (e.g., src):',
        default: 'src',
      },
      {
        type: 'confirm',
        name: 'skipIfExists',
        message: 'Do you want to skip if a file exists?',
        default: true
      },
    ],
    actions: function (data) {
      if (!data.name) throw new Error('The module name is required.');
      if (!data.operation) throw new Error('The operation is required.');
      
      const basePath = `${data.rootPath}/modules/{{dashCase name}}`;
  
      const operationMap = {
        create: [
          {
            type: 'add',
            path: `${basePath}/commands/create-{{dashCase name}}/create-{{dashCase name}}.command.ts`,
            templateFile: 'templates/module/commands/create/command.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/commands/create-{{dashCase name}}/create-{{dashCase name}}.controller.ts`,
            templateFile: 'templates/module/commands/create/controller.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/commands/create-{{dashCase name}}/create-{{dashCase name}}.request.ts`,
            templateFile: 'templates/module/commands/create/request.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/commands/create-{{dashCase name}}/create-{{dashCase name}}.service.ts`,
            templateFile: 'templates/module/commands/create/service.hbs',
            skipIfExists: data.skipIfExists
          },
        ],
        update: [
          {
            type: 'add',
            path: `${basePath}/commands/update-{{dashCase name}}/update-{{dashCase name}}.command.ts`,
            templateFile: 'templates/module/commands/update/command.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/commands/update-{{dashCase name}}/update-{{dashCase name}}.controller.ts`,
            templateFile: 'templates/module/commands/update/controller.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/commands/update-{{dashCase name}}/update-{{dashCase name}}.request.ts`,
            templateFile: 'templates/module/commands/update/request.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/commands/update-{{dashCase name}}/update-{{dashCase name}}.service.ts`,
            templateFile: 'templates/module/commands/update/service.hbs',
            skipIfExists: data.skipIfExists
          },
        ],
        delete: [
          {
            type: 'add',
            path: `${basePath}/commands/delete-{{dashCase name}}/delete-{{dashCase name}}.command.ts`,
            templateFile: 'templates/module/commands/delete/command.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/commands/delete-{{dashCase name}}/delete-{{dashCase name}}.controller.ts`,
            templateFile: 'templates/module/commands/delete/controller.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/commands/delete-{{dashCase name}}/delete-{{dashCase name}}.service.ts`,
            templateFile: 'templates/module/commands/delete/service.hbs',
            skipIfExists: data.skipIfExists
          },
        ],
        get: [
          {
            type: 'add',
            path: `${basePath}/queries/get-{{dashCase name}}/get-{{dashCase name}}.query.ts`,
            templateFile: 'templates/module/queries/get/query.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/queries/get-{{dashCase name}}/get-{{dashCase name}}.controller.ts`,
            templateFile: 'templates/module/queries/get/controller.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/queries/get-{{dashCase name}}/get-{{dashCase name}}.service.ts`,
            templateFile: 'templates/module/queries/get/service.hbs',
            skipIfExists: data.skipIfExists
          },
        ],
        getList: [
          {
            type: 'add',
            path: `${basePath}/queries/get-{{dashCase name}}-list/get-{{dashCase name}}-list.query.ts`,
            templateFile: 'templates/module/queries/get-list/query.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/queries/get-{{dashCase name}}-list/get-{{dashCase name}}-list.controller.ts`,
            templateFile: 'templates/module/queries/get-list/controller.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/queries/get-{{dashCase name}}-list/get-{{dashCase name}}-list.service.ts`,
            templateFile: 'templates/module/queries/get-list/service.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/queries/get-{{dashCase name}}-list/get-{{dashCase name}}-list.request.ts`,
            templateFile: 'templates/module/queries/get-list/request.hbs',
            skipIfExists: data.skipIfExists
          },
          {
            type: 'add',
            path: `${basePath}/queries/get-{{dashCase name}}-list/get-{{dashCase name}}-list.response.ts`,
            templateFile: 'templates/module/queries/get-list/response.hbs',
            skipIfExists: data.skipIfExists
          },
        ]
      }

      const operation = operationMap[data.operation]

      if (!operation)  {
        throw new Error('The operation is not implemented.')
      }
      
      return operation
    },
  })
  //#endregion
  
}
