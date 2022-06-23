## primeReact

### https://www.primefaces.org/primereact [DataTable]

---

### Create CRA TypeScript App

> yarn create react-app prime-react-grid-component --template=typescript <br>
> yarn add -S styled-components react-router-dom dotenv <br>
> yarn add --save-dev @types/styled-components babel-plugin-styled-components @types/react-router-dom <br>
> yarn add -D gh-pages <br>
> yarn add primereact primeicons <br>

---

#### CRA Alias

> yarn add @craco/craco <br>
> yarn add craco-alias -D <br>
> create craco.config.js <br>

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
