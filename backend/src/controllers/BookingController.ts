import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Booking } from '../entity/Booking'
import { Repository } from 'typeorm'
import { Tour } from '../entity/Tour'

export class BookingController {
	private bookingRepository: Repository<Booking>

	constructor() {
		this.bookingRepository = AppDataSource.getRepository(Booking)
	}

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

	createBooking = async (req: Request, res: Response) => {
		try {
			const { tour, name, email, phone, telegram } = req.body

			const tourRepository = AppDataSource.getRepository(Tour)
			const tourEntity = await tourRepository.findOne({ where: { name: tour } })

			if (!tourEntity) {
				return res.status(400).json({ message: 'Тур не найден' })
			}

			const bookingRepository = AppDataSource.getRepository(Booking)
			const newBooking = bookingRepository.create({
				name,
				email,
				phone,
				telegramLink: telegram,
				tour: tourEntity,
			})

			await bookingRepository.save(newBooking)
			return res
				.status(201)
				.json({ message: 'Бронирование успешно создано', booking: newBooking })
		} catch (error) {
			console.error('Ошибка при создании бронирования:', error)
			return res.status(500).json({ message: 'Ошибка сервера' })
		}
	}
}
