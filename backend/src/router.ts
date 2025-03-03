import { Router } from 'express'
import { TourController } from './controllers/TourController'
import { BookingController } from './controllers/BookingController'

const router = Router()
const tourController = new TourController()
const bookingController = new BookingController()

// Роуты для туров
router.get('/tours', tourController.getAllTours.bind(tourController))
router.get('/tours/:id', tourController.getTourById.bind(tourController))
router.post('/tours', tourController.createTour.bind(tourController))
router.put('/tours/:id', tourController.updateTour.bind(tourController))
router.delete('/tours/:id', tourController.deleteTour.bind(tourController))

// Роуты для бронирования
router.get(
	'/bookings',
	bookingController.getAllBookings.bind(bookingController)
)
router.post(
	'/bookings',
	bookingController.createBooking.bind(bookingController)
)

export default router

//GET /api/tours — получить список туров
//	•	GET /api/tours/:id — получить один тур
//	•	POST /api/tours — создать тур
//	•	PUT /api/tours/:id — обновить тур
//	•	DELETE /api/tours/:id — удалить тур
//	•	GET /api/bookings — получить все бронирования
//	•	POST /api/bookings — создать бронирование
