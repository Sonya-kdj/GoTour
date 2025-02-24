import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Tour } from './entity/Tour'
import { Booking } from './entity/Booking'

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 8889,
	username: 'root',
	password: 'root',
	database: 'tourism_agency',
	synchronize: true,
	logging: false,
	entities: [Tour, Booking],
	migrations: [],
	subscribers: [],
})
