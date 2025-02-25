import * as express from 'express'
import * as cors from 'cors'
import { AppDataSource } from './data-source'
import router from './router'

const app = express()

// Настроенный CORS для разрешения запросов с фронта
app.use(
	cors({
		origin: '*', // Разрешить все домены, или можешь указать свой фронт (например, http://localhost:8080)
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true, // Разрешить использование куки, если нужно
	})
)
app.use(express.json())
app.use('/api', router)

const PORT = 3000

AppDataSource.initialize()
	.then(() => {
		console.log('Database connected')
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
	})
	.catch(error => console.log(error))
