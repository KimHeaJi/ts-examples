## primeReact

### https://www.primefaces.org/primereact [DataTable]

---

### Create CRA TypeScript App

> yarn global add create-react-app <br>
> yarn create react-app prime-react-grid-component --template=typescript <br>
> yarn add styled-components react-router-dom dotenv --save <br>
> yarn add --save-dev @types/styled-components babel-plugin-styled-components @types/react-router-dom <br>
> yarn add -D gh-pages <br>
> yarn add primereact primeicons <br>

---

#### CRA Alias

> yarn add @craco/craco <br>
> yarn add craco-alias -D <br>
> create craco.config.js <br>

```
// craco.config.js

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
// tsconfig.paths.json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      // 파일
      "@pages": ["./pages/index.ts"],

      // 폴더
      "@components/*": ["./components/*"],
    }
  }
}
```

> tsconfig.json 코드 추가

```
// tsconfig.json

{
  "extends": "./tsconfig.paths.json", // <- extends 추가
  "compilerOptions": {
    ...
    ...
  }
}
```

> "Can’t parse tsconfig.extend.json." 에러 발생 해결 방법<br>

```
// tsconfig.paths.json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      // 파일
      "@pages": ["./pages/index.ts"],

      // 폴더
      "@components/*": ["./components/*"],
    },  // <- 콤마 제거
  },  // <- 콤마 제거
}
```
