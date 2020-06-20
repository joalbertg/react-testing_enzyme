# Counter component with testing, enzyme

- [Jest][jestjs]
- [Enzyme][enzyme]
- [Enzyme to json][enzyme_to_json]

[jestjs]: https://jestjs.io/docs/en/expect
[enzyme]: https://enzymejs.github.io/enzyme/
[enzyme_to_json]: https://www.npmjs.com/package/enzyme-to-json

### Scripts

> run `yarn test`

> run `yarn start`

### Installs

```shell
yarn add enzyme enzyme-adapter-react-16 --dev
yarn add enzyme-to-json --dev
```

#### Project Structure

> run `tree -I "node_modules|public"`
```shell
.
├── README.md
├── package.json
├── src
│   ├── CounterApp.js
│   ├── FirstApp.js
│   ├── base
│   │   ├── 02-template-string.js
│   │   ├── 05-funciones.js
│   │   ├── 06-deses-obj.js
│   │   ├── 07-deses-arr.js
│   │   ├── 08-imp-exp.js
│   │   ├── 09-promesas.js
│   │   └── 11-async-await.js
│   ├── data
│   │   └── heroes.js
│   ├── index.css
│   ├── index.js
│   ├── setupTests.js
│   └── tests
│       ├── CounterApp.test.js
│       ├── FirstApp.test.js
│       ├── __snapshots__
│       │   ├── CounterApp.test.js.snap
│       │   └── FirstApp.test.js.snap
│       ├── base
│       │   ├── 02-template-string.test.js
│       │   ├── 05-funciones.test.js
│       │   ├── 07-deses-arr.test.js
│       │   ├── 08-imp-exp.test.js
│       │   ├── 09-promesas.test.js
│       │   └── 11-async-await.test.js
│       └── demo.test.js
└── yarn.lock

6 directories, 27 files
```

