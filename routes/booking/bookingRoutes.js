import express from 'express';
import { addBooking, deleteBooking, getAllBookings, getBookingById, updateBooking } from '../../controllers/booking/bookingController.js';

const bookingRouter = express.Router();

// @route   GET /api/bookings
// @desc    Get all bookings
bookingRouter.get('/',getAllBookings);

// @route   GET /api/bookings/:id
// @desc    Get booking by ID
bookingRouter.get('/:id', getBookingById);

// @route   POST /api/bookings
// @desc    Create new booking
bookingRouter.post('/', addBooking);

// @route   PUT /api/bookings/:id
// @desc    Update booking
bookingRouter.put('/:id', updateBooking);

// @route   DELETE /api/bookings/:id
// @desc    Delete booking
bookingRouter.delete('/:id', deleteBooking);

export default bookingRouter
