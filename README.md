# FokoChat

Angular 8 / NodeJS chat with groups and private messaging. Supports two API: AngularFirestore gRPC and NodeJS/Websockets API

## Installation

You should have installed "node": "10.x" and "npm": "6.x" to run the applcation.
To install both server and client dependendencies run "npm i".

## Build

Run `npm run build-server` to build the server-side of the project. The build artifacts will be stored in the `server/` directory.
Run `npm run build` to build the client-side of the project. The build artifacts will be stored in the `public/` directory.
Run `npm run build-all` to build both.

## Development server

Run `npm start` to run server and render builded angular application from `public/` directory. Navigate to `http://localhost:8080/`
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
