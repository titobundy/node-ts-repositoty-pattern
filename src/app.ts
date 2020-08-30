process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

//import dotenv = require('dotenv');
import * as dotenv from "dotenv";

dotenv.config({
    path: `${__dirname}/config/${process.env.APP_ENV}.env`
});

console.log(process.env.APP_FOO);

//import express = require('express');
import express from 'express';
import { loadControllers } from 'awilix-express'
import loadContainer from './container';

const app:express.Application = express();

// app.get('/', (req, res) => {
//     res.send('Running');
// });

// Container
loadContainer(app);

// Controllers
app.use(loadControllers(
    'controllers/*.ts',
    { cwd: __dirname }
));


// import { container } from './container';
// import { TestService } from "./test.service";

// const testService = container.resolve<TestService>('testService');

// console.log(testService.get());

export { app }