import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Booking } from '../entity/Booking'
import { Repository } from 'typeorm'

export class BookingController {
	private bookingRepository: Repository<Booking>

	constructor() {
		this.bookingRepository = AppDataSource.getRepository(Booking)
	}

	// Получить все бронирования
	async getAllBookings(req: Request, res: Response) {
		try {
			const bookings = await this.bookingRepository.find({
				relations: ['tour'],
			})
			return res.json(bookings)
		} catch (error) {
			return res
				.status(500)
				.json({ message: 'Ошибка при получении бронирований' })
		}
	}

	// Создать бронирование
	async createBooking(req: Request, res: Response) {
		try {
			const newBooking = this.bookingRepository.create(req.body)
			const savedBooking = await this.bookingRepository.save(newBooking)
			return res.status(201).json(savedBooking)
		} catch (error) {
			return res
				.status(500)
				.json({ message: 'Ошибка при создании бронирования' })
		}
	}
}
