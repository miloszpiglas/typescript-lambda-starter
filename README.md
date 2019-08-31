# Starter for AWS Lambda functions written in Typescript

Simple starter for new AWS Lambda functions. Provides base tools for testing (JEST), validating (TSLint) and custom scripts.

# Project structure
- jest.config.js - JEST framework configuration,
- package.json - NPM configuration,
- tsconfig.json - Typescript configuration,
- tslint.json - Tslint rules,
- src - example AWS Lambda handler,
- test - unit tests executed by JEST

# Commands
- ```npm test``` - run unit tests from ```test``` directory with framework JEST,
- ```npm run tslint``` - check source files with Tslint,
- ```npm run build``` - compiles files from ```src``` with Typescript compiler and outputs result to ```build``` directory,
- ```npm run package``` - builds deployment archive from compiled sources and dependencies localized in ```node_modules```. To save space ```npm prune --production``` should be run before this command. Output is saved in file ```function.zip```. 