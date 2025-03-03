import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Tour } from '../entity/Tour'
import { Repository } from 'typeorm'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export class TourController {
	private tourRepository: Repository<Tour>

	constructor() {
		this.tourRepository = AppDataSource.getRepository(Tour)
	}

	private formatTourDates(startDate: Date, endDate: Date): string {
		const formattedStart = format(startDate, 'd', { locale: ru }) // 'd' для дня без нуля
		const formattedEnd = format(endDate, 'd', { locale: ru }) // 'd' для дня без нуля
		const month = format(startDate, 'LLLL', { locale: ru }).toUpperCase()

		return `${formattedStart} - ${formattedEnd} ${month}`
	}

	// Получить все туры
	async getAllTours(req: Request, res: Response) {
		try {
			const tours = await this.tourRepository.find()
			const formattedTours = tours.map(tour => ({
				...tour,
				formattedDate: this.formatTourDates(tour.startData, tour.endData),
			}))
			return res.json(formattedTours)
		} catch (error) {
			return res.status(500).json({ message: 'Ошибка при получении туров' })
		}
	}

	// Получить один тур по ID
	async getTourById(req: Request, res: Response) {
		try {
			const tour = await this.tourRepository.findOneBy({
				id: Number(req.params.id),
			})
			if (!tour) {
				return res.status(404).json({ message: 'Тур не найден' })
			}

			return res.json({
				...tour,
				formattedDate: this.formatTourDates(tour.startData, tour.endData),
			})
		} catch (error) {
			return res.status(500).json({ message: 'Ошибка при получении тура' })
		}
	}

	// Создать новый тур
	async createTour(req: Request, res: Response) {
		try {
			const newTour = this.tourRepository.create(req.body)
			const savedTour = await this.tourRepository.save(newTour)
			return res.status(201).json(savedTour)
		} catch (error) {
			return res
				.status(500)
				.json({ message: 'Ошибка при создании тура', error: error.message })
		}
	}

	// Обновить тур
	async updateTour(req: Request, res: Response) {
		try {
			const id = Number(req.params.id)
			let tour = await this.tourRepository.findOneBy({ id })

			if (!tour) {
				return res.status(404).json({ message: 'Тур не найден' })
			}

			tour = { ...tour, ...req.body }
			await this.tourRepository.save(tour)
			return res.json(tour)
		} catch (error) {
			return res.status(500).json({ message: 'Ошибка при обновлении тура' })
		}
	}

	// Удалить тур
	async deleteTour(req: Request, res: Response) {
		try {
			const id = Number(req.params.id)
			const result = await this.tourRepository.delete(id)

			if (result.affected === 0) {
				return res.status(404).json({ message: 'Тур не найден' })
			}

			return res.json({ message: 'Тур удален' })
		} catch (error) {
			return res.status(500).json({ message: 'Ошибка при удалении тура' })
		}
	}
}
