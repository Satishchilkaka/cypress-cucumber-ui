# cypress-cucumber-ui
 
Cypress integrate with cucumber framework

## Development server

Run `nx serve cypress-cucumber-ui` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `nnx build cypress-cucumber-ui` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `nx test cypress-cucumber-ui` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `nx e2e` to execute the end-to-end tests via Cypress

### Run cypress e2e test without UI
```
Open new terminal:
npm install
nx e2e
```

### Run cypress e2e test with UI
```
Open new terminal:
npm install
nx e2e --watch

```
### Run cypress e2e with Cucumber integration
```
nx e2e --watch


