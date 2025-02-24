import { AppDataSource } from './data-source'
import { Booking } from './entity/Booking'
import { Tour } from './entity/Tour'
AppDataSource.initialize()
	.then(async () => {
		console.log('Inserting a new user into the database...')
	})
	.catch(error => console.log(error))
