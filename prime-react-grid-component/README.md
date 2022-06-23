## primeReact

### https://www.primefaces.org/primereact [DataTable ]

---

### Create CRA TypeScript App

> yarn create react-app prime-react-grid-component --template=typescript
> yarn add -S styled-components react-router-dom dotenv
> yarn add --save-dev @types/styled-components babel-plugin-styled-components @types/react-router-dom
> yarn add -D gh-pages
> yarn add primereact primeicons

---

#### CRA Alias

> yarn add @craco/craco
> yarn add craco-alias -D
> create craco.config.js

```
  const CracoAlias = require("craco-alias");

  module.exports = {
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: "tsconfig",
          tsConfigPath: "tsconfig.paths.json",
        },
      },
    ],
  };
```

> create tsconfig.paths.json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      ..
      ..
    }
  }
}
```

> tsconfig.json 코드 추가

```
  "extends": "./tsconfig.paths.json",
```
