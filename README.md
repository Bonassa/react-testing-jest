# Testes unitarios no React

Este projeto é uma implementação simples de testes dentro do React

## Stack utilizada
- [ReactJS](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

## Utilização do JEST
Após instalar o Jest, iremos rodar as configurações iniciais com o comando
```
  npx jest --init
```

E depois instalar o ts-node para o jest interpretar o typescript, como nas configurações anteriores utilizamos o typescript na inicialização do jest
```
  npm install ts-node -D
```

O Jest não consegue por padrão interpretar os components React, para isso podemos usar o swc
```
  npm install @swc/core @swc/jest -D
```

e configurar no arquivo `jest.config.ts` a tag transform.

```ts title="jest.config.ts"
transform: {
  "^.+\\.(t|j)sx?$": [
    "@swc/jest",
    {
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
          decorators: true,
        },
        keepClassNames: true,
        transform: {
          legacyDecorator: true,
          decoratorMetadata: true,
          react: {
            runtime: "automatic",
          },
        },
      },
      module: {
        type: "es6",
        noInterop: false,
      },
    },
  ],
},
```

Depois desta configuração, ainda precisamos instalar algumas bibliotecas do testing library
``` bash
  npm install @testing-library/react @testing-library/jest-dom @testing-library/user-event -D
```

Para corrigir um erro do JSDOM, instale o pacote abaixo
```
  npm install -D jest-environment-jsdom
```

## Instalações
- Instalação do Jest como dependência de desenvolvimento e a tipagem
```
  npm install jest -D

  npm install @types/jest -D
```

## Rodando a aplicação
Primeiramente instale as dependências com o comando
```
  npm install
```

Para rodar a aplicação em modo de desenvolvimento, utilize
```
  npm run dev
```