# Asset Dashboard User Interface

## Features
Display the list of known assets read from persistence layer. New asset can come from event coming into the deployed solution: the BFF code connect to Kafka topic for the arrival of new asset event and key performance indicator events.

## Development
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1. The user interface features are under the features folder.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

To package the application with NGinx as docker image and run it locally using the script `./build.sh`. But we choose to serve the application from the [BFF](../asset-dashboard-bff) code. So one the code is compiled in the `dist` folder a script will copy it for packaging into the BFF.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code explanation
We encourage you to read our Angular practices from [the case portal project](https://github.com/ibm-cloud-architecture/refarch-caseportal-app/blob/master/docs/code-explanation.md). For this project we are using the following interesting features:
* [Websocket service to get real time data ](#websocket-service-to-get-real-time-data)

### Websocket service to get real time data
We add a generic webSocketService to connect to an end point and open a websocket. It connects to any given URL and returns [RxJS Subject](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md) that we can subscribe to in other services/components in order to listen for any incoming messages from the connected socket. Subject observes and is observable. It 'listens' to the websocker for any incoming message and broadcast them to any components or services that subscribe to it.

To make the generic websocket wrapper service more specific to the application, we create a second service for Asset integration. The AssetService adapts the output from the websocket into Asset that we can easily presented in HTML.

```
```
