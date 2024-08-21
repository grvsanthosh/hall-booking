import {roomController} from './RoomControl.js';
import {customerController} from './CustomerControl.js'
import BookingControl from './BookingControl.js'
import express from 'express';

const useController = express.Router();


useController.use('/createroom',roomController);
useController.use('/bookroom',customerController);
useController.use('/roombooked',BookingControl.roombookedController);
useController.use('/customerservice',BookingControl.customerServiceController);
useController.use('/customerhistory',BookingControl.customerHistoryController);

export default useController

