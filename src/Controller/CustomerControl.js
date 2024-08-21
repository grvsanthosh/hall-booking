import express from 'express';
import {customerService} from '../Service/CustomerService.js';


export const customerController = express.Router();

customerController.post('/',customerService);
