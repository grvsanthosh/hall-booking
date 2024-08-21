import bookingService from '../Service/BookingService.js';
import express from 'express';

const roombookedController = express.Router();
const customerServiceController = express.Router();
const customerHistoryController = express.Router();

roombookedController.get('/',bookingService.roombookedService)
customerServiceController.get('/',bookingService.customerService)
customerHistoryController.get('/',bookingService.customerHistory)

export default {roombookedController,customerServiceController,customerHistoryController}