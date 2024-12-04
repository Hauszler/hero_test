#Estudo de testes -  Cypress Heroes Demo Application

link repo: https://github.com/cypress-io/cypress-heroes

## App Overview

The Cypress Heroes app consists of a frontend client app written in React that
uses Vite, as well as a backend app that uses NestJS.


## Install and Run

The app is a mono repo that uses npm workspaces. Once you clone the project, install the dependencies at the root folder:
```bash
npm install
```
After that a few more things need to be set up (databases and such), to do so run:
```bash
npm run setup
```
To launch the app for development, run:
```bash
npm run dev
```
This will start both the client and server apps in dev mode. 

The site will be available at http://localhost:3000.

run Cypress on the Client Folder

```bash
npx cypress open
```

## Test Scenario

The test scenario was created in Excel, including detailed descriptions and step-by-step instructions for the tests.
You can check it out here: https://docs.google.com/spreadsheets/d/1x7okS3DI5ao8VlYUSCZKzm-cAfbtENCZ/edit?usp=drive_link&ouid=106625780578362785960&rtpof=true&sd=true
