import express from 'express';
import {roomService} from '../Service/RoomService.js';

export const roomController = express.Router();
roomController.post('/',roomService)